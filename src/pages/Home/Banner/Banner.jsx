import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';

import cat from '../../../assets/Banner/cat.jpg'
import birds from '../../../assets/Banner/Bird.jpg'
import rabbit from '../../../assets/Banner/Rabbit.jpg'
import dog from '../../../assets/Banner/dog.jpg'

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
    return (
        <div className=''>
           <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={cat} alt="" className='w-full h-screen relative' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={birds} alt="" className='w-full h-screen relative'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={rabbit} alt="" className='w-full h-screen relative' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dog} alt="" className='w-full h-screen relative'/>
        </SwiperSlide>
        
        <div className="autoplay-progress w-10 absolute bottom-0 right-0 text-primary-light" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle} >
            <circle  cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
        </div>
    );
};

export default Banner;