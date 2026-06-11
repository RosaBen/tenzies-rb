import { useState } from "react"
import Die from "./components/Die"
function App() {
const [dice, setDice]=useState(generateAllNewDice())
  function generateAllNewDice(){

    // return new Array(10)
    //         .fill(0)
    //         .map(() => Math.ceil(Math.random() * 6))
    const newDice = []

    for (let i=0 ; i<10; i++){
      const rand = Math.ceil(Math.random()*6)
      newDice.push(rand)
    }
    return newDice
  }

  const diceElements = dice.map(num=> <Die value={num}/>)

  return (
    <main>
      <section className="dice">
      {diceElements}
      </section>
    </main>
  )
}

export default App


