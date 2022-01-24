import style from "../components/BookLibrary.module.css"
import {useState} from 'react'
import API_KEY from '../api_key/Api_Key'
import useLoginOrRegister from '../hooks/useLoginOrRegister.js' 
import { Redirect } from 'react-router-dom/'

export default function Login({auth,setAuth,isLogin,setIsLogin}) {
    const [isDisable, setIsDisable] = useState(false)
    const {email,password,getAxios,isLoading,isError} = useLoginOrRegister(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,setAuth)
    const isValid = ()=>{
        return email.current.value && 
        password.current.value.length >= 6
    }
    if (auth) {
        return <Redirect to="/BooksList"/>
    }
    
    return (
        <div className={isLogin ? style.loginOrRegister : style.logOut}>
            <img onClick={()=>setIsLogin(false)} style={{color:"white"}} src="https://img.icons8.com/ios-glyphs/30/000000/multiply.png"/>
            <span style={{fontSize:"2em",fontWeight:"bolder"}}>Login</span>
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
                <input ref={password} type="password" placeholder='Password'/><br/><br/>
                <button disabled={!isDisable} type="submit">{isLoading ? <div className={style.spinner}></div> : "Login"}</button>
            </form>
            {isError ? <h2 style={{color:"red"}}>{isError}</h2> : ""}
            {isValid() ? "" : <p>You must enter details first ... </p>}
        </div>
    )
}
