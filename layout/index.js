import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children, pageTitle }) => {
  return (
    <>
        <Head>
            <title>KyyStore | { pageTitle }</title>
            <meta name="description" content="Website Top Up Termurah di Indonesia" />
            <link rel="icon" href="/image/logo.png" />
        </Head>
        <Header/>
            {children}
        <Footer/>
    </>
  )
}

export default Layout;