import React from "react";

export default function Square({symbol, onCellClick}){
    return(
        <button className="grid--cells" onClick={onCellClick}>{symbol}</button>
    )
  }