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
            </div>
            {books[0].isReading  ? <BookReadOrNot books={books} setBooks={setBooks} con1={false} con2={true} setisRedirect={setisRedirect} setBookDetails={setBookDetails}/> :
            <div className={style.noBooks}>
                <h1>Sorry User {auth.email}..</h1>
                <h3>It Seem's Like Your Reading List Is Empty</h3>
                <p>Go Back To Book List Page To Add New Books To Read</p>
            </div>}
        </div>
    )
}
