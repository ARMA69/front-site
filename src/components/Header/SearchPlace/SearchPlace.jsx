import React, { useState, useCallback, useContext } from "react";
import { myContext } from "../../context/context";
import styles from "./SearchPlace.module.sass";
import { SiRoamresearch } from "react-icons/si";
import { Link } from "react-router-dom";

const SearchPlace = () => {
  const [search, setSearch] = useState("");

  const handleSetSearch = (event) => {
    setSearch(event.target.value);
  };
  const { fetchHomePageMeals } = useContext(myContext);

  const fetchMealsHandler = useCallback(() => {
    fetchHomePageMeals(search);
    setSearch("");
  }, [search, fetchHomePageMeals]);
  return (
    <>
      <div className={styles.searchBox}>
        <input
          className={styles.searchHeader}
          type="search"
          placeholder="Find Meals For Your Ingredients"
          value={search}
          onChange={handleSetSearch}
        />

        <Link
          to="front-website/meals"
          onClick={fetchMealsHandler}
          type="submit"
        >
          <SiRoamresearch title="Search" className={styles.searchimg} />
        </Link>
      </div>
    </>
  );
};

export default SearchPlace;
