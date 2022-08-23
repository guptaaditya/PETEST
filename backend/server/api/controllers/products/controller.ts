import ProductsService from '../../services/products.service';
import { Request, Response } from 'express';

const { format: currencyUSDFormatter } = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export class Controller {
  all(req: Request, res: Response): void {
    ProductsService.all().then((r) => res.json(r));
  }

  byId(req: Request, res: Response): void {
    const id = Number.parseInt(req.params['id']);
    ProductsService.byId(id).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  create(req: Request, res: Response): void {
    const { name, customerPrice, cost } = req.body;
    ProductsService.create(name, customerPrice, cost).then((r) =>
      res.status(201).location(`/api/v1/product/${r.id}`).json(r)
    );
  }

  async addToCart(req: Request, res: Response): Promise<void> {
    // As per description we are still not creating a cart but querying the information
    const { productsQuantity } = req.body;
    const productsListMap = productsQuantity.reduce(
      (
        idQuantityMap: { [key: number]: number },
        item: { productId: number; quantity: number }
      ) => {
        idQuantityMap[item.productId] = item.quantity;
        return idQuantityMap;
      },
      {}
    );
    const productsInformation = await ProductsService.byIdList(
      Object.keys(productsListMap).map(Number)
    );

    let grandTotal = 0;
    const productsTotal = productsInformation.map(
      ({ id, name, customerPrice }) => {
        const quantity = productsListMap[id];
        const productsTotalPrice = customerPrice * quantity;
        grandTotal += productsTotalPrice;

        return {
          name,
          quantity,
          price: currencyUSDFormatter(customerPrice / 100),
          totalPrice: currencyUSDFormatter(productsTotalPrice / 100),
        };
      }
    );

    res.status(200).json({
      productsInformation: productsTotal,
      grandTotal: currencyUSDFormatter(grandTotal / 100),
    });
  }
}
export default new Controller();
