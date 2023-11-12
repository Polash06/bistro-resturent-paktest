import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../../assets/home/slide1.jpg";
import slide2 from "../../../../assets/home/slide2.jpg";
import slide3 from "../../../../assets/home/slide3.jpg";
import slide4 from "../../../../assets/home/slide4.jpg";
import slide5 from "../../../../assets/home/slide5.jpg";
import SectionTitle from "../../../SectionTitel/SectionTitle";
const Catagore = () => {
  return (
    <section>
      <SectionTitle>
      subhading ={'From 11:00AM to 10:00PM'}
        hading={'Oder online'}
      </SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 mt-32"
      >
        <div className="gap-4">
          <h4 className="text-yellow-600">polash</h4>
          <SwiperSlide>
            <img className="w-[350px]" src={slide1} alt="" />
            <h2 className="text-4xl text-white text-center uppercase -mt-32">
              Salads
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[350px]" src={slide2} alt="" />
            <h2 className="text-4xl text-white text-center uppercase -mt-32">
              Pizza
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[350px]" src={slide3} alt="" />
            <h2 className="text-4xl text-white text-center uppercase -mt-32">
              Soups
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[350px]" src={slide4} alt="" />
            <h2 className="text-4xl text-white text-center uppercase -mt-32">
              Deserest
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[350px]" src={slide5} alt="" />
            <h2 className="text-4xl text-white text-center uppercase -mt-32">
              Salads
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[350px]" src={slide1} alt="" />
            <h2 className="text-4xl text-white text-center uppercase -mt-32">
              Pizza
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[350px]" src={slide2} alt="" />
            <h2 className="text-4xl text-white text-center uppercase -mt-32">
              Soups
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[350px]" src={slide3} alt="" />
            <h2 className="text-4xl text-white text-center uppercase -mt-32">
              Deserest
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[350px]" src={slide4} alt="" />
            <h2 className="text-4xl text-white text-center uppercase -mt-32">
              Soups
            </h2>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  );
};

export default Catagore;
