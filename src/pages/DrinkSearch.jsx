import { useState } from "react";
import { availableDrinks } from "../utils/data";
import { DrinkList } from "../components/DrinkList";
import { TextInput } from "../components/ui/TextInput";

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedDrinks = availableDrinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <label>Search for drinks:</label>
      <TextInput onChange={handleChange} w={200} mb={8} />
      <DrinkList clickFn={clickFn} drinks={matchedDrinks} />
    </>
  );
};
