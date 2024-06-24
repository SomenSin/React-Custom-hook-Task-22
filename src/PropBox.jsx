import React from "react";

export default function PropBox({ cardInfo }) {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Photos</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "space-evenly",
          gap: "10px",
        }}
      >
        {cardInfo.map((card, index) => (
          <div
            key={index}
            style={{
              width: "350px",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              border: "5px solid black",
            }}
          >
            <img
              style={{ height: "150px", width: "150px" }}
              src="https://via.assets.so/img.jpg?w=600&h=600&tc=blue&bg=#cecece"
              alt={card.title}
            />
            <p>{card.title} description</p>
          </div>
        ))}
      </div>
    </>
  );
}
