import React from "react";
import AddItem from "./AddItem";

const CrucialTaskCard = () => {
  return (
    <div>
      <h2 className="font-bold">2 mission-crucial task</h2>
      <div className="form-control flex flex-row">
        <label className="cursor-pointer label basis-1/4">
          <input
            type="checkbox"
            className="mr-5 checkbox checkbox-success checkbox-lg"
          />
        </label>
        <label className="label basis-3/4">
          <input
            type="text"
            className="input w-full max-w-md input-sm"
            
          />
        </label>
        <AddItem />
      </div>
    </div>
  );
};

export default CrucialTaskCard;
