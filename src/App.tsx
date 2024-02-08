import Weather from "./components/Weather"
import Navbar from "./components/NavBar"
import { useState } from "react"

export default function App() {

  const [country, setCountry] = useState<string>('London')

  return (
    <>
      <Navbar setCountry={setCountry}/>
      <Weather country={country}/>
      <footer className="h-9 flex items-center justify-center">
        <p className="text-gray-400">Benjamin Meyer - 2024</p>
      </footer>
    </>
  )
}
