import style from "./BookLibrary.module.css"
import moment from "moment"

const BooksDisplay=({isVisible,searchInput,books,setBooks,setisRedirect,setBookDetails})=>{
    let temp = [...books]
    const BOOKS_KEY = "bookList"
    // temp.sort(()=>Math.random() - .5)
    return(
        temp
        .filter(value=>{
            if (searchInput == "") return value
            else if (value.author.toLowerCase().includes(searchInput.toLowerCase()) || 
            value.bookName.toLowerCase().includes(searchInput.toLowerCase()) ||
            value.description.toLowerCase().includes(searchInput.toLowerCase())) {
                console.log(value);
            return value
            }
        })
        .map(it=>{
            if (it.id < 10) {
               return (
            <div key={it.id} className={style.books}>
            <img src={it.img} className={style.bookImg}/>
            <div className={style.booksDetails}>
                <h2>{it.bookName}</h2>
                <h4>{it.author}</h4>
                <p title="Click for more details" onClick={()=>{setBookDetails(it);setisRedirect(true);}}>{it.description.slice(0,300)}...</p>
            </div>
            {!it.isReading && !it.isComplete ?<div className={style.addToList}><img title="Add to reading list" onClick={()=>{
                 it.isReading = true;
                 it.startDate = moment().format("DD/MM/YYYY")
                 setBooks(temp)
             }} src="https://img.icons8.com/ios/50/000000/add--v2.png"/></div> :""}
            <div className={style.addAndDelete}>
            {it.isReading && !it.isComplete ? <div>
                <img title="Add to complete" onClick={()=>{
                    it.isComplete = true;
                    it.endDate = moment().format("DD/MM/YYYY")
                    setBooks(temp);
                }}
                src="https://img.icons8.com/ios/50/000000/task-completed.png"/></div> : ""}
            {it.isComplete || it.isReading? <img onClick={()=>{it.isComplete = false;it.isReading = false;setBooks(temp);}} title="Delete"
            src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-delete-multimedia-kiranshastry-lineal-kiranshastry.png"/>
            : ""}
            </div>
        </div>)
            } 
            else if (it.id > 10) {
                return (
                    <div key={it.id} className={style.books} style={{display:isVisible? "block" : "none",marginTop:".8%"}}>
                    <img style={{marginLeft:"-70%",width: "30%",height:"100%"}} src={it.img}/>
                    <div style={{marginLeft:"30%",marginTop:"-28%"}} className={style.booksDetails}>
                        <h2>{it.bookName}</h2>
                        <h4>{it.author}</h4>
                        <p title="Click for more details" onClick={()=>{setBookDetails(it);setisRedirect(true);}}>{it.description.slice(0,300)}...</p>
                    </div>
                    <div className={style.addToList}><img title="Add to reading list" onClick={()=>{
                         it.isReading = true;
                         setBooks(temp)
                     }} src="https://img.icons8.com/ios/50/000000/add--v2.png"/></div>
                </div>)
             }
            })
 )}

export default BooksDisplay
