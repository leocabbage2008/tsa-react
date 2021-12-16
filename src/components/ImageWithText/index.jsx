import React from 'react';
export default function ImageWithText({img, text}) {
  return(
    <>
    <img src={img}/>
    <p>text</p>
    </>
  );
}