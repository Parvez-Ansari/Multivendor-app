import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const SignUpPage = () =>
{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const signup = (e) =>
    {
        e.preventDefault()
        axios.post('http://localhost:8080/signup', { name, email, password, uniqueID: uuidv4() })
            .then((res) =>
            {
                console.log(res.data)
            }).catch(err =>
            {
                console.log(err)
            });
    }
    return (
        <section className="vh-100">
            <div div className="container h-100" >
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black rounded box-shadow" >
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                    <input type="text"
                                                        id="form3Example1c"
                                                        className="form-control"
                                                        value={name}
                                                        onChange={(e) =>
                                                        {
                                                            setName(e.target.value)

                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    <input type="email"
                                                        id="form3Example3c"
                                                        className="form-control"
                                                        value={email}
                                                        onChange={(e) =>
                                                        {
                                                            setEmail(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    <input type="password"
                                                        id="form3Example4c"
                                                        className="form-control"
                                                        value={password}
                                                        onChange={(e) =>
                                                        {
                                                            setPassword(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                                    <input type="password"
                                                        id="form3Example4cd"
                                                        className="form-control"
                                                        value={repeatPassword}
                                                        onChange={(e) =>
                                                        {
                                                            setRepeatPassword(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="form2Example3c"
                                                />
                                                <label className="form-check-label" htmlFor="form2Example3">
                                                    I agree all statements in <a href="#!">Terms of service</a>
                                                </label>
                                            </div>

                                            <div className='d-flex justify-content-center mb-3'>
                                                <p className="small fw-bold mt-2 pt-1 mb-0 text -center"> <Link to="/login"
                                                    className="link-danger">Already have an account </Link></p>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="button"
                                                    className="btn btn-primary btn-lg"
                                                    onClick={signup}
                                                >
                                                    <Link to='/login' className='text-decoration-none text-white'>Register</Link>
                                                </button>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default SignUpPage