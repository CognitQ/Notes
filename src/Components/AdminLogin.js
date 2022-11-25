import React from 'react'
import Button from './Button'
import "./AdminLogin.css"

const AdminLogin = () => {
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
                        <form>
                            <div className="form-group">
                                <label className="form-control-label">USERNAME</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">PASSWORD</label>
                                <input type="password" className="form-control" />
                            </div>

                            <div className="col-lg-12 loginbttm">
                                <div className="col-lg-6 login-btm login-text">
                                    {/* <!-- Error Message --> */}
                                </div>
                                <div className="col-lg-12 login-btm login-button">
                                    <Button type="submit" className="btn btn-outline-primary">LOGIN</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div classNameName="col-lg-3 col-md-2"></div>
            </div>
        </div>





    </div>   
    </div> 
  )
}

export default AdminLogin