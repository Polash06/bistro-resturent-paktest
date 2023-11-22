import { Helmet } from "react-helmet-async";
import FeuterItems from "../../../Feutureitems/FeuterItems";
import Banner from "../Banner/Banner";
import Catagore from "../Catagore/Catagore";
import Dasuui from "../Daisuui/Dasuui";
import Homecard from "../Homecard/Homecard";
import PopularMenu from "../PopularMenu/PopularMenu";
import TesteMonilest from "../TesteMonilest/TesteMonilest";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Catagore></Catagore>
      <Dasuui></Dasuui>
      <PopularMenu></PopularMenu>
      <Homecard></Homecard>
      <FeuterItems></FeuterItems>
      <TesteMonilest></TesteMonilest>
    </div>
  );
};

export default HomePage;
