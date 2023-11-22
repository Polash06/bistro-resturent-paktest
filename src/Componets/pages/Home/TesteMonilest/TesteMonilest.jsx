import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
const TesteMonilest = () => {

  const [Reviwes , setreviwe] = useState([]);

  useEffect(() =>{
    fetch('Reviwes.json')
    .then(res => res.json())
    .then(data => setreviwe(data))
    
  },[])
  return (
    <section className="mx-auto md:w-4/12 my-8">
      <h3 className="text-yellow-500 text-center text-xl">
        ---What Our Clients Say---
      </h3>
      <hr></hr>
      <h3 className="text-center text-2xl">TESTIMONIALS</h3>
      <hr></hr>
      <div className="mx-36 mt-8">
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
         {
         Reviwes.map(reviwe =><SwiperSlide 
             key={reviwe._id}>
             <div className=''>
              <p>{reviwe.details}</p>
              <h3 className='text-orange-500'>{reviwe.name}</h3>
             </div>
             </SwiperSlide> )
         }
      </Swiper>
    </section>
  );
};

export default TesteMonilest;
