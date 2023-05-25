import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient  from '../axios-clinet.js';

function Signup()
{
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const {setUser,setToken} = useStateContext();

    const onSubmit = ev => {
        ev.preventDefault()

        const payload =
        {
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          password_confirmation: passwordConfirmationRef.current.value,
        }
        console.log(payload)

        // when ever the token infomation is availabe user will be rerender and redirected to auth page
        axiosClient.post('/signup', payload)
        .then(({data}) =>
        {
          setUser(data.user)
          setToken(data.token);
        })
        .catch(err =>
        {
            const response = err.response;
            if (response && response.status === 422) {
              setErrors(response.data.errors)
            }
          })

        }
    return (
        <div className="login-signup-form animated fadeInDown">
          <div className="form">
            <form onSubmit={onSubmit}>
              <h1 className="title">Signup for Free</h1>

              <input  ref={nameRef} type="text" placeholder="Full Name"/>
              <input  ref={emailRef} type="email" placeholder="Email Address"/>
              <input  ref={passwordRef} type="password" placeholder="Password"/>
              <input ref={passwordConfirmationRef}  type="password" placeholder="Repeat Password"/>
              <button className="btn btn-block">Signup</button>
              <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
            </form>
          </div>
        </div>
      )
};

export default Signup;
