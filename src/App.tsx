import { useState } from "react"
import words from "./wordList.json"

const App = () => {
  const [wordToGuess, setWordToGuess] = useState<string>((): string => {
    return words[Math.floor(Math.random() * words.length)];
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return (
    <>
      <div className="container mx-auto flex justify-center" >
        <div className="text-2xl text-center">
          loos win
        </div>
      </div>
    </>
  )
}

export default App