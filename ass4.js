
import React from "react"
import ReactDOM from "react-dom/client"

import data from "./data.js"
import logo from "./images/logo.jpeg"
/***
 * 1. Header
 *  -logo 
 *  -login
 *  -signup
 * 2. navbar
 *  -Home 
 *  -Libraries
 *  -Topic
 *  -About
 * 3. Body
 *  - Search
 *  - Books
 *      -Books card
 *          -image,title,subtitle
 *  -Responsive books suggestion card
 *       -Books card
 *          -image,title,subtitle, author
 * 4. Footer
 *      -logo
 *      -links
 *      -copyright  
 * 
 * 
 * 
 *      
 * 
 * 
 */

const Navbar=()=>{
    return(
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Libraries</li>
                <li>Topic</li>
                <li>About</li>
            </ul>

        </div>
    )
}


const Heading=()=>{
    return(
        <div className="headingDev">
            <img alt="logo" src={logo} />
            <Navbar />
            <ul>
                <li>Login</li>
                <li>Sign Up</li>
            </ul>

        </div>
    )
}


const BookCard=(props)=>{
    console.log(props);
    const {title,subtitle,authors}=props.bookDetails.volumeInfo;
    const {imageid}=props.bookDetails;
    return (
        <div className="bookcard">
            <img alt="book" src={"https://coverart.oclc.org/ImageWebSvc/oclc/+-+"+imageid} />
            {/* <img alt="book" src={logo}/> */}
            <h3 className="title">{title}</h3>
            <p className="subtitle">{subtitle}</p>
            {/* <h4 className="author">{authors.join(", ")}</h4> */}
        </div>
    )
}
const Books=()=>{
    return (
        <div className="booksDiv">
            <div className="search">Search</div>
            <div className="card">
            {data.map((book)=>
                <BookCard key={book.id} bookDetails={book} />
            )}
            {/* <BookCard />
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/> */}

            </div>
            


        </div>
    )
}

const AppLayout=()=>{
    return(
        <div className="appLayout">
            <div className="heading">
                <Heading/>
            </div>
            {/* <div className="navbar">
                <Navbar />
            </div> */}
            <div className="books">
                <Books/>
            </div>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)