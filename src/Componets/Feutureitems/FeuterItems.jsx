import futuresImg from "../../assets/home/featured.jpg";
import "./Future.css";
const FeuterItems = () => {
  return (
    <section className="mb-60 bg-fixed">
      <div className="absolute">
        <img className="w-[1270px] " src={futuresImg} alt="" />
      </div>
      <div className="mb-32 relative pt-44">
        <div className="mx-auto md:w-4/12 my-8">
          <h3 className="text-yellow-500 text-center text-xl">
            ----Chit it out-----
          </h3>
          <hr></hr>
          <h3 className="text-center text-2xl">Future items</h3>
          <hr className="font-bold text-2xl"></hr>
        </div>
        <div>
          <div className="md:flex justify-center items-center py-8 px-16">
            <div>
              <img src={futuresImg} alt="" />
            </div>
            <div className="md:ml-10">
              <p className="uppercase text-xl text-white font-medium"> Aug 20, 2023</p>
              <p className="text-white font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores libero vitae quos quidem amet consequatur ea dicta,
                rerum consectetur incidunt. Quae animi dolorum minima quam
                commodi doloremque voluptate veniam eaque numquam porro! Ipsum
                debitis cupiditate dolor perspiciatis quos. Error eius atque
                esse recusandae ducimus odio eligendi non, eum vitae officia.
              </p>
              <button className="btn btn-outline btn-success">Oder Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeuterItems;
