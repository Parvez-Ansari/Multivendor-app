import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import axios from 'axios';

const LoginPage = () =>
{
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let [invalidUser, setInvalidUser] = useState('')

    const login = (e) =>
    {
        e.preventDefault()

        axios.post('http://localhost:8080/login', { email, password })
            .then((res) =>
            {
                console.log(res.data)
                if (res.data.token)
                {
                    window.localStorage.setItem('token', res.data.token)
                    setInvalidUser("")
                } else
                {
                    setInvalidUser("Invalid Email address or password")
                }
            }).catch(err =>
            {
                console.log(err)
            });
    }

    useEffect(() =>
    {

    }, [])

    return (
        <section className="vh-100 d-flex">
            <div className="container-fluid h-custom d-flex flex-column ">
                <div className="row d-flex justify-content-center align-items-center h-100 card rounded">
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">Login</p>
                        <form className='mb-5'>

                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                                <input type="email"
                                    id="form3Example3"
                                    className="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                    value={email}
                                    onChange={(e) =>
                                    {
                                        setEmail(e.target.value)
                                    }}
                                />

                            </div>

                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                <input type="password"
                                    id="form3Example4"
                                    className="form-control form-control-lg"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) =>
                                    {
                                        setPassword(e.target.value)
                                    }}
                                />

                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/* <!-- Checkbox --> */}
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>
                            <p className='small fw-bold'>{invalidUser}</p>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button onClick={login} type="button" className="btn btn-primary btn-lg btn-style"
                                >Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/signup"
                                    className="link-danger">Register</Link></p>
                            </div>

                        </form>
                    </div>

                    <div className="col-md-9 col-lg-6 col-xl-5 mb-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
                            alt="Sample image" />
                    </div>

                </div>
            </div>

        </section>
    );
}

export default LoginPage
