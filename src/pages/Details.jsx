import style from "../components/BookLibrary.module.css"
import { useState } from "react"
import { Redirect } from "react-router-dom"
import { FaStar } from "react-icons/fa"

export default function Details({auth,isRedirect,bookDetails,setisRedirect,books,setBooks,setIsBooks,setIsReading,setIsComplete}) {
    const [comment, setComment] = useState(null)
    let temp = [...books]
    let obj = temp[bookDetails.id-1]
    let rating = [1,2,3,4,5]
    let bookRating = obj.rating ? <div className={style.stardetail}><span style={{fontSize:"large"}}>Rating: </span>{rating.map((rate,i)=>
    <FaStar className={style.star} style={{color:rate <= obj.rating ? "gold" : ""}}/>)}</div> : ""
    if (!isRedirect){
        setIsReading(false);setIsComplete(false);setIsBooks(true)
        return <Redirect to="/BooksList"/>
    }
    if (!auth){
        return <Redirect to="/"/>
    }
    return (
        <div className={style.allDetails}>
            <div className={style.pagesOpen}>
            <button onClick={()=>setisRedirect(false)}>Go Back Home</button>
            <h1 style={{color:"#e73c7e"}}>Book Details</h1>
            <h4>More details on your book</h4>
            </div><hr/>
            <div className={style.Detail}>
            <img src={obj.img}/> 
            {bookRating}  
            <h1>{obj.bookName}</h1>
            <h3>{obj.author}</h3>
            </div>
            {obj.startDate ? <p style={{fontWeight:"600"}}>Start reading: {obj.startDate}</p> : ""}
            {obj.endDate ? <p style={{fontWeight:"600"}}>Finish reading: {obj.endDate}</p> : ""}
            <p>{obj.description}</p>
            <div className={style.notes}>
            {bookDetails.isReading ? <div><h2>Notes</h2>
                {obj.comment ? obj.comment.map((it,i)=><p key={i} style={{fontSize:"medium"}} onDoubleClick={()=>{obj.comment.splice(i,1);setBooks(temp)}}>{i + 1}. {it}</p>) : ""}
            <textarea onChange={(e)=>setComment(e.target.value)} cols="150" rows="10"></textarea><br/>
            <button onClick={()=>{
                    obj.comment.push(comment)
                    setBooks(temp)
            }}>Add Comment</button>
            </div> : ""}
            </div>
        </div>
    )
}
