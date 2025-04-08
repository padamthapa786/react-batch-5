import React from "react";

const Card = ({ className, titleClass, cardtitle, cardDesc,image }) => {
  return (
    <div className={`w-64 h-48 py-3 px-4 rounded-2xl shadow-xl ${className}`}>
      <img src={image} alt={cardtitle}/>
      <h1 className={titleClass}> Title:{cardtitle}</h1>
      <h1> Desc: {cardDesc ? cardDesc : "no desc available"}</h1>
    </div>
  );
};

export default Card;
