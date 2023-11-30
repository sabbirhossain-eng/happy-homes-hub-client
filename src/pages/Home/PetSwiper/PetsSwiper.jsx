import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const PetsSwiper = () => {
  const imgStyle = {
    width: "30%",
    height: "30%",
    objectFit: "cover",
  };

  return (
    <div className="mt-14 ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/QQp1c5g/image.png"
            alt="Pet 1"
            style={imgStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/gVKSDNx/image.png"
            alt="Pet 2"
            style={imgStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/JtcvnyY/image.png"
            alt="Pet 3"
            style={imgStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/nzWSyYJ/image.png"
            alt="Pet 4"
            style={imgStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/H4dgPxC/image.png"
            alt="Pet 5"
            style={imgStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/8YYqrqP/image.png"
            alt="Pet 6"
            style={imgStyle}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PetsSwiper;
