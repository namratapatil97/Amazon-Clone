import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    window.scrollTo(0,0);
    
    const [udata, setUdata] = useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""
    });
    console.log(udata);

    const adddata = (e) => {
        const {name, value} = e.target;
        setUdata(() =>{
            return{
                ...udata,
                [name]:value
            }
        })
    }

    const senddata = async(e) => {
        e.preventDefault();
        const {fname,email,mobile,password,cpassword} = udata;

        if(fname === ""){
            toast.warn("name required",{
                position: "top-center",
            })
        }else if(email === ""){
            toast.warn("email required",{
                position: "top-center",
            }) 
        }else if(mobile === ""){
            toast.warn("mobile required",{
                position: "top-center",
            }) 
        }else if(password === ""){
            toast.warn("password required",{
                position: "top-center",
            }) 
        }else if(cpassword === ""){
            toast.warn("cpassword required",{
                position: "top-center",
            }) 
        }else{
            const res = await fetch("/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    fname,email,mobile,password,cpassword
                })
            });
    
            const data = await res.json();
            // console.log(data);
            if(res.status === 422 || !data){
                // alert("No data");
                toast.warn("Inavalid Details",{
                    position: "top-center",
                })
            }else{
                // alert("Data Added Successfully")
                toast.success("Data Added Successfully",{
                    position: "top-center",
                })
                setUdata({...udata,fname:"",email:"",mobile:"",password:"",cpassword:""})
            }
        }
        }

     
      


    return (
        <>
            <section>
                <div className="sign_container">
                    <div className="sign_header">
                        <img src="./blacklogoamazon.png" alt="amazonlogo" />
                    </div>
                    <div className="sign_form">
                        <form  method="POST">
                            <h1>Sign-Up</h1>
                            <div className="form_data">
                                <label htmlFor="fname">Your Name</label>
                                <input type="fname" onChange={adddata} value={udata.fname} name="fname" id="fname" />
                            </div>
                            <div className="form_data">
                                <label htmlFor="email">Email</label>
                                <input type="text" onChange={adddata} value={udata.email} name="email" id="email" />
                            </div>
                            <div className="form_data">
                                <label htmlFor="number">Mobile</label>
                                <input type="text" onChange={adddata} value={udata.mobile} name="mobile" id="mobile" />
                            </div>
                            <div className="form_data">
                                <label htmlFor="password">Password</label>
                                <input type="password" onChange={adddata} value={udata.password} name="password" placeholder="At least 6 characters" id="password" />
                            </div>
                            <div className="form_data">
                                <label htmlFor="cpassword">Re-enter Password</label>
                                <input type="password" onChange={adddata} value={udata.cpassword} name="cpassword"  id="password" />
                            </div>
                            <button className="signin_btn" onClick={senddata}>Continue</button>

                            <div className="signin_info">
                                <p>Already have an account?</p>
                                <NavLink to="/login">Signin</NavLink>
                            </div>
                        </form>
                    </div>
                    <ToastContainer/>
                    
                </div>
            </section>
        </>
    );
}
export default SignUp;