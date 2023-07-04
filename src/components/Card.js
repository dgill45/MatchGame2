import React, {useState} from 'react';


export default function Card(){

    const [isFlipped, setisFlipped] = useState(false);

    const toggleCardFlip = () => {
        setisFlipped(!isFlipped);
    }

    return (
        <div className = {`card ${isFlipped ? "flipped" : ""} `} onClick={toggleCardFlip}/>
    )
}
