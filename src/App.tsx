import { useState } from "react"
import words from "./wordList.json"

const App = () => {
  const [wordToGuess, setWordToGuess] = useState<string>((): string => {
    return words[Math.floor(Math.random() * words.length)];
  })

  return (
    <>
      <div className="container mx-auto flex justify-center" >
        {wordToGuess}
      </div>
    </>
  )
}

export default App