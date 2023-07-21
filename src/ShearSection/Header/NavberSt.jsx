/* eslint-disable no-unused-vars */

import React, { useContext, useState } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar, Form } from "react-bootstrap";
// import { Form } from "react-router-dom";
import './navberCss.css'
import logo from '../../images/logo.png'
// import { AuthContext } from '../../Provider/AuthProvider';
import Modal from 'react-bootstrap/Modal';

import registerImage from '../../images/register/register.png'
import LoginModal from '../../API/LoginModal/LoginModal';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import iconimage from '../../images/ImageIcon/usersIcon.png'

const NavberSt = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { newUser, user, logOutUser, userUpdateNP } = useContext(AuthContext)
    const navigate = useNavigate()


    const [show, setShow] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseLoginModal = () => setShowLoginModal(false);
    const handleShowLoginModal = () => setShowLoginModal(true);
    // const {user}=useContext(AuthContext)

    const onSubmit = (data) => {
        console.log(data)
        newUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                userUpdateNP(result?.name)

                setShow(false)
            })
            .catch(err => alert('err', err.message))


    };

    const userOutMySite = () => {
        logOutUser()
    }


    return (
        <div className='mainWidth'>
            <Navbar expand="lg" >
                <Container fluid className='d-flex justify-content-between align-items-center p-2'>
                    <div>
                        <Navbar.Brand href="#">
                            <img src={logo} alt="" />
                        </Navbar.Brand>
                    </div>

                    <div>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </div>

                    <div>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0 d-flex align-items-center justify-content-between"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >


                                <div>


                                    {
                                        user ?
                                            <>
                                                <div className='d-flex gap-3 align-items-center'>
                                                    <img style={{maxWidth:'30px'}} src={iconimage} alt="" />
                                                    <h5>{user?.displayName}</h5>
                                                    <Button onClick={userOutMySite}>Log Out</Button>
                                                </div>
                                            </>
                                            :
                                            <>

                                                <div className='d-flex align-items-center'>
                                                    <h6><span className='text-lg'>Create account.</span>
                                                        <select className='border border-0 font-md text-Color'>
                                                            <option value="First " > It’s free!</option>
                                                            <option value="First ">Login</option>
                                                            <option value="First " className="btn btn-primary"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal"
                                                            >
                                                                Register</option>
                                                            <option value="First ">First</option>
                                                        </select>
                                                    </h6>
                                                    <Button className='mx-2' variant="primary" onClick={handleShow}>
                                                        Register
                                                    </Button>

                                                    <Button variant="primary" onClick={handleShowLoginModal}>
                                                        Login
                                                    </Button>
                                                </div>

                                            </>
                                    }



                                </div>


                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>

            {/* <!-- Modal --> */}


            <Modal show={show} size="lg" onHide={handleClose}>
                <Modal.Body>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} className="text-center border border-light p-5" >
                                <h2 className="h4 mb-4">Create Account</h2>

                                {/* Email */}
                                <input
                                    {...register("name", { required: true })}
                                    name='name'
                                    type="text"
                                    className="form-control mb-4"
                                    placeholder="Enter Your Name"
                                />
                                <input
                                    {...register("email", { required: true })}
                                    name='email'
                                    type="email"
                                    id="defaultLoginFormEmail"
                                    className="form-control mb-4"
                                    placeholder="E-mail"
                                />

                                {/* Password */}
                                <input
                                    {...register("password", { required: true })}
                                    name='password'
                                    type="password"
                                    id="defaultLoginFormPassword"
                                    className="form-control mb-4"
                                    placeholder="Password"
                                />
                                <input
                                    {...register("confirmPassword", { required: true })}
                                    name='confirmPassword'
                                    type="password"
                                    id="defaultLoginFormPassword"
                                    className="form-control mb-4"
                                    placeholder="Confirm Password"
                                />



                                {/* Sign in button */}
                                <button className="btn btn-info btn-block my-4" type="submit">
                                    Create Account
                                </button>

                                {/* Register */}

                                {/* Social login */}
                                <p>or sign in with:</p>

                                <Button style={{ maxWidth: '100%' }} variant="outline-secondary" ><span style={{ color: 'blue' }} className='fa-brands fa-facebook p-2'></span>Sign up with Facebook</Button>
                                <br /><br />
                                <Button style={{ maxWidth: '100%' }} variant="outline-secondary" ><span style={{ color: 'blue' }} className='fa-brands fa-google p-2'></span>Sign up with Google</Button>

                            </form>
                        </div>
                        <div className='d-none d-lg-block'>
                            <p>ALready have an account ? <span style={{ color: 'blue' }}>Sign In</span></p>
                            <img style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }} src={registerImage} alt="" />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ position: 'absolute', top: '0' }} variant="secondary" onClick={handleClose}>
                        X
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Use LoginModal component */}


            {/* Use LoginModal component for login */}
            <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal} />

        </div>
    );
};

export default NavberSt;