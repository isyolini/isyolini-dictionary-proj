import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  console.log(props.meanings);

  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>{props.meaning.definition}</p>
        <em>{props.meaning.example}</em>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  } else {
    return null;
  }

/*  return (
    <div className="between-results">
      <h3 className="result-type">{props.meaning.partOfSpeech}</h3>

      <p>
        <span className="definition">Definition:</span>
        {props.meaning.definition}
      </p>

      <em>
        {props.meaning.example !== null ? "Example: " : ""}
        {props.meaning.example !== null ? `"${props.meaning.example}"` : null}
      </em>

      <p>
        {props.meaning.synonyms !== null ? "Synonyms: " : ""}
        {props.meaning.synonyms !== null
          ? props.meaning.synonyms.map(function (synonyms, index) {
              return (
                <span className="synonyms" key={index}>
                  <span>
                    {index === 0 ? "" : ","}
                    {synonyms}
                  </span>
                </span>
              );
            })
          : null}
      </p>
    </div>
  );*/
}
