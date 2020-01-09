import React from 'react'
import '../App.css'

function Header(props){
    console.log(props)
    return(
        <div className='header-container'>
            <p>Logo</p>
            <p>Welcome {props.name} - Age: {props.age}</p>
        </div>
    )
}

export default Header