import { useEffect, useState } from "react";
import Menuitems from "../Menuitems/Menuitems";

const PopularMenu = () => {
  const [Menu , setmenu] =useState([]);
  useEffect(() =>{
    fetch('menu.json')
    .then(res => res.json())
    .then(data => {
const pupularItems = data.filter(item =>item.category === 'popular')
    setmenu(pupularItems)})
  },[])
  return (
    <section>
    
    <div className="mx-auto md:w-4/12 my-8">
     
            <h3 className="text-yellow-500 text-center text-xl">----From your Menu-----</h3>
            <hr></hr>
            <h3  className="text-center text-2xl">Popular items</h3>
            <hr className="font-bold text-2xl"></hr>
        </div>
      <div className="grid md:grid-cols-2 mb-16 gap-4">
        {
          Menu.map(item => <Menuitems
          key={item._id}
          item={item}
          ></Menuitems>)
        }
      </div>
      <div>
        <h4 className="btn mx-[550px]">View Full  Menu</h4>
      </div>
    </section>
  );
};

export default PopularMenu;
