import React, { useState, useEffect} from "react";
import Card from "./Card";

import CardForm from "./CardForm";

export default function CardList({ user, set, cards, setCards }) {
  function refreshCards() {
    const url = `http://localhost:8080/api/profile/set/cards?token=${user.token}&profileId=${user.profile_id}&setId=${set.id}`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setCards(json));
    return <div>Loading cards</div>;
  }


  if (cards === null) {
    refreshCards();
    return;
  }

  const addcard = (card) => {
    console.log(card);

    if (!card.desc || /^\s*%/.test(card.desc)) {
      return;
    }
    if (!card.keyWord || /^\s*%/.test(card.keyWord)) {
      return;
    }

    const url = `http://localhost:8080/api/profile/set/card/?token=${user.token}&profileId=${user.profile_id}&setId=${set.id}&keyWord=${card.keyWord}&description=${card.desc}`;
    fetch(url, {method: 'PUT'})
      .then((response) => response.json(url))
      .then((json) => {
        setCards([...cards, json])
        refreshCards();
      })
      .catch((e) => {});
  };

  const deletecard = (id) => {
    const url = `http://localhost:8080/api/profile/set/card/?token=${user.token}&profileId=${user.profile_id}&setId=${set.id}&cardId=${id}`;
    fetch(url, {method: 'DELETE'}).then(response => {refreshCards();}
    ).catch(e => {});

  };

  console.log(cards);

  return (
    <div className="card-list">
      <h2>{set.name}</h2>
      <CardForm onSubmit={addcard} />
      <Card cards={cards} deletecard={deletecard} />
    </div>
  );
}
