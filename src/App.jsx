import './App.css'
import Header from './Component/Header/Header'
import Blogs from './Component/Blogs/Blogs';
import Bookmarks from './Component/Bookmarks/Bookmarks';
import { useState } from 'react';


function App() {
  const [bookmarks,setBookmarks]=useState([])
const [readingTime,setReadingTime]=useState(0)

// for bookmark button 
const handleAddToBookmark=blog=>{
  console.log(blog);
  const newBookMarks=[...bookmarks,blog]
  setBookmarks(newBookMarks)
}

// mark as read 

const handleMarkAsRead=(id,time)=>{
  console.log('mark as read',time);
  const newReadingTime=readingTime + time
  setReadingTime(newReadingTime)
  const remainingBookmarks=bookmarks.filter(bookmark=>bookmark.id !== id)
  setBookmarks(remainingBookmarks)
}


return (
    <>
     <Header ></Header >
    <div className='md:flex container mx-auto max-w-7xl'>
    
    <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    
    </div>
    
    </>
  )
}

export default App
