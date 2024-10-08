import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';

const EcommerceApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default EcommerceApp;
