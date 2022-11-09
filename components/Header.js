import Link from 'next/link';
import { useState } from 'react';
import Router, { useRouter } from 'next/router';

export default function Header() {

  const [hamburger, setBurgerClass] = useState('hamburger-nonactive');
  const [menu_class, setMenuClass] = useState('menu-hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass('hamburger-active')
      setMenuClass('menu-visible')
    } else {
      setBurgerClass('hamburger-nonactive')
      setMenuClass('menu-hidden')
    }
    setIsMenuClicked(!isMenuClicked);
  }

  const {asPath} = useRouter();

  return (
    <>
      <header className='flex bg-transparent navbar-fixed items-center z-10 mx-auto left-0 top-0 w-full '>
        <div className='container lg:px-12 px-2 mx-auto'>
          <div className='flex justify-between relative'>
            <div className='px-4'>
              <Link href='/' className='font-bold text-2xl block py-6'>Kyy <span className='text-primary'>Store•</span></Link>
            </div>
            <div className='my-auto'>
                <p className='font-semibold hidden md:block md:text-base'>KyyStore Website Top Up Game Termurah di Indonesia</p>
            </div>
            <div className='flex items-center px-4'>
              <button id={hamburger} name='hamburger' type='button' className='block absolute right-4' onClick={updateMenu}>
                <span className='hamburger-line transition duration-300 ease-in-out origin-top-left '></span>
                <span className='hamburger-line-2 transition duration-300 ease-in-out'></span>
                <span className='hamburger-line transition duration-300 ease-in-out origin-bottom-left'></span>
              </button>

              <nav id={menu_class} className='hidden absolute py-5 bg-slate-900 bg-opacity-80 font-semibold
               shadow-2xl rounded-lg max-w-[400px] w-full right-0 top-full text-white '>
                <ul className='block lg:flex justify-center'>
                  <li className='group'><Link href='/about' className={`${asPath === '/about' ? 'text-primary' : 'text-white'}  text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-primary group-hover:ease-in-out group-hover:duration-500 flex lg:text-lg lg:font-semibold`}>Tentang Kami</Link></li>
                  <li className='group'><Link href='/contact' className={`${asPath === '/contact' ? 'text-primary' : 'text-white'} text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-primary group-hover:ease-in-out group-hover:duration-500 flex lg:text-lg lg:font-semibold`}>Kontak</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
