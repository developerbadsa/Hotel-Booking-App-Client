import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Register = () => {



      const handleSubmit = (e) => {
            e.preventDefault()
            const name = e.target.name.value;
            const profile_pic = e.target.profile_pic.value;
            const email = e.target.email.value;
            const password = e.target.password.value;


            if (password.length < 6) {
                  Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Password must need upto 6 character'
                  })
                  return
            } else if (!/[A-Z]/.test(password)) {
                  Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Password must need to at least one capital letter'
                  })
                  return
            } else if (!/[\W_]/.test(password)) {
                  Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Password must need to at least one special character'
                  })
                  return
            } else {
                 console.log('valied')
            }

      }





      return (

            <div className="flex items-center container mx-auto min-h-[90vh] rounded py-12">
                  <div className="flex h-full w-full flex-col-reverse lg:flex-row justify-between transition-opacity">
                        <div className="flex flex-col items-center justify-center w-full lg:w-[50%] bg-white text-black lg:rounded-l-lg py-8">
                              <h1 className="text-5xl font-bold">Sign In</h1>
                              <p className="py-6">Do you have already created acount?</p>
                              <Link to='/signin'><button className="btn hover:bg-amber-800 bg-amber-800 text-white">Sign In Now</button></Link>
                        </div>
                        <div className=" flex-1 bg-amber-800 py-8 px-10 lg:rounded-r-lg">
                              <div>
                                    <h3 className="text-center font-extrabold text-4xl text-red-50 my-8">Sign Up</h3>
                              </div>
                              <form onSubmit={handleSubmit} className="">
                                    <div className="form-control mb-6">
                                          <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control mb-6">
                                          <input type="text" name="profile_pic" placeholder="Profile Picture URL" className="input input-bordered" required />
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
                                          <button type="submit" className="btn font-bold">Sign Up</button>
                                    </div>
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default Register;