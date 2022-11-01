import react from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App(){

    const cards = data.map(items =>{
        return(
            <Card 
                key={items.id}
                {...items}
            />
        )
    })



    return(
        <div className="app--container">
            <Navbar />
            <section>{cards}</section>
        </div>
    )
}