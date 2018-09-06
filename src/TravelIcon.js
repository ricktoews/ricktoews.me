import React from 'react';


export const thumbs = {
  copenhagen: [
    'aquarium-shark.jpg',
    'kronborg-moat-2.jpg',
    'rosenborg-castle.jpg',
    'rosenborg.jpg',
    'st-albans-2.jpg',
    'canal.jpg',
    'kronborg-moat.jpg',
    'rosenborg-crown.jpg',
    'roskilde-town.jpg',
    'st-albans.jpg',
    'christiansborg-interior.jpg',
    'kronborg-passage.jpg',
    'rosenborg-grounds-pool.jpg',
    'roskilde.jpg',
    'tivoli-at-night.jpg',
    'christiansborg.jpg',
    'kronborg-selfie.jpg',
    'rosenborg-grounds.jpg',
    'round-tower-interior.jpg',
    'tivoli-roller-coaster.jpg',
    'kronborg-dark-selfie.jpg',
    'mermaid.jpg',
    'rosenborg-park.jpg',
    'round-tower-outside.jpg',
    'kronborg-lantern-selfie.jpg',
    'nyhavn.jpg',
    'rosenborg-silver-lions.jpg',
    'round-tower-view.jpg',
  ],
  paris: [
    'paris1.jpg',
    'paris2.jpg',
    'paris3.jpg',
    'paris4.jpg',
    'paris5.jpg',
    'paris6.jpg',
    'paris7.jpg',
    'paris8.jpg',
    'paris9.jpg',
    'paris10.jpg',
    'paris11.jpg',
    'paris12.jpg',
    'paris13.jpg',
    'paris14.jpg',
    'paris15.jpg',
    'paris16.jpg',
    'paris17.jpg',
    'paris18.jpg',
    'paris19.jpg',
    'paris20.jpg',
    'paris21.jpg',
    'paris22.jpg',
  ],
  iceland: [
    'iceland1.jpg',
    'iceland2.jpg',
    'iceland3.jpg',
    'iceland4.jpg',
    'iceland5.jpg',
    'iceland6.jpg',
    'iceland7.jpg',
    'iceland8.jpg',
    'iceland9.jpg',
    'iceland10.jpg',
    'iceland11.jpg',
    'iceland12.jpg',
    'iceland13.jpg',
    'iceland14.jpg',
    'iceland15.jpg',
    'iceland16.jpg',
    'iceland17.jpg',
    'iceland18.jpg',
    'iceland19.jpg',
  ],
};

const TravelIcon = (props) => {
  const { place } = props;

  const placePath = '/media/images/' + place + '/';
  const image = {
    copenhagen: 'mermaid.jpg',
    paris: 'paris18.jpg',
    iceland: 'iceland1.jpg',
  };

  return (
    <img src={ placePath + image[place] } style={{ marginRight: "10px", float: "left", width: "50px", height: "50px" }} alt="Travel Icon" />
  );
}

export default TravelIcon;
