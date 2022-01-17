import { useState } from 'react'
import Register from './Register'
import Login from './Login'
import style from "../components/BookLibrary.module.css"

export default function Home({auth,setAuth}) {
    // const [loginOrRegister, setLoginOrRegister] = useState(true)
    const [isLogin, setIsLogin] = useState(false)
    const [isRegister, setIsRegister] = useState(false)
      
    return (
        <div className={style.homeEnter}>
            <div className={style.home}>
            <div className={style.homeContain}>
            <h1>Book Library</h1><br/>
            <p>Welcome To Your Personal Library</p><br/>
            <div className={style.homeButtons}>
                <button style={{background:"#23d5ab"}} onClick={()=>setIsRegister(true)}>Register</button>
                <button onClick={()=>setIsLogin(true)}>Login</button>
            </div>
            <Register auth={auth} setAuth={setAuth} isRegister={isRegister} setIsRegister={setIsRegister}/>
            <Login auth={auth} setAuth={setAuth} isLogin={isLogin} setIsLogin={setIsLogin}/>
            </div>
            </div>
            {/* {loginOrRegister ?<Register auth={auth} setAuth={setAuth}/> : <Login auth={auth} setAuth={setAuth}/>} */}
        </div>
    )
}
