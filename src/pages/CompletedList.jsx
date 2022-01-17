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
            {books[0].isComplete ? "" : <h1>No Books yet</h1>}
            </div>
            <BookReadOrNot books={books} rating={rating} setRate={setRate} setBooks={setBooks} con1={true} con2={true} setisRedirect={setisRedirect} setBookDetails={setBookDetails}/>
        </div>
    )
}
