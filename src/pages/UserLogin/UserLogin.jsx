import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../components/GlobalModuleCss/GlobalModuleCss.css';
function UserLogin() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleCheckUser = () => {
        const account = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: userName,
                password: password,
            }),
        };
        fetch('https://fakestoreapi.com/auth/login', account)
            .then((res) => res.json())
            .then((json) => {
                navigate('/');
                localStorage.setItem('token', json.token);
                localStorage.setItem('userName', userName);
            })

            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <>
            <section className=" gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div
                                className=" bg-success text-white"
                                style={{ borderRadius: 50 }}
                            >
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">
                                            Login
                                        </h2>
                                        <p className="text-white-50 mb-5">
                                            Please enter your login and
                                            password!
                                        </p>

                                        <div className="form-outline form-white mb-4">
                                            <label
                                                className="form-label"
                                                htmlFor="typeEmailX"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="typeEmailX"
                                                className="form-control form-control-lg"
                                                onChange={(e) =>
                                                    setUserName(e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <label
                                                className="form-label"
                                                htmlFor="typePasswordX"
                                            >
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                id="typePasswordX"
                                                className="form-control form-control-lg"
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                            />
                                        </div>

                                        <p className="small mb-5 pb-lg-2">
                                            <a
                                                className="text-white-50"
                                                href="#!"
                                            >
                                                Forgot password?
                                            </a>
                                        </p>

                                        <button
                                            className="btn btn-outline-light "
                                            type="submit"
                                            onClick={handleCheckUser}
                                        >
                                            Login
                                        </button>
                                    </div>

                                    <div>
                                        <p className="mb-0">
                                            Don't have an account?{' '}
                                            <a
                                                href="#!"
                                                className="text-white-50 fw-bold"
                                            >
                                                Sign Up
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default UserLogin;
