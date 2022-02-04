import React from "react";
import "./Captions.css"


const Captions = ({name, artist, album}) => {
  return (
    <div style={{'width': "100%", 'gridColumn': "span 2", "display": "grid", "justifyItems": "left"}}>
    <p style={{fontSize: "200%", margin: "0.5em"}}><strong>{"Song: " + name}</strong></p>
    <p><strong>{"Author: " + artist}</strong></p>
    <p><strong>{"Album: " + album}</strong></p>
    </div>
  );
};

export default Captions;
