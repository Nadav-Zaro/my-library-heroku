import { Redirect } from 'react-router-dom';
import BookReadOrNot from '../components/BookReadOrNot';
import { useState } from 'react';
import style from "../components/BookLibrary.module.css"

export default function CompletedList({auth,isRedirect,setisRedirect,setBookDetails,books,setBooks}) {
    const [rate, setRate] = useState(0)
    let rating = [1,2,3,4,5]
    if (isRedirect) {
        return <Redirect to="/Details"/>
    }
    if (!auth) {
        return <Redirect to="/"/>
    }
    return (
        <div>
            <div className={style.pagesOpen}>
            <h1><span style={{color:"#23d5ab"}}>{auth.email}</span> Reading List</h1>
            <h4>Your Personal Reading List</h4>
            <p>Here u can Keep up with your reading progress</p>
            </div>
            {books[0].isComplete ? <BookReadOrNot books={books} rating={rating} setRate={setRate} setBooks={setBooks} con1={true} con2={true} setisRedirect={setisRedirect} setBookDetails={setBookDetails}/> : 
            <div className={style.noBooks}>
            <h1>Sorry User {auth.email}..</h1>
            <h3>It Seem's  Like Your Complete List Is Empty</h3>
            <p>Go Back To Reading List Page And Finish Some Books</p>
        </div>}
        </div>
    )
}
