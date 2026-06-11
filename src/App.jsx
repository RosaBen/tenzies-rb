import { useState } from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"
function App() {
const [dice, setDice]=useState(generateAllNewDice())
  function generateAllNewDice(){

    // return new Array(10)
    //         .fill(0)
    //         .map(() => ({value:Math.ceil(Math.random() * 6)), isHeld:false, id: nanoid()})
    const newDice = []

    for (let i=0 ; i<10; i++){
      const rand = {value: Math.ceil(Math.random()*6), isHeld:false, id: nanoid()}
      newDice.push(rand)
    }

    return newDice
  }

  

  const diceElements = dice.map((num)=> <Die key={num.id} value={num.value} isHeld={num.isHeld}/>)

  function rollDice(){
    setDice(generateAllNewDice())
  }

  return (
    <main>
      <section className="dice">
      {diceElements}
      </section>
      <button className="roll-btn" onClick={rollDice}>Roll Dice</button>
    </main>
  )
}

export default App


