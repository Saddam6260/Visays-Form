import React from 'react'
import "./TopTable.css"

const TopTable = () => {
  return (
    <div className='table_container'>
        <h2>UpComming</h2>
        <ul className='InputTable'>
            <li className='table_header'>
                <div className='col col-1'>VISYS_DC_ID</div>
                <div className='col col-2'>VISYS_DC_LOCATION</div>
                <div className='col col-3'>VISYS_DC_URL</div>
                <div className='col col-4'>VISYS_DC_PORT</div>
                <div className='col col-5'>VISYS_DC_STATUS</div>
                <div className='col col-6'>VISYS_DC_FLAG</div>
            </li>
            <li className='table-row'>
                <div className='col col-1' data-label="VISYS_DC_ID">1</div>
                <div className='col col-2' data-label="VISYS_DC_LOCATION">2</div>
                <div className='col col-3' data-label="VISYS_DC_URL">3</div>
                <div className='col col-4' data-label="VISYS_DC_PORT">4</div>
                <div className='col col-5' data-label="VISYS_DC_STATUS">5</div>
                <div className='col col-6' data-label="VISYS_DC_FLAG">6</div>
            </li>
            <li className='table-row'>
                <div className='col col-1' data-label="VISYS_DC_ID">1</div>
                <div className='col col-2' data-label="VISYS_DC_LOCATION">2</div>
                <div className='col col-3' data-label="VISYS_DC_URL">3</div>
                <div className='col col-4' data-label="VISYS_DC_PORT">4</div>
                <div className='col col-5' data-label="VISYS_DC_STATUS">5</div>
                <div className='col col-6' data-label="VISYS_DC_FLAG">6</div>
            </li>
            <li className='table-row'>
                <div className='col col-1' data-label="VISYS_DC_ID">1</div>
                <div className='col col-2' data-label="VISYS_DC_LOCATION">2</div>
                <div className='col col-3' data-label="VISYS_DC_URL">3</div>
                <div className='col col-4' data-label="VISYS_DC_PORT">4</div>
                <div className='col col-5' data-label="VISYS_DC_STATUS">5</div>
                <div className='col col-6' data-label="VISYS_DC_FLAG">6</div>
            </li>
            <li className='table-row'>
                <div className='col col-1' data-label="VISYS_DC_ID">1</div>
                <div className='col col-2' data-label="VISYS_DC_LOCATION">2</div>
                <div className='col col-3' data-label="VISYS_DC_URL">3</div>
                <div className='col col-4' data-label="VISYS_DC_PORT">4</div>
                <div className='col col-5' data-label="VISYS_DC_STATUS">5</div>
                <div className='col col-6' data-label="VISYS_DC_FLAG">6</div>
            </li>
            <li className='table-row'>
                <div className='col col-1' data-label="VISYS_DC_ID">1</div>
                <div className='col col-2' data-label="VISYS_DC_LOCATION">2</div>
                <div className='col col-3' data-label="VISYS_DC_URL">3</div>
                <div className='col col-4' data-label="VISYS_DC_PORT">4</div>
                <div className='col col-5' data-label="VISYS_DC_STATUS">5</div>
                <div className='col col-6' data-label="VISYS_DC_FLAG">6</div>
            </li>
        </ul>
    </div>
  )
}

export default TopTable