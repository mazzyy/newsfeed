import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Login() {




    return (
        <div className="login-signup-form animated fadeInDown">
          <div className="form">
            <form >
              <h1 className="title">Login into your account</h1>

              {/* {message &&
                <div className="alert">
                  <p>{message}</p>
                </div>
              } */}

              <input type="email" placeholder="Email"/>
              <input type="password" placeholder="Password"/>
              <button className="btn btn-block">Login</button>
              <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
            </form>
          </div>
        </div>
      )

}

export default Login
