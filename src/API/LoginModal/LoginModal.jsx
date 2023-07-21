import { Button, Modal } from "react-bootstrap";

import registerImage from '../../images/register/register.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ show, handleClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const { oldUser } = useContext(AuthContext)

    const onSubmit = (data) => {
        console.log(data)
        oldUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                handleClose()
            })
            .catch(err => alert('err', err.message))


    };
    return (
        <div>
            <Modal
                show={show} size="lg" onHide={handleClose}>
                <Modal.Body>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div>
                            <form className="text-center border border-light p-5"
                                onSubmit={handleSubmit(onSubmit)}>
                                <h2 className="h4 mb-4">Create Account</h2>

                                {/* Email */}

                                <input
                                    {...register("email", { required: true })}
                                    name="email"
                                    type="email"
                                    id="defaultLoginFormEmail"
                                    className="form-control mb-4"
                                    placeholder="E-mail"
                                />

                                {/* Password */}
                                <input
                                    {...register("password", { required: true })}
                                    name="password"
                                    type="password"
                                    id="defaultLoginFormPassword"
                                    className="form-control mb-4"
                                    placeholder="Password"
                                />



                                {/* Sign in button */}
                                <Button type="submit">Login</Button>
                                {/* Register */}

                                {/* Social login */}
                                <p>or sign in with:</p>

                                <Button style={{ maxWidth: '100%' }} variant="outline-secondary" ><span style={{ color: 'blue' }} className='fa-brands fa-facebook p-2'></span>Sign up with Facebook</Button>
                                <br /><br />
                                <Button style={{ maxWidth: '100%' }} variant="outline-secondary" ><span style={{ color: 'blue' }} className='fa-brands fa-google p-2'></span>Sign up with Google</Button>

                            </form>
                        </div>
                        <div className='d-none d-lg-block'>
                            <p>Do you  have no any account ? <span style={{ color: 'blue' }}>
                                Create now free </span></p>
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
        </div>
    );
};

export default LoginModal;