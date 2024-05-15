import React from "react";
const Card = ({data}) => {
    return(
        <section className="card">
            <div className="card--badge"> {data.openSpots === 0 ? "SOLD OUT" : "ONLINE"} </div>
            <div className="card--description">
                {data.description}
            </div>
            <img src = {`Assests/${data.coverImg}`} alt = {data.coverImg} className="card--photo"/>
            <div>
                <img src = "Assests/star.svg" className="card--star"/>
                <span className="card--rating"> {data.stats.rating} </span>
                <div className="card--stats">
                    <span> ({data.stats.reviewCount}) &#x2022; {data.location} </span>
                </div>
                <div className="card--desc">
                    <p> {data.title} </p> 
                    <p> <b>From ${data.price} </b> / person </p>
                </div>
            </div>
        </section>
    )
}

export default Card;