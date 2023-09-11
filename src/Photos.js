import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photos, index) {
            return (
              <div className="col-4" key={index}>
                <figure>
                  <img
                    src={photos.src.landscape}
                    alt={photos.alt}
                    className="img-fluid"
                  />
                </figure>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
