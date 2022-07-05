import React from 'react'
import Shelf from './Shelf'

const Shelves = ({ books, changeShelf }) => {
    console.log(books)
    const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
    const wantToRead = books.filter((book) => book.shelf === "wantToRead");
    const read = books.filter((book) => book.shelf === "read");
    return (
        <div>
            <div className="list-books-content">
                <div>
                    {/* curentlty reading */}
                    <Shelf books={currentlyReading}
                        title="Currently Reading"
                        changeShelf={changeShelf} />
                    {/* want to read */}
                    <Shelf books={wantToRead} title="Want to Read"
                        changeShelf={changeShelf} />
                    {/* read */}
                    <Shelf books={read} title={"Read"}
                        changeShelf={changeShelf} />
                </div>
            </div>
        </div>
    )
}

export default Shelves
