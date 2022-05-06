import React, { useState } from "react";

import cardForm from "./CardForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { AiOutlineCheck } from "react-icons/ai";

export default function Card({ cards, deletecard }) {

  const [edit, setEdit] = useState({ id: null, keyword: "", description: "" });

  function confirmEdit(e, card) {
    e.preventDefault();
    card.description = edit.description;
    card.keyword = edit.keyword;
    setEdit({ id: null, keyword: "", description: "" });
  }

  return cards.map((card, index) => (
    <div className="card-row" key={index}>
      {console.log(`card:` + card.id)}
      <div key={card.id}>
        {edit.id === card.id ? (
          <form
            className="card-edit-form"
            onSubmit={(e) => confirmEdit(e, card)}
          >
            <input
              type="text"
              value={edit.keyword}
              name="text"
              onChange={(e) =>
                setEdit({
                  id: edit.id,
                  keyword: e.target.value,
                  description: edit.description,
                })
              }
              className="card-input"
            />
            <input
              type="text"
              value={edit.description}
              name="text"
              onChange={(e) => setEdit({ id: edit.id, keyword: edit.keyword, description: e.target.value})}
              className="card-input"
            />
            <button className="card-edit-confirm">
              <AiOutlineCheck />
            </button>
          </form>
        ) : (
          <div className="card-text">
            <div className="keyword">Keyword: {card.keyword}</div>
            <div className="description">Description: {card.description}</div>
          </div>
        )}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => deletecard(card.id)}
          className="delete-icon"
          size={25}
        />
        <TiEdit
          onClick={() => setEdit({ id: card.id, value: card.description })}
          className="edit-icon"
          size={30}
        />
      </div>
    </div>
  ));
}
