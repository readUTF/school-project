import React from "react";

export default function SetButtons({sets, setCurrentSet}) {
  console.log(setCurrentSet);

  return sets.map((set) => (
    <div key={set.id} className="button" onClick={(e) => setCurrentSet(set)}>
      {set.id}. {set.name}
    </div>
  ));
}
