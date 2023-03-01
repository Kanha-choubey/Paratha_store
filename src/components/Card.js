import * as React from "react";
import records from "../records.json";
import CardItem from "./CardItem";

export default function Card() {
  return (
    <>
      <h1 className="heading-001">Paratha-Section</h1>
      <div className=" Card-container">
        {records.map((record) => (
          <CardItem key={record.id} record={record} />
        ))}
      </div>
    </>
  );
}
