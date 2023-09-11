import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3 className="hover-underline-animation">
          {props.meaning.partOfSpeech}
        </h3>
        <p>{props.meaning.definition}</p>
        <span className="example">
          <em>{props.meaning.example}</em>
        </span>
        <p>
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </div>
    );
  } else {
    return null;
  }
}
