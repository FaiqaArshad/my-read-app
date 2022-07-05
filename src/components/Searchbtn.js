import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'

const Searchbtn = ({setShowSearchpage , showSearchPage}) => {
  return (
    <div>
          <div className="open-search">
            <Link  to = 'search'>
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
            </Link> 
          </div>
    </div>
  )
}
export default Searchbtn
