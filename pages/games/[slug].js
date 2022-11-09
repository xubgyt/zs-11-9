import React from 'react';
import { getProducts, getProductDetails } from '../../service';
import Layout from '../../layout';
import ProductDetails from '../../components/ProductDetails';

const Games = ({ product }) => {
  return (
    <Layout pageTitle={`Top Up ${product[0].name}`}>
      <section className='container w-full py-32 lg:px-12 px-2'>
        <ProductDetails product={product[0]}/>
      </section>
    </Layout>
  )
}

export default Games;

export async function getStaticProps ({ params }) {
  const data = await getProductDetails(params.slug);

  return {
    props: {
      product: data,
    },
  }
}

export async function getStaticPaths () {
  const products = await getProducts();
  return {
    paths: products.map(( { slug } ) => ({ params: {slug} })),
    fallback: false
  }
}