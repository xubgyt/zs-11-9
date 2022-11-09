import React from 'react';
import Image from 'next/image';

const LeftCard = ({ product }) => {
  return (
    <div className='description'>
                <div className='mt-4'>
                    <div>
                        <Image
                            unoptimized
                            src={product.cover.url}
                            alt={product.name}
                            width={700}
                            height={700}
                            className='rounded-md'
                        />
                        <h3 className='font-semibold text-xl my-2'>Top Up {product.item} {product.name}</h3>
                    </div>
                    <div>
                        <p>
                            Cukup masukan User ID {product.name} Anda, kemudian pilih nominal diamond yang ingin dibeli
                            Selesaikan pembayaran setelah Konfirmasi via WhatsApp dan Diamond akan secara langsung
                            ditambahkan ke akun Anda.
                            <br/><br/>
                            Bayar dengan berbagai macam metode pembayaran, tanpa perlu registrasi ataupun login. 
                        </p>
                    </div>
                </div>
            </div>
  )
}

export default LeftCard;