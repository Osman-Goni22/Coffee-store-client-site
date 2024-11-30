import { useContext } from "react";
import { AuthContext } from "./AuthProvider";



const SignUp = () => {

const {signUp} =useContext(AuthContext)
  const handleSignUp =(e)=>{
    e.preventDefault();
    const email =e.target.email.value;
    const password =e.target.password.value;
    const name=e.target.name.value;
    console.log(email, password);
   
    signUp(email, password)
    
    .then(data=>{
      console.log(data);
      const creationTime = data.user.metadata?.creationTime;
      const user ={name, email, creationTime}
 

      fetch('http://localhost:3000/users', {
        method:'POST',
        headers:{
          'content-type':'application/json',
      },
    
    body:JSON.stringify(user)
  
    })
      .then(res=>res.json())
      .then(data=>console.log(data))


    })

    .catch(err=>{
      console.log(err.message);
    })
    


  }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name:</span>
                </label>
                <input  type="text" placeholder="name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input  type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;