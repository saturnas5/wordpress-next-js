import '../styles/globals.css'
import store from "../redux/store";
import { Provider } from 'react-redux';
import React from "react";
import Layout from "../Layout/Layout";
import {endpoints} from "../lib/endpointsConfig";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps, products, categories }) {
  return (
          <Provider store={store}>
              <Header categories={categories}/>
              <Component {...pageProps} products={products} />
              <Footer/>
          </Provider>
  )
}

MyApp.getInitialProps = async () => {
    const res = await fetch(endpoints.allProducts);
    const productsData = await res.json();

    const catData = await fetch(endpoints.getCategories);
    const categories = await catData.json();

    return {
        products: productsData,
        categories: categories,
    }
}

export default MyApp;
