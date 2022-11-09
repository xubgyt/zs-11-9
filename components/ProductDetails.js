import React from 'react';
import LeftCard from './LeftCard';
import RightCard from './RightCard';

const ProductDetails = ({ product }) => {
  return (
    <>
        <div className='grid lg:grid-cols-2 gap-4'>
            <LeftCard product={product} />
            <RightCard product={product} />
        </div>
    </>
  )
}

export default ProductDetails;