import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const LogIn = () => {

    const { loginUser, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogIn = (e) => {
        e.preventDefault()
        
        const email = e.target.email.value;
        const password = e.target.password.value

        console.log(email, password)

        loginUser(email, password)
        .then(result => {
            console.log(result.user)
            e.target.reset()
            navigate("/")

        })
        .catch(error => {
            console.log(error.message)
        })
    }

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
        .then(result => {
            console.log(result)
            navigate("/")
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-12">
        <h2 className="text-3xl font-bold text-green-500 text-center">
          __Login Now__
        </h2>
        <form onSubmit={handleLogIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Log In</button>
            <br />
            <button onClick={handleLoginWithGoogle} className="btn btn-accent">Log In with Google</button>
          </div>
        </form>
        <p className="text-center mb-4">
          Haven't any account?{" "}
          <Link className="text-yellow-500 underline" to="/signup">
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
    );
};

export default LogIn;