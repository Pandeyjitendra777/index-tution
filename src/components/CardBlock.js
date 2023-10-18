import React, { useState } from "react";
import CardBlockDetails from "./CardBlockDetails";
function CardBlock() {
  const [cardDetails, setCardDetails] = useState(false);
  const cardOpen = () => {
    setCardDetails(true);
  };

  const cardClose = () => {
    setCardDetails(false);
  };
  return (
    <>
      <div className="card-block" onClick={cardOpen}>
        <p>
          Name: Person <span>Posts: 12</span>
        </p>
      </div>
      {cardDetails && <CardBlockDetails cardClose={cardClose} />}
    </>
  );
}
export default CardBlock;
