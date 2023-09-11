import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos"
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [definition, setDefinition] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setDefinition(response.data);
  }

  function handleImageResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }
  function search() {
    //Reference: https://www.shecodes.io/learn/apis/dictionary
    const apiKey = "ate4fc772f93a185a4d70db0f2foe64c";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    //Reference: https://www.shecodes.io/learn/apis/images
    let imageKey = "ate4fc772f93a185a4d70db0f2foe64c";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
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
      <section>
        <form onSubmit={handleSubmit}>
          <label>What word means you like to learn?</label>

          <input
            type="search"
            placeholder="Search for a word"
            autoFocus={true}
            className="form-control search-input"
            onChange={handleKeywordChange}
          />
        </form>
      </section>

      <Result definition={definition} />
      <Photos photos={photos} />
    </div>
  );
}
