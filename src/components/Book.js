import React from 'react'

const Books = ({ changeShelf, book }) => {
    return (
        <div>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                                // `url(${book.imageLinks.thumbnail})`,

                                `url(${(book && book.imageLinks && book.imageLinks.smallThumbnail) ? book.imageLinks.smallThumbnail : `https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80`} )`

                        }}
                    ></div>
                    <div className="book-shelf-changer">
                    <select defaultValue={book.shelf ? book.shelf : "none"} onChange={(e) => changeShelf(book, e.target.value)}>
                            <option value="Move to" >
                                Move to...
                            </option>
                            <option value="currentlyReading">
                                Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </div>
    )
}

export default Books
