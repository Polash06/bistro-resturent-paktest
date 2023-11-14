/* eslint-disable react/prop-types */


const Menuitems = ({item}) => {
    console.log(item)
    const {image, name,recipe, price} = item || [];
    return (
        <div className="flex space-x-4">
          <img className=" w-[120px] rounded-full" src={image} alt="" />
          <div>
            <h2>{name}------</h2>
            <h3>{recipe}</h3>
            <h2 className="text-yellow-500">${price}</h2>
          </div>
        </div>
    );
};

export default Menuitems;