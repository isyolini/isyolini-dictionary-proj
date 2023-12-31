import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Result(props) {
  if (props.definition) {
    return (
      <div className="Results">
        <section>
          <h1>{props.definition.word}</h1>
          <Phonetic phonetic={props.definition.phonetic} />
        </section>
        <section>
          {props.definition.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
