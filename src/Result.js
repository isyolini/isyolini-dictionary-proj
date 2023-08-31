import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.definition) {
    return (
      <div className="Results">
        <h1>{props.definition.word}</h1>
        <Phonetic phonetic={props.definition.phonetic} />

        {props.definition.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
