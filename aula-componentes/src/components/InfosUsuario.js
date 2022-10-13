import React from 'react'
import '../App.css';
import './CardVideo'
function InfosUsuario (props) {
    return (
        <div>
            <img src="https://i.pinimg.com/originals/3f/e7/9c/3fe79cec95fd6ec7827755cc5e23b188.png"/>
            <p>username: {props.user}</p>
        </div>
    )
}

export default InfosUsuario;