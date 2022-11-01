import React from "react"


export default function Card(props){
    return(
        <div>
        <div className="card">
            <img src={require(`../images/${props.coverImg}`)} className="card--img"></img>
            <div className="card--stats">
                <div id="card-top">
                <img src={require(`../images/map_Pointer.png`)} className="card--pointer"></img>
                <p className="card--location">{props.location}</p>
                <a href={props.mapLink} className="card--link"><u>View on Google Maps</u></a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <h4 className="card--date">{props.startDate} - {props.endDate}</h4>
                <p className="card--description">{props.description}</p>
            </div>
            
        </div>
        <hr className="card--break" />
        </div>
    )
}