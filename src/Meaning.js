import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong> {definition.definition}
              <br />
              <strong>Example:</strong>
              <em>{definition.example}</em>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
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
  );
}*/
