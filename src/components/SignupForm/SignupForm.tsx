import React, { FC } from 'react';
import styles from './SignupForm.module.css';
interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = () => {

  
  const initialValues = {
    username:'',
    email:'',
    password1:'',
    password2:'',

  }
  // const checkUsername = async (e:Event) =>{
  //   let timeOut : Number;

  //   return function(){
  //     clearTimeout(timeOut)
  //     timeOut = setTimeout(() =>{
  //       console.log('okay now this is happeneing', (e.target.value||"nothing"), 4000)
  //     })
  //   }
  // }
  
  return (
    <div className={styles.LoginForm}>
      <form className={styles.Form}>
        <div className={styles.formElement}>
          <label htmlFor='username' >Username</label>
          <input type="text" className={styles.Input} required name="username" placeholder="hello123" />
        </div>
        <div className={styles.formElement}>
          <label htmlFor='email' >Email</label>
        <input type='email' className={styles.Input} name="email" placeholder="Email"/>
        </div>
        <div className={styles.formElement}>
          <label htmlFor='password1' >Password</label>
        <input type="password" className={styles.Input} name="password1" placeholder="Password"/>
        </div>
        <div className={styles.formElement}>
          <label htmlFor='password2' >Confirm Password</label>
        <input type="password" className={styles.Input} name="password2" placeholder="Confirm Password"/>
        </div>
        <div className={styles.buttonContainer}>
          <button>Login</button>
        </div>
      </form>
    </div>
        
)}

export default LoginForm;
