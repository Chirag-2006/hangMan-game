import { useState } from "react"
import words from "./wordList.json"
import HangManDrowing from "./components/HangManDrowing";
import HangManWord from "./components/HangManWord";
import { Keyboard } from "./components/Keyboard";

const App = () => {
  const [wordToGuess, setWordToGuess] = useState<string>((): string => {
    return words[Math.floor(Math.random() * words.length)];
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return (
    <>
      <div className="container mx-auto flex justify-center items-center flex-col" >
        <div className="text-2xl text-center">
          loos win
        </div>
        <HangManDrowing />
        <HangManWord />
        <Keyboard />

      </div>
    </>
  )
}

export default App