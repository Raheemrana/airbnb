import React from "react";
import Card from "./Card";
import Persons from "../Persons.js"
const Carousel = () => {
    return(
        <div className="carousel">
            {Persons.map((x,i) => {
                return(
                    <Card data = {x} key={i}/>
                )
            })}
        </div>
    )
}

export default Carousel;