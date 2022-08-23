import styled from 'styled-components';

export const CloseCart = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: black;
  color: white;
`;

export const CartInformation = styled.div`
  display: flex;
  column-gap: 40px;
`;

export const CartCardStyle = styled.div`
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

export const CartContainer = styled.div`
    position: fixed;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: white;
    color: black;
    width: 75vw;
    height: 90vh; 
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const GrandTotal = styled.div`
`;