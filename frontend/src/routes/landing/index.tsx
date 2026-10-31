import { Button } from "@heroui/react"
import { Link } from "@tanstack/react-router"

export default function LandingPage(){
    return (
        <>
            <div className="min-h-screen flex items-center justify-center ">
                <div className="grid justify-items-center space-y-2">
                    <h1>Under Development</h1>
                    <span>Please Go to the next route</span>
                    <Link to="/home">
                        <Button>Home</Button>
                    </Link>
                </div>
            </div> 
        </>
    )
}