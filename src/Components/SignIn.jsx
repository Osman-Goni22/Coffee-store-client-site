import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const SignIn = () => {
    const {login} = useContext(AuthContext)


    const handleLogin= (e)=>{
       e.preventDefault();
       const form =e.target;
       const email = form.email.value;
       const password = form.password.value;
       console.log(email, password);

       login(email, password)
       .then(res=>{
         console.log(res);

         const   lastSignInTime  = res.user?.metadata?. lastSignInTime ;
         
         const loginInfo ={
          email, lastSignInTime
         }

         fetch(`http://localhost:3000/users/${email}`,{
           method:'PUT',
           headers:{
            'content-type': 'application/json',
           },
           body:JSON.stringify(loginInfo)
         })
         .then(res=>res.json())
         .then(data=>{
          console.log(data);
         })


       })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin}  className="card-body">
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignIn;