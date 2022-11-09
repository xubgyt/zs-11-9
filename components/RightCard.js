import React, { useState } from 'react';
import Image from 'next/image';

const RightCard = ({ product }) => {

    const [idUser, setIdUser] = useState();
    const [nickUser, setNickUser] = useState();
    const [remaindItem, setRemaindItem] = useState();
    const [paymentMethod, setPaymentMethod] = useState();
    const [nominalDiamond, setNominalDiamond] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = `https://api.whatsapp.com/send?phone=6281228843058&text=Halo%20Admin,%20Saya%20Mau%20TopUp%20*${product.name}*.%0A%0ADetail%20Pesanan%20%3A%0A%0AUser%20ID%20%3A%20${idUser}%0ANickname%20%3A%20${nickUser}%0ASisa%20Diamond%20%3A%20${remaindItem}%0AJumlah%20Pembelian%20dan%20Pembayaran%20%3A%20${nominalDiamond}%0APembayaran%20%3A%20${paymentMethod}%0A%0ASilahkan%20Lakukan%20Pembayaran%2C%20dan%20Kirimkan%20Bukti%20Transfer%20ke%20Admin%20Agar%20Pesanan%20Kami%20Proses%0A%0AVia%20Web KyyStore
        `;

        window.open(url);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <fieldset className='bg-slate-800 p-4 rounded-md my-4'>
                <h3>
                    <b>1. </b>
                    Massukan User ID {product.slug === `mobile-legends` ? `dan (Zone ID)` : ``}
                </h3>
                <input name='user_id' value={idUser} onChange={(e) => setIdUser(e.target.value)} className={` border-slate-500 p-4 w-full rounded-md text-black my-4 focus:outline-none`} placeholder={`Masukkan User ID ${product.slug === `mobile-legends` ? `dan (Zone ID)` : ``} `} required type='text'></input>
                <p className='text-sm text-slate-300'>
                    {product.description}
                </p>
            </fieldset>
            <fieldset className='bg-slate-800 p-4 rounded-md my-4'>
                <h3>
                    <b>2. </b>
                    Nickname (Opsional)
                </h3>
                    <input name='user_nickname' value={nickUser} onChange={(e) => setNickUser(e.target.value)} className={` border-slate-500 p-4 w-full rounded-md text-black my-4 focus:outline-none`} placeholder='Masukkan Nickname Anda' type='text'></input>
            </fieldset>
            <fieldset className='bg-slate-800 p-4 rounded-md'>
                <h3>
                    <b>3. </b>
                    Sisa {product.item} (Opsional) 
                </h3>
                    <input name='item_remaind' value={remaindItem} onChange={(e) => setRemaindItem(e.target.value)} className={` border-slate-500 p-4 w-full rounded-md text-black my-4 focus:outline-none`} placeholder={`Masukkan Sisa ${product.item} Anda`} type='number'></input>
            </fieldset>
            <fieldset className='bg-slate-800 p-4 rounded-md my-4'>
                <h3>
                    <b>4. </b>
                    Pilih Nominal Top Up
                </h3>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 my-6'>

                        {product.nominal.map((nom, index)=>(
                            <label key={index} className='hover:cursor-pointer hover:bg-slate-700 hover:duration-300 hover:ease-linear shadow-sm shadow-slate-200 p-4 px-8 text-center rounded-md relative qty'>
                                <input name='item_qty_n_price' value={nom} onChange={(e) => setNominalDiamond(e.target.value)} className='opacity-0 absolute top-0 right-0' required type='radio'></input>
                                <span>{nom}</span>
                            </label>
                        ))}
                    
                    </div>
            </fieldset>
            <fieldset className='bg-slate-800 p-4 rounded-md my-4'>
                <h3>
                    <b>5. Pilih Metode Pembayaran</b>
                </h3>
                <div className='grid'>
                            {product.payments.map((pay, index)=>(
                                <label key={index} className='hover:cursor-pointer shadow-sm shadow-slate-200 p-2 bg-white rounded-md my-2 pay relative'>
                                    <input name='payments_method' className='opacity-0 absolute' value={pay.name} onChange={(e) => setPaymentMethod(e.target.value)} required type='radio'></input>
                                    <Image 
                                        unoptimized
                                        src={pay.image.url}
                                        width={100}
                                        height={100}
                                        className='my-auto'
                                        alt={pay.name}
                                    />
                                    <span className='text-slate-900 text-xs p-2'>Bayar dengan <span className='font-semibold'>{pay.name}</span></span>
                                </label>
                            ))}
                </div>
            </fieldset>
            <button className='text-center p-4 rounded-md bg-slate-800 w-full hover:bg-black hover:bg-opacity-30 hover:duration-300 hover:ease-linear'>Beli Sekarang</button>
        </form>
    </div>
  )
}

export default RightCard;