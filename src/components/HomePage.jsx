import React, { useState, useEffect } from "react";
import SetButtons from "./SetButtons";
import CardList from "./todo/CardList";

export default function Home({ user, setsResponse }) {
  const [sets, setSets] = useState(null);
  const [currentSet, setCurrentSet] = useState(null);
  const [input, setInput] = useState("");
  const [cards, setCards] = useState(null);

  function changeSet(e) {
    setCurrentSet(e);
    setCards(null);
  }

  if (sets === null) {
    setsResponse.then((sets) => setSets(sets));
  }

  const createSet = (e) => {
    e.preventDefault();
    const url = `http://localhost:8080/api/profile/set?token=${user.token}&profileId=${user.profile_id}&name=${input}`;
    fetch(url, { method: "PUT" })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setSets([...sets, json]);
      })
      .catch((e) => {});
  };

  if (sets == null) {
    return <div>Page loading</div>;
  }

  return (
    <div>


      <div className="sidebar">
        <h1>Choose a set</h1>
        <SetButtons sets={sets} setCurrentSet={(e) => changeSet(e)} />
        <form className="home-page-form" onSubmit={createSet}>
          <input
            type="text"
            placeholder="Revision Set Name"
            value={input}
            name="text"
            onChange={(e) => setInput(e.target.value)}
            className="card-name-input"
          />
          <button className="create-button">Create set</button>
        </form>
      </div>


      <div className="todolist">
        {currentSet === null ? (
          <div className="no-set">Select a set from the left</div>
        ) : (
          <div className="set-editor">
            <CardList
            user={user}
            set={currentSet}
            cards={cards}
            setCards={setCards}
          />
          </div>
        )}
      </div>
    </div>
  );
}
