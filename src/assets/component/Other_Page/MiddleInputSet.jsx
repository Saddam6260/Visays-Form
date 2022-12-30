import React, { useState } from 'react'
import "./MiddleInputSet.css"

const MiddleInputSet = () => {

  const [visysName, setVisysName] = useState("")
  const [visysUrl, setVisysUrl] = useState("")
  const [visysPort, setVisysPort] = useState("")
  const [visysUserName, setVisysUserName] = useState("")
  const [visysPassword, setVisysPassword] = useState("")
  const [visysFlag, setVisysFlag] = useState("")
  const [visysShellUrl, setVisysShellUrl] = useState("")
  const [visysAttribute1, setVisysAttribute1] = useState("")
  const [visysAttribute2, setVisysAttribute2] = useState("")
  const [visysAttribute3, setVisysAttribute3] = useState("")
  const [visysAttribute4, setVisysAttribute4] = useState("")
  const [visysAttribute5, setVisysAttribute5] = useState("")

  const takevisysName = ( (event) => {
    setVisysName(event.target.value)
  })
  const takevisysUrl = ( (event) => {
    setVisysUrl(event.target.value)
  })
  const takevisysPort = ( (event) => {
    setVisysPort(event.target.value)
  })
  const takevisysUserName = ( (event) => {
    setVisysUserName(event.target.value)
  })
  const takevisysPassword = ( (event) => {
    setVisysPassword(event.target.value)
  })
  const takevisysFlag = ( (event) => {
    setVisysFlag(event.target.value)
  })
  const takevisysShellUrl = ( (event) => {
    setVisysShellUrl(event.target.value)
  })
  const takevisysAttribute1 = ( (event) => {
    setVisysAttribute1(event.target.value)
  })
  const takevisysAttribute2 = ( (event) => {
    setVisysAttribute2(event.target.value)
  })
  const takevisysAttribute3 = ( (event) => {
    setVisysAttribute3(event.target.value)
  })
  const takevisysAttribute4 = ( (event) => {
    setVisysAttribute4(event.target.value)
  })
  const takevisysAttribute5 = ( (event) => {
    setVisysAttribute5(event.target.value)
  })

  const submitHandler = (event) => {
    event.preventDefault()

    const middleAllInputData = {
      nameData: visysName,
      urlData: visysUrl,
      portData: visysPort,
      userNameData: visysUserName,
      passwordData: visysPassword,
      flagData: visysFlag,
      shellUrl: visysShellUrl,
      attribute1: visysAttribute1,
      attribute2: visysAttribute2,
      attribute3: visysAttribute3,
      attribute4: visysAttribute4,
      attribute5: visysAttribute5,
    }

    console.log(middleAllInputData);
    setVisysName("")
    setVisysUrl('')
    setVisysPort('')
    setVisysUserName('')
    setVisysPassword('')
    setVisysFlag('')
    setVisysShellUrl('')
    setVisysAttribute1('')
    setVisysAttribute2('')
    setVisysAttribute3('')
    setVisysAttribute4('')
    setVisysAttribute5('')
  }


  return (
    <div className='form_wrap'>
      <form action="" onSubmit={submitHandler}>
        <div className='middle_table_wrap'>
          <div className='input_wrapper'>
            <label htmlFor="">VISYS_NAME</label>
            <input type="text" value={visysName} onChange={takevisysName}/>
          </div>
          <div className='input_wrapper'>
            <label htmlFor="">VISYS_URL</label>
            <input type="text" value={visysUrl} onChange={takevisysUrl}/>
          </div>
          <div className='input_wrapper'>
            <label htmlFor="">VISYS_PORT</label>
            <input type="text" value={visysPort} onChange={takevisysPort}/>
          </div>
          <div className='input_wrapper'>
            <label htmlFor="">VISYS_USER_NAME</label>
            <input type="text" value={visysUserName} onChange={takevisysUserName}/>
          </div>
          <div className='input_wrapper'>
            <label htmlFor="">VISYS_USER_PASSWORD</label>
            <input type="text" value={visysPassword} onChange={takevisysPassword}/>
          </div>
          <div className='input_wrapper'>
            <label htmlFor="">VISYS_FLAG</label>
            <input type="text" value={visysFlag} onChange={takevisysFlag}/>
          </div>
          <div className='input_wrapper'>
            <label htmlFor="">VISYS_SHELL_URL</label>
            <input type="text" value={visysShellUrl} onChange={takevisysShellUrl}/>
          </div>
          <div className='input_wrapper'>
            <label htmlFor="">VISYS_ATTRIBUTE01</label>
            <input type="text" value={visysAttribute1} onChange={takevisysAttribute1}/>
          </div>
          <div className='input_wrapper'>
            <label htmlFor="">VISYS_ATTRIBUTE02</label>
            <input type="text" value={visysAttribute2} onChange={takevisysAttribute2}/>
          </div>
          <div className='input_wrapper'>
            <label htmlFor="">VISYS_ATTRIBUTE03</label>
            <input type="text" value={visysAttribute3} onChange={takevisysAttribute3}/>
          </div>
          <div className='input_wrapper'>
            <label htmlFor="">VISYS_ATTRIBUTE04</label>
            <input type="text" value={visysAttribute4} onChange={takevisysAttribute4}/>
          </div>
          <div className='input_wrapper'>
            <label htmlFor="">VISYS_ATTRIBUTE05</label>
            <input type="text" value={visysAttribute5} onChange={takevisysAttribute5}/>
          </div>
        </div>
        <div className="topinputsubmit_btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default MiddleInputSet