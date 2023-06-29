import React from "react";
import Square from "./components/square"
import './App.css';
export default function App(){    
    const[nextTurn, setNextTurn]=React.useState(true)
    const[cells, setCells] = React.useState(Array(9).fill(null))
   
   function handleClick(i){
    if(winningCombo(cells)||cells[i]){
      return
    }
    const gridCells =cells.slice()
    if(nextTurn){
      gridCells[i]="X"
    }
    else{
      gridCells[i] ="O"
    }
  
    setCells(gridCells)
    setNextTurn(!nextTurn)
  
   }
   const winning =winningCombo(cells)
    let status
    if(winning){
      status ="WINNER:" +"   "+"PLAYER"+"   " + winning
    }
    else{
      status="IT'S PLAYER:" +"   "+(nextTurn? "X": "O")+ "  "+"'S"+"    "+"TURN"
    }
    return (
        <main className="grid">  
          <div className="statusBar">
              <>{status}</>
          </div>
        
          <div className="grid--row">
            <Square symbol={cells[0]} 
            onCellClick={()=>handleClick(0)} />
            <Square symbol={cells[1]} 
            onCellClick={()=>handleClick(1)} />
            <Square symbol={cells[2]} 
            onCellClick={()=>handleClick(2)} />
          </div>

          <div className="grid--row">
            <Square symbol={cells[3]} 
            onCellClick={()=>handleClick(3)} />
            <Square symbol={cells[4]} 
            onCellClick={()=>handleClick(4)} />
            <Square symbol={cells[5]} 
            onCellClick={()=>handleClick(5)} />
          </div>

          <div className="grid--row">
            <Square symbol={cells[6]} 
            onCellClick={()=>handleClick(6)} />
            <Square symbol={cells[7]} 
            onCellClick={()=>handleClick(7)} />
            <Square symbol={cells[8]} 
            onCellClick={()=>handleClick(8)} />
          </div>
        </main> 
    )
  
  function winningCombo(cells){
    const pattern=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i =0;i< pattern.length;i++){
      const [a,b,c]=pattern[i]
      if(cells[a] && cells[a]===cells[b] && cells[a]===cells[c]){
        return cells[a]
      }
    }
    return null
   }
  
  
  
  
}





