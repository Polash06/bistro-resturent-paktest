import Banner from "../Banner/Banner";
import Catagore from "../Catagore/Catagore";
import Dasuui from "../Daisuui/Dasuui";
import PopularMenu from "../PopularMenu/PopularMenu";


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagore></Catagore>
            <Dasuui></Dasuui>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default HomePage;