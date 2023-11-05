import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {

      const navigatePage = useNavigate()
      const formRef = useRef(null)

      const handleLogin = (e) => {
            e.preventDefault()
            const email = e.target.email.value;
            const password = e.target.password.value;



      }


      return (
           <div className="flex items-center container mx-auto min-h-[80vh] rounded py-14">
                  <div className="flex h-full w-full flex-col-reverse lg:flex-row-reverse justify-between ">
                        <div className="flex flex-col items-center justify-center w-full py-8 lg:py-0 lg:w-[50%] bg-white text-black rounded-r-lg">
                              <h1 className="text-5xl font-bold">Register</h1>
                              <p className="py-6">You Don't have created acount?</p>
                              <Link to='/register'><button className="btn hover:bg-amber-800 bg-amber-800 text-white">Register Now</button></Link>
                        </div>
                        <div className=" flex-1 bg-amber-800 rounded-l-lg">

                              <form ref={formRef} onSubmit={handleLogin} className="px-24 my-8 lg:my-24">
                                    <div>
                                          <h3 className="text-center font-extrabold text-4xl text-red-50 my-8">Log In</h3>
                                    </div>
                                    <div className="form-control mb-6">
                                          <input type="Email" name="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                          <input type="Password" name="password" placeholder="password" className="input input-bordered" required />
                                          <label className="label ">
                                                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                          </label>
                                    </div>
                                    <div className="form-control mt-6">
                                          <button type="submit" className="btn font-bold">Login</button>
                                    </div>
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default Login;