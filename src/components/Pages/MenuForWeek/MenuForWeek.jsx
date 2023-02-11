import { singleRandomMeal } from "../../APi/foodmenu";

const MenuForWeek = () => {
  console.log(singleRandomMeal);
  return (
    <>
      <h1>Lookup a single random meal</h1>
    </>
  );
};

export default MenuForWeek;
