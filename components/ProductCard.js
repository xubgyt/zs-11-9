import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({product}) => {
  return (
    <Link href={`/games/${product.slug}`} className='hover:-translate-y-2 hover:duration-500 duration-500'>
        <Image
            unoptimized
            src={product.image.url}
            alt={product.name}
            width={150}
            height={150}
            className='rounded-md'
        />
        <p className='font-semibold'>{product.name}</p>
    </Link>
  )
}

export default ProductCard;