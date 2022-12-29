import React from 'react'
import "./Table.css"

const Table = (props) => {
  return (
    <div className='table_wrap'>
        {props.labelItem.map((item, index) => (
            <div key={index} className='input_wrapper'>
                <label htmlFor="">{item}</label>
                <input type="text" />
            </div>   
        ))}
    </div>
  )
}

export default Table