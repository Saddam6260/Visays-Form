import React from 'react'
import "./Menuber.css"

const Menuber = (props) => {
    
  return (
    <div className='menu_wrap'>
        <div className='logo_wrap'>
            <h3>UpComming</h3>
        </div>
        <div>
            <ul>
                {props.item.map((value, index) => {
                    return <li key={index}>{value}</li>
                })}
            </ul>
        </div>
    </div>
  )
}

export default Menuber