import Weather from "./components/Weather"
import Navbar from "./components/NavBar"
import { useState } from "react"

export default function App() {

  const [country, setCountry] = useState<string>('London')

  return (
    <>
      <Navbar setCountry={setCountry}/>
      <Weather country={country}/>
    </>
  )
}
