import React from "react";

export default function Meanings(props) {
  console.log(props.meanings);
  
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <br />
      <p className="definition">{props.meaning.definition}</p>
      <em className="example">{props.meaning.example}</em>
    </div>
  );
}
