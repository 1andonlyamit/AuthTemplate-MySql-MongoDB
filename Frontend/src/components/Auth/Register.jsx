import React from "react";
import { useForm } from "react-hook-form"
import styles from "./Auth.module.css"
import axios from 'axios'

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const submitCall = async (data) => {
        console.log(data);
        {
            try {
                //i have used
                const url = "http://localhost:6969/user/auth/register"
                const response = await axios.post(url, data)
                if (response.status == 201) {
                    alert('Registration Successful.')
                }
            } catch (error) {
                console.log(error);
            }
        }

    }
    return (
        <div className={styles.authContainer}>
            <form className={styles.authForm} onSubmit={handleSubmit(submitCall)}>
                <h2 className={styles.authTitle}>Create an Account</h2>
                <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.label}>Full Name</label>
                    <input id="name" {...register("name", {
                        required: "Name is required",
                        minLength: {
                            value: 3,
                            message: "Name must be at least 3 characters"
                        }
                    })} type="text" className={styles.input} />
                    {errors.name && <div className={styles.errorMsg}>{errors.name.message}</div>}
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input id="email" {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Enter a valid email address"
                        }
                    })} type="email" className={styles.input} />
                    {errors.email && <div className={styles.errorMsg}>{errors.email.message}</div>}
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="mobile" className={styles.label}>Mobile</label>
                    <input id="mobile" {...register("mobile", {
                        required: "Mobile number is required",
                        pattern: {
                            value: /^\d{10}$/,
                            message: "Enter a valid 10-digit mobile number"
                        }
                    })} type="text" className={styles.input} />
                    {errors.mobile && <div className={styles.errorMsg}>{errors.mobile.message}</div>}
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input id="password" {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                        }
                    })} type="password" className={styles.input} />
                    {errors.password && <div className={styles.errorMsg}>{errors.password.message}</div>}
                </div>
                <div className={styles.submitButton}>
                    <button type="submit" className={styles.label}>Register</button>
                    <p className={styles.toggleText}>Already have an Account? Login</p>
                </div>
            </form>
        </div>
    )
}

export default Register;