import React from "react";
import "./DiscAnimation.css"


const DiscAnimation = ({ animationDuration, discCover, animationPaused}) => {
  return (
    <div style={{'width': "100%", 'gridColumn': "span 2", overflow: 'hidden', paddingTop: "5vh"}}>
    <svg width="calc(min(60vh,80vw)" height="calc(min(60vh,80vw)" className="rotate" viewBox="0 0 200 200" style={{"animationDuration": animationDuration, animationPlayState: animationPaused}}>
        <image id="vinyl" x="calc(100 - 90)" y="calc(100 - 90)" width="180" height="180"
            href="https://upload.wikimedia.org/wikipedia/commons/3/37/Vinyl_disc_icon.svg" />
        <defs>
            <clipPath id="myCircle">
                <circle id="vinylCoverPath" cx="100" cy="100" r="50" fill="#FFFFFF" />
            </clipPath>
        </defs>
        <image id="vinylCover" x="50" y="50" width="100" height="100" href={discCover}
            clipPath="url(#myCircle)" />
    </svg>
    </div>
  );
};

export default DiscAnimation;
