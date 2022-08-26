import Header from "../components/Header/Header";
import Head from 'next/head';
import styles from './Layout.module.css';
import Footer from "../components/Footer/Footer";
import React, {Component} from "react";

const Layout = ({ children, categories }) => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} categories={categories}/>
            <div className={styles.body}>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export const withLayOut = (Component) => {
    return function withLayoutComponent(props) {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        );
    };
};