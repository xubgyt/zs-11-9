import Layout from '../layout';
import Swipper from '../components/Swipper';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../service';

export default function Home({ products }) {
  return (
    <Layout pageTitle='Beranda'>
      <section className='py-32 w-full justify-self-center container mx-auto'>
        <Swipper/>
          <div className='grid md:grid-cols-6 grid-cols-3 gap-4 py-12 px-4 md:px-12'>
            {products.map((product, index) => [
              <ProductCard key={index} product={product} />
            ])}
          </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const products = (await getProducts()) || [];

  return {
    props: { products },
  };
}