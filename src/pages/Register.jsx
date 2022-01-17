import style from "../components/BookLibrary.module.css"
import  { useState } from 'react'
import API_KEY from '../api_key/Api_Key'
import useLoginOrRegister from '../hooks/useLoginOrRegister.js' 
import { Redirect } from 'react-router-dom';

export default function Register({auth,setAuth,isRegister,setIsRegister}) {
    const [isDisable, setIsDisable] = useState(false)
    const {confirmPassword,email,password,getAxios,isLoading,isError} = useLoginOrRegister(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,setAuth)

    const isValid = ()=>{
        return email.current.value && 
        password.current.value && 
        confirmPassword.current.value &&
        password.current.value === confirmPassword.current.value
    }
    if (auth) {
        return <Redirect to="/BooksList"/>
    }

    return (
        <div className={isRegister ? style.loginOrRegister : style.logOut} style={{border: "3.5px solid #23d5ab"}}>
            <img onClick={()=>setIsRegister(false)} src="https://img.icons8.com/ios-glyphs/30/000000/multiply.png"/>
            <span style={{fontSize:"2em",fontWeight:"bolder"}}>Register</span>
            <form onChange={()=>setIsDisable(isValid())}
                onSubmit={(e)=>{
                e.preventDefault()
                if (isValid()) {
                    getAxios()
                }
            }}>
                <label>Email</label><br/>
                <input ref={email} type="email" placeholder='Email'/><br/>
                <label>Password</label><br/>
                <input ref={password} type="password" placeholder='Password'/><br/>
                <label>ConfirmPassword</label><br/>
                <input ref={confirmPassword} type="password" placeholder='ConfirmPassword'/><br/><br/> 
                <button style={{background:"#23d5ab"}} disabled={!isDisable} type="submit">{isLoading ? <div className={style.spinner}></div> : "Register"}</button>
            </form>
            {isError ? <h2 style={{color:"red"}}>Error</h2> : ""}
            {isValid() ? "" : <p>U must enter details first ... </p>}
        </div>
    )
}
