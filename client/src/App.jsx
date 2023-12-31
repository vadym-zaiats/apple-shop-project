/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { PersistGate } from 'redux-persist/integration/react';
import Basket from './assets/pages/Basket';
import HomeContent from './assets/pages/Home';
import Header from './assets/components/Header';
import Login from './assets/pages/Login';
import Registration from './assets/pages/Registration';
import ProductDescription from './assets/components/ProductDescription';
import PageNotFound from './assets/components/NotFoundPage';
import store, { persistor } from './assets/redux/store';
import theme from './assets/themes/theme';
import ProductsContent from './assets/pages/Products';
import About from './assets/components/AboutUs';
import UserPage from './assets/pages/UserPage';
import Init from './assets/components/Init';
import RequireAuth from './assets/private/RequireAuth';
import WishListPage from './assets/pages/WishListPage';

function App() {
  return (
    <Provider store={store}>
      <Init />
      <PersistGate loading="LDNG" persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route path="/about" element={<About />} />
                <Route
                  path="/user"
                  element={
                    <RequireAuth>
                      <UserPage />
                    </RequireAuth>
                  }
                />
                <Route index element={<HomeContent />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/wishlist" element={<WishListPage />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/product" element={<ProductsContent />} />
                <Route path="/product/:id" element={<ProductDescription />} />
                <Route path="/product/not-found" element={<PageNotFound />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
