import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <label className="label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" required />
                                <label className="label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" required />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </form>
                            <div><p>New to Auth Context? <Link to="/registration"><button className="btn btn-link">Register</button></Link></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;