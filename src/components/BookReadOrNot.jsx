import style from './BookLibrary.module.css'
import {FaStar} from "react-icons/fa"
import moment from "moment"

const BookReadOrNot = ({setRate,rating,books,setBooks,con1,con2,setisRedirect,setBookDetails}) => {
    let temp = [...books]
    const BOOKS_KEY = "bookList"
    const element = temp.map(it=>{
        if (it.isComplete == con1 && it.isReading == con2) {
            return (
                <div key={it.id} className={style.books}>
                    <img src={it.img}className={style.bookImg}/>
                    <div className={style.booksDetails}>
                        <h2>{it.bookName}</h2>
                        <h4>{it.author}</h4>
                        <p title="Click for more details" onClick={()=>{setBookDetails(it);setisRedirect(true)}}>{it.description.slice(0,300)}...</p>
                    </div>
                    <div className={style.addAndDelete}>
                    {!con1 ? <div><img title="Add to complete" onClick={()=>{
                        it.isComplete = true;
                        it.endDate = moment().format("DD/MM/YYYY")
                        setBooks(temp);
                    }}
                         src="https://img.icons8.com/ios/50/000000/task-completed.png"/></div> : ""}
                        {con2 ? <div><img onClick={()=>{it.isComplete = false;it.isReading = false;setBooks(temp);}} title="Delete"
                        src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-delete-multimedia-kiranshastry-lineal-kiranshastry.png"/></div>: ""}
                    </div>
                      {it.isComplete ?  <div title="Rate this book" className={style.starHolder}>{rating.map((rate,i)=>
                        <FaStar className={style.star} key={i} onClick={()=>{it.rating = rate;setBooks(temp);}} 
                        onMouseOver={()=>{setRate(rate);it.rating = rate}}
                        style={{color: rate <= it.rating  ? "gold" : ""}}/>)}</div> : ""}
                </div>
            )
        }
    })
    return (
        <div>
            {element}
        </div>
    )
}

export default BookReadOrNot
