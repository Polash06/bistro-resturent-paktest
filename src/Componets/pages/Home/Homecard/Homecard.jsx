/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const Homecard = () => {
  const [card, setmenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const carditems = data.find((item) => item.category === "popular");
        setmenu(carditems);
      });
  }, []);
  return (
    <section>
      <div className="mx-auto md:w-4/12 my-8">
        <h3 className="text-yellow-500 text-center text-xl">
          ----From your Menu-----
        </h3>
        <hr></hr>
        <h3 className="text-center text-2xl">Popular items</h3>
        <hr className="font-bold text-2xl"></hr>
      </div>
      <div className="grid md:grid-cols-2 mb-16 gap-4">
        {/* {
                Card.filter(item =><Card
                key={item._id}
                item={item}
                ></Card>)
            } */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/BsgRBJC/Screenshot-376.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homecard;
