import React from "react";
import data from "../helper/data";

const List = ({listValue}) => {
  const filteredData = data.slice(listValue - 5, listValue);
  return (
    <div>
      { 
      
        
        filteredData.map((item, i) => (
        <div key={i}>
          <article className="person">
            <img src={item.image} alt={"name"} />
            <div>
              <h4>{item.name}</h4>
              <p>{item.email}</p>
              <p>{item.age} years</p>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default List;
