import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./SignUp.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from "../context/ContextProvider";

const SignIn = () => {
    window.scrollTo(0, 0);

    const [logdata, setData] = useState({
        email: "",
        password: ""
    });
    console.log(logdata);

    const { account, setAccount } = useContext(LoginContext);

    const adddata = (e) => {
        const { name, value } = e.target;

        setData(() => {
            return {
                ...logdata,
                [name]: value
            }
        })
    };

    const senddata = async (e) => {
        e.preventDefault();

        const { email, password } = logdata;

        if (email === "") {
            toast.warn("email required", {
                position: "top-center",
            })
        } else if (password === "") {
            toast.warn("password required", {
                position: "top-center",
            })
        } else {
            const res = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });


            const data = await res.json();
            console.log(data);

            if (res.status == 400 || !data) {
                console.log("Invalid Details");
                toast.warn("Invalid Details", {
                    position: "top-center",
                })
            } else {
                console.log("Data valid");
                setAccount(data);
                toast.success("User Login Successfully", {
                    position: "top-center",
                })
                setData({ ...logdata, email: "", password: "" });
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
                        <form method="POST">
                            <h1>Sign-In</h1>
                            <div className="form_data">
                                <label htmlFor="email">Email</label>
                                <input type="text" onChange={adddata} value={logdata.email} name="email" id="email" />
                            </div>
                            <div className="form_data">
                                <label htmlFor="password">Password</label>
                                <input type="password" onChange={adddata} value={logdata.password} name="password" placeholder="At least 6 characters" id="password" />
                            </div>
                            <button className="signin_btn" onClick={senddata}>Continue</button>
                        </form>
                    </div>
                    <ToastContainer />
                    <div className="create_accountinfo">
                        <p>New To Amazon</p>
                        <NavLink to="/register">
                            <button>Create your amazon account</button>
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}
export default SignIn;