import styled from 'styled-components';
import Button from 'components/Button';

export const StyledButton = styled(Button)`
  visibility: ${({ isVisible }) => isVisible ? 'visible': 'hidden' };
`;

export const ViewCart = styled.button<{isVisible: boolean}>`
  position: fixed;
  top: 20px;
  right: 20px;
  visibility: ${({ isVisible }) => isVisible ? 'visible': 'hidden' };
  background: white;
  color: black;
`;

export const ProductSelector = styled.div`
  display: flex;
  column-gap: 5px;

  button {
    width: 40px;
  }
`;

export const ProductStyles = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-self: center;
    padding-top: 22px;

    hr {
      color: red;
    }

    .products-list {
      margin: 20px;
      display: flex;
      column-gap: 20px;
    }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 150px;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  color: black;
`;

export const ProductName = styled.div`
`;

export const ProductQuantity = styled.span`
    min-width: 50px;
`