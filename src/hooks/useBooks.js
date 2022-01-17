import axios from 'axios'
import {useState , useEffect} from 'react'

export default function useBooks(url) {
    const [books, setBooks] = useState([])
    const BOOKS_KEY = "bookList"
    
    useEffect(getBooks, [])

    function getBooks() {
        axios.get(url)
        .then(res=>{setBooks(res.data.books);localStorage.setItem(BOOKS_KEY,JSON.stringify(res.data))})
        .catch(err=>console.log(err.response))
    }

    return {books,setBooks}
}
