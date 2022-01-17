import { Redirect } from 'react-router-dom';
import BooksDisplay from '../components/BooksDisplay';
import { useState } from "react"
import style from "../components/BookLibrary.module.css"


export default function BooksList({auth,isRedirect,setisRedirect,setBookDetails,books,setBooks}) {
    const [searchInput, setsearchInput] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    if (isRedirect) {
        return <Redirect to="/Details"/>
    }
    if (!auth) {
        return <Redirect to="/"/>
    }
    return (
        <div className={style.allBooks}>
            <div className={style.pagesOpen}>
                <h1>Hi, User <span style={{color:"#ee7752"}}>{auth.email}</span></h1>
                <h4>Welcome to our Exclusive Books List</h4>
                <p>Come Explore our books variety</p>
                <div className={style.search}>
                    <label>Search</label><br/>
                    <input type= "text" onChange={(e)=>{
                        setsearchInput(e.target.value)
                        if (e.target.value) {
                            setIsVisible(true)
                        }
                        else{setIsVisible(false)}
                        }} placeholder="Search...." />
                </div>
            </div>
                
            <BooksDisplay searchInput={searchInput} isVisible={isVisible} books={books} setBooks={setBooks} setisRedirect={setisRedirect} setBookDetails={setBookDetails}/>
        </div>
    )
}
