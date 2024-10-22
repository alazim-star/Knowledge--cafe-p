
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'
 

const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    
    <div className="md:w-1/3 bg-red-50 ml-4 mt-2 h-[1000px] rounded-3xl  "> 
  <div className='bg-purple-100 text-center mb-5  '>
  <h3 className='text-purple-800 text-xl  p-5   '>
    Spent time on read:{readingTime} min

    </h3>
  </div>

    <h2 className="text-xl text-center ">Bookmarked Blogs:{bookmarks.length}</h2>
    {
        bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
    }
</div>
  )
}

Bookmarks.propTypes = {
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks