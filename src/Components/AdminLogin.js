import React, { useState } from 'react'
import Button from './Button'
import "./AdminLogin.css"

const AdminLogin = () => {
  const username="admin"
  const password= "123"

  const [userValue, setUserValue] = useState("")
  const [passValue, setPassValue] = useState("")
  const [error, setError] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault()
    if(userValue === username && passValue===password) {
        setError(false)
        alert("Login successful")
    }
    else{
        setError(true)
    }
}

    return (
    <div>
    
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-2"></div>
            <div className="col-lg-6 col-md-8 login-box">
                <div className="col-lg-12 login-title">
                    ADMIN PANEL
                </div>

                <div className="col-lg-10 login-form offset-1">
                    <div className="col-lg-12 login-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-control-label">USERNAME</label>
                                <input type="text" className="form-control" onChange={(e)=>setUserValue(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">PASSWORD</label>
                                <input type="password" className="form-control"onChange={(e)=>setPassValue(e.target.value)} />
                            </div>

                            <div className="col-lg-12 loginbttm">
                                {error? <div className="col-lg-6 login-btm login-text">
                                    <h3 className='text-danger'>wrong password or Username</h3>
                                </div>: null}
                                <div className="col-lg-12 login-btm login-button">
                                    <Button type="submit" className="btn btn-outline-primary">LOGIN</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3 col-md-2"></div>
            </div>
        </div>





    </div>   
    </div> 
  )
}

export default AdminLogin