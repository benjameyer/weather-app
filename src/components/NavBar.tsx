import { useRef } from "react"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function Navbar({ setCountry }: NavbarProps) {
    const input = useRef<HTMLInputElement>(null);
    function handleSearch() {
        const inputValue = input.current?.value;
        if (inputValue !== undefined && inputValue.length > 2) {
            setCountry(inputValue);
        }
    }
    // Simulate Form Enter Event 
    function onFocus() {
        input.current?.addEventListener('keydown', (e) => {
            const inputValue = input.current?.value;
            if (e.key === 'Enter' && inputValue !== undefined && inputValue.length > 2) {
                setCountry(inputValue);
            }
        })
    }

    function useMyLocation() {
        let lat;
        let lon;
        navigator.geolocation.getCurrentPosition((position) => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            setCountry(lat+' '+lon);
        })
    }

    return (
        <div className="z-50 fixed w-full bg-white h-32 sm:h-24 shadow-md flex flex-col justify-center sm:flex-row sm:justify-between items-center px-16">
            <a href="" className="mb-2 sm:mb-0">
                <img src="/sun-icon.png" className="w-8" alt="sun-icon" />
                <h2 className="font-bold">WEATHER APP</h2>
            </a>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <i className="text-xl pr-2 fa-solid fa-location-crosshairs hover:text-gray-600" style={{ cursor: "pointer" }} onClick={useMyLocation}></i>
                <Input onFocus={onFocus} ref={input} type="search" placeholder="Search" />
                <Button onClick={handleSearch}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
            </div>
        </div>
    )
}

interface NavbarProps {
    setCountry: React.Dispatch<React.SetStateAction<string>>
}