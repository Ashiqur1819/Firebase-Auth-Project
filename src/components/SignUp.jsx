import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

         console.log(name, email, password);

        createUser(email, password)
          .then(result => {
            console.log(result);
            e.target.reset()
            navigate("/")
          })
          .catch(error => {
            console.log(error);
          });

    }

    return (
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-12">
        <h2 className="text-3xl font-bold text-yellow-500 text-center">
          __Signup Now__
        </h2>
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
        <p className="text-center mb-4">Already have an account? <Link className="text-green-500 underline" to="/login">Log In</Link></p>
      </div>
    );
};

export default SignUp;