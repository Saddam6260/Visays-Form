import React, {useState} from 'react';

const BottomInputSet = () => {

    const [visysName, setVisysName] = useState('')
    const [visysUrl, setVisysUrl] = useState('')
    const [visysPort, setVisysPort] = useState('')
    const [visysUserName, setVisysUserName] = useState('')
    const [visysUsePassword, setVisysUserPassword] = useState('')
    const [visysFlag, setVisysFlag] = useState('')
    const [visysShellUrl, setVisysShellUrl] = useState('')

    const takeBottomvisysName = (event) => {
        setVisysName(event.target.value)
    }
    const takeBottomvisysUrl = (event) => {
        setVisysUrl(event.target.value)
    }
    const takeBottomvisysPort = (event) => {
        setVisysPort(event.target.value)
    }
    const takeBottomvisysUserName = (event) => {
        setVisysUserName(event.target.value)
    }
    const takeBottomvisysUsePassword = (event) => {
        setVisysUserPassword(event.target.value)
    }
    const takeBottomvisysFlag = (event) => {
        setVisysFlag(event.target.value)
    }
    const takeBottomvisysShellUrl = (event) => {
        setVisysShellUrl(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        const items = {
            name: visysName,
            url: visysUrl,
            userName:visysUserName,
            password:visysUsePassword,
            sheel_url:visysShellUrl,
            flag:visysFlag,
            port:visysPort
        }
        console.log(items)
    }
  return (
    <div className='form_wrap'>
        <form onSubmit={onSubmitHandler}>
        <div className="toptable_wrap">
          <div className="input_wrapper">
            <label htmlFor="">VISYS_DC_ID</label>
            <input type="text" value={visysName} onChange={takeBottomvisysName} />
          </div>
          <div className="input_wrapper">
            <label htmlFor="">VISYS_DC_LOCATION</label>
            <input type="text" value={visysUrl} onChange={takeBottomvisysUrl} />
          </div>
          <div className="input_wrapper">
            <label htmlFor="">VISYS_DC_URL</label>
            <input type="text" value={visysPort} onChange={takeBottomvisysPort} />
          </div>
          <div className="input_wrapper">
            <label htmlFor="">VISYS_DC_PORT</label>
            <input type="text" value={visysUserName} onChange={takeBottomvisysUserName} />
          </div>
          <div className="input_wrapper">
            <label htmlFor="">VISYS_DC_STATUS</label>
            <input type="text" value={visysUsePassword} onChange={takeBottomvisysUsePassword} />
          </div>
          <div className="input_wrapper">
            <label htmlFor="">VISYS_DC_FLAG</label>
            <input type="text" value={visysFlag} onChange={takeBottomvisysFlag} />
          </div>
          <div className="input_wrapper">
            <label htmlFor="">VISYS_DC_FLAG</label>
            <input type="text" value={visysShellUrl} onChange={takeBottomvisysShellUrl} />
          </div>
        </div>
        <div className="topinputsubmit_btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default BottomInputSet