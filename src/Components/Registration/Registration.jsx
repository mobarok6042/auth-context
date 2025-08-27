import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";



const Registration = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password, auth);

        //create user in firebase.
        createUser(email, password)
            .then(result => {
                console.log(result.user);
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
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <label classame="label">Name</label>
                                <input type="text" name="name" id="name" required placeholder="Your full name" className="input" />
                                <label className="label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" required />
                                <label className="label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" required />
                                <button className="btn btn-neutral mt-4">Register</button>
                            </form>
                            <div><p>Already have an account? <Link to="/login"><button className="btn btn-link">Log In</button></Link></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;