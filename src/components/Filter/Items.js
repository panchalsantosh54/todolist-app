import DateFilter from "./DateFilter";
import { useState } from "react";

const Items = (props) => {
  let items = props.items;
  //console.log(items);
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredItems = props.items.filter((item) => {
    return item.purchaseDate.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="items">
      <DateFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></DateFilter>
      <Tasks items={filteredItems}></Tasks>

    </Card>
  );
};

export default Items;
