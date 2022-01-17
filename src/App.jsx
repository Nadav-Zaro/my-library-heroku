import { useState,useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import {BrowserRouter , Switch , Route , Link ,Redirect} from 'react-router-dom'
import ReadingList from './pages/ReadingList'
import BooksList from './pages/BooksList'
import CompletedList from './pages/CompletedList'
import Details from './pages/Details'
import useBooks from './hooks/useBooks.js'
import WrongPage from './components/WrongPage'

function App() {
  const [auth, setAuth] = useState(null)
  const [isRedirect, setisRedirect] = useState(false)
  const [bookDetails, setBookDetails] = useState(null)
  const {books,setBooks} = useBooks("./bookList.json")
  const [isBooks, setIsBooks] = useState(true)
  const [isReading, setIsReading] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const STORAGE_KEY = "userDetails"
  const BOOKS_KEY = "bookList"
  
  useEffect(() => {
    keppUserLogIn()
  }, [])

  function keppUserLogIn() {
     let userDetails = localStorage.getItem(STORAGE_KEY)
    return userDetails ? setAuth(JSON.parse(userDetails)) : null
  }
  
    return (
        <BrowserRouter>
      <div className="App">
        {auth ? <div className='logOut'>
          <button onClick={()=>{
            setAuth(null);setIsBooks(true);setIsReading(false);setIsComplete(false)
            localStorage.setItem(STORAGE_KEY,JSON.stringify(null));
          }}>Log Out</button>
          <div className='onOff'></div>
          <p>{auth.email}</p>
        </div> : ""}
      
      {auth ? <div className='linksHolder'><Link className={isBooks ? "linkClick" : "links"} onClick={()=>{setIsBooks(true);setIsReading(false);setIsComplete(false)}} to="/BooksList">Books list</Link>
      <Link className={isReading ? "linkClick" : "links"} onClick={()=>{setIsBooks(false);setIsReading(true);setIsComplete(false)}} to="/ReadingList">Reading List</Link>
      <Link className={isComplete ? "linkClick" : "links"} onClick={()=>{setIsBooks(false);setIsReading(false);setIsComplete(true)}} to="/CompletedList">Completed list</Link>
      </div> : ""}
      <Switch>
        <Route exact path="/" render={()=><Home  auth={auth} setAuth={setAuth}/>}/>
        <Route exact path="/ReadingList" render={()=><ReadingList auth={auth} setAuth={setAuth} setBooks={setBooks} setBookDetails={setBookDetails} books={books} isRedirect={isRedirect} setisRedirect={setisRedirect}/>}/>
        <Route exact path="/CompletedList" render={()=><CompletedList auth={auth} setAuth={setAuth} setBooks={setBooks} setBookDetails={setBookDetails} books={books} isRedirect={isRedirect} setisRedirect={setisRedirect}/>}/>
        <Route exact path="/BooksList" render={()=><BooksList auth={auth} setAuth={setAuth} setBooks={setBooks} setBookDetails={setBookDetails} books={books} isRedirect={isRedirect} setisRedirect={setisRedirect}/>}/>
        <Route exact path="/Details" render={()=><Details setIsBooks={setIsBooks} setIsComplete={setIsComplete} setIsReading={setIsReading} auth={auth} isRedirect={isRedirect} bookDetails={bookDetails} setisRedirect={setisRedirect} books={books} setBooks={setBooks}/> }/>
        <Route exact path="/*" component={WrongPage}/>
      </Switch>
      {auth ?<footer>© copyright belongs to Nadav Zaro</footer> : ""}
    </div>
    </BrowserRouter>
  )
}

export default App
