import React, { useState, useEffect }from 'react';
import {getPayments, getContacts} from '../service';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    const [payments, setPayments] = useState([]);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getPayments().then((newPayments) => {
        setPayments(newPayments);
        });
    }, []);

    useEffect(() => {
        getContacts().then((newContacts) => {
        setContacts(newContacts);
        });
    }, []);

  return (
    <footer className='w-full mx-auto container'>
        <div className='bg-slate-400 bg-opacity-50 text-slate-300 grid lg:grid-cols-3 p-12'>
            <div className='font-semibold'>
                <p className='mb-3 text-slate-900 font-extrabold'>Butuh Bantuan?</p>
                {contacts.map((contact, index) => (
                    <Link href={contact.url} key={index} className='hover:text-white hover:duration-500 hover:ease-in-out'><p>{contact.name}</p></Link>
                ))}
            </div>

            <div>
                <p className='mt-6 mb-3 text-slate-900 font-extrabold'>Produk Populer</p>
                <ul className='font-semibold'>
                    <li><Link href='/games/free-fire' className='hover:text-white hover:duration-500 hover:ease-in-out'>Top Up Free Fire</Link></li>
                    <li><Link href='/games/mobile-legends' className='hover:text-white hover:duration-500 hover:ease-in-out'>Top Up Mobile Legends</Link></li>
                </ul>
            </div>

            <div>
                <p className='mt-6 mb-3 text-slate-900 font-extrabold'>Metode Pembayaran</p>
                <ul className='grid grid-cols-5 gap-2'>
                    {payments.map((payment, index) => (
                        <li key={index}>
                            <Image unoptimized src={payment.image.url} alt={payment.name} width={100} height={100} className='rounded-sm'/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className='bg-slate-900 text-slate-600 px-12 py-2 text-center'>
            ©2022 KyyStore
        </div>
    </footer>
  )
}

export default Footer;

export async function getStaticProps () {
    const payments = await getPayments();
    const contacts = await getContacts();

    return {
        props: { 
            payments,
            contacts 
        },
    };
}