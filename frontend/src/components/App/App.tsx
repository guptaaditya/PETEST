import React from 'react';
import { AppStyles } from './AppStyles';
import ProductsList from 'containers/ProductsList';

function App() {
  return (
      <AppStyles className="App">
          <header className="App-header">
              <ProductsList />
          </header>
      </AppStyles>
  );
}

export default App;
