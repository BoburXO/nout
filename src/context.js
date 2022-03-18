import React, { useState, createContext } from "react";
import lapTops from "./objects/Data";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [filter, setFilter] = useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };
  console.log(lapTops);
  const dataSearch = lapTops.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  return ( 
    <div>
      <Context.Provider value={{ filter, searchText, dataSearch }}>
        {children}
      </Context.Provider>
    </div>
  );
};

export { ContextProvider, Context };
