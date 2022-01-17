import { Redirect } from 'react-router-dom';
import BookReadOrNot from '../components/BookReadOrNot';
import style from "../components/BookLibrary.module.css"

export default function ReadingList({auth,isRedirect,setisRedirect,setBookDetails,books,setBooks}) {
    if (isRedirect) {
        return <Redirect to="/Details"/>
    }
    if (!auth) {
        return <Redirect to="/"/>
    }
    return (
        <div>
            <div className={style.pagesOpen}>
            <h1><span style={{color:"#23a6d5"}}>{auth.email}</span> Reading List</h1>
            <h4>Your Personal Reading List</h4>
            <p>Here u can Keep up with your reading progress</p>
            {books[0].isReading  ? "" : <h1>No Books yet</h1>}
            </div>
            <BookReadOrNot books={books} setBooks={setBooks} con1={false} con2={true} setisRedirect={setisRedirect} setBookDetails={setBookDetails}/>
        </div>
    )
}
