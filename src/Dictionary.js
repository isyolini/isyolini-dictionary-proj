import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    setDefinition(response.data);
  }

  function search() {
    //Reference: https://www.shecodes.io/learn/apis/dictionary
    const apiKey = "ate4fc772f93a185a4d70db0f2foe64c";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <label>What word do you want to look up?</label>
        <input
          type="search"
          placeholder="Search for a word"
          autoFocus={true}
          className="form-control search-input"
          onChange={handleKeywordChange}
        />
      </form>
      <Result definition={definition} />
    </div>
  );
}
