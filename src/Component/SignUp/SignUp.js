import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import useToken from '../../Hooks/useToken';
import './SignUp.css'

const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [token]=useToken(googleUser||user)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    if (googleLoading||loading) {
        return <Loading></Loading>
    }

    if (token) {
        navigate('/')
    }
let errorMessage;
    if(googleError||error){
        errorMessage=<p className='fs-4 text-red-600 font-bold'>{googleError?.message}</p>
    }

    const onSubmit = (data) => {
        console.log(data)
        createUserWithEmailAndPassword(data?.email,data?.password)
    };
    return (
        // <div style={{ width: '90%', margin: 'auto', marginTop: '40px' }}>
        //     <h1 className='text-5xl text-center uppercase' style={{ fontFamily: 'Roboto Mono, monospaced', fontWeight: 'bold', color: 'darkcyan' }}>SIGN UP</h1>
        //     <div className="divider w-1/4 m-auto mb-10"></div>
        //     <div className='flex justify-center items-center'>
        //         <div className="card w-5/12 bg-base-100 shadow-xl">
        //             <div className="card-body">
        //                 <form onSubmit={handleSubmit(onSubmit)}>
        //                     <div style={{marginBottom:'10px'}}>
        //                         <label for="first name">FIRST NAME</label>
        //                         <br/>
        //                         <input type="text" className='w-full' {...register("firstName", { required: "First Name is required" })} />
        //                         <p>{errors.firstName?.message}</p>
        //                     </div>
        //                     <div style={{marginBottom:'10px'}}>
        //                         <label for="last name">LAST NAME</label>
        //                         <br/>
        //                         <input type="text" className='w-full' {...register("lastName", { required: "Last name is required" })} />
        //                         <p>{errors.lastName?.message}</p>
        //                     </div>
        //                     <div style={{marginBottom:'10px'}}>
        //                         <label for="email">EMAIL</label>
        //                         <br/>
        //                         <input
        //                         type="email" placeholder="Your Email" className='w-full'
        //                         {...register("email", {
        //                             required: {
        //                                 value: true,
        //                                 message: 'Email is Required'
        //                             },
        //                             pattern: {
        //                                 value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
        //                                 message: 'Provide a valid Email'
        //                             }
        //                         })} />
        //                         <p>{errors.email?.message}</p>
        //                     </div>
        //                     <div style={{marginBottom:'10px'}}>
        //                         <label for="password">PASSWORD</label>
        //                         <br/>
        //                         <input type="password" className='w-full' {...register("password", { required: "password is required" })} />
        //                         <p>{errors.password?.message}</p>
        //                     </div>
        //                     <input style={{fontSize:'20px'}} className='w-full text-center cursor-pointer font-bold bg-accent text-white' type="submit" value='SIGN UP'/>
        //                 </form>
        //                 <button onClick={()=>signInWithGoogle()} type="button" className='btn' style={{fontSize:'20px',marginBottom:'10px'}}>
        //                 <span className='mr-3'>Continue with</span><FcGoogle></FcGoogle>
        //                 </button>
        //                 {errorMessage}
        //                 <Link to='/login'><a href="#" className='underline text-zinc-900 font-bold'>Already Have An Account.Please Login</a></Link>
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <div className='flex justify-center items-center h-screen my-20'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-3xl font-bold uppercase">SIGN UP</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input
                            type="text" placeholder="Your Name" {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })} />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input
                            type="email" placeholder="Your Email" {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input
                            type="password" placeholder="Your Password" {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })} />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    {errorMessage}
                    <input type="submit" value='Signup' />
                </form>
                <p><small>Al ready have an account? <Link to='/login' className='text-primary'>Please Login</Link> </small></p>
                <div className="divider">OR</div>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-accent font-bold w-full max-w-xs text-white">Continue With Google</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;