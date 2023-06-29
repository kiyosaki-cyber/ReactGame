import React from "react"
export default function game(){
    function newgame(){
    window.location.reload()
    }
    return(
        <div className="newgame">
              <button className="newgame--button" onClick={newgame}>NEW GAME</button>
        </div>
     
    )
}