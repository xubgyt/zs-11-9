import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { getSliders } from '../service';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Swipper () {
  
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    getSliders().then((newSliders) => {
      setSliders(newSliders);
    });
  }, []);


  return (
    <div className='justify-center  px-4 md:px-12'>
      <Swiper className='rounded-md lg:w-1/2'
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {sliders.map((slider, index) => (
          <div key={index}>
            {slider.image.map((img, index) => (
              <SwiperSlide key={index}>
                <Link href=''>
                  <Image unoptimized src={img.url} width={700} height={700} alt="Slider" />
                </Link>
              </SwiperSlide>
            ))}
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export async function getStaticProps() {
  const sliders = await getSliders();

  return {
    props: {sliders}
  }
}