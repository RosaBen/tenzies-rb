import { useState } from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti-boom';
import Footer from "./components/Footer";

function App() {
const [dice, setDice]=useState(() => generateAllNewDice())


const gameWon = dice.every(die=> die.isHeld) && dice.every(die=>die.value === dice[0].value)


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

  

  const diceElements = dice.map((num)=> <Die 
  key={num.id} 
  value={num.value} 
  isHeld={num.isHeld}
  hold={hold}
  id={num.id}
  />)

  // function resetGame(){
  //   if(gameWon){
  //     setDice(prevDice => prevDice.map(die => ({...die, isHeld: false})))
  //     setDice(generateAllNewDice())
  //   }
  // }

  function rollDice(){
    if(!gameWon){
      setDice(prevDice => prevDice.map(die=> die.isHeld? die: {...die, value: Math.ceil(Math.random()*6)}))
    }else{
      setDice(generateAllNewDice())
    }
  }

  function hold(id){
    setDice(prevDice => prevDice.map(die =>
      die.id === id? {...die, isHeld: !die.isHeld}: die
    ))
  }

  return (
    <>
        <main>
      {gameWon? <Confetti mode="boom" particleCount={50} colors={['#ff577f', '#ff884b', "purple","#bd48bd", "#3737bd", "yellow", "green" ]} /> : null}
                  <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <section className="dice">
      {diceElements}
      </section>
      <button className="roll-btn" onClick={rollDice}>{gameWon? "New Game" : "Roll" }</button>
    </main>
    <Footer />
    </>
  )
}

export default App


