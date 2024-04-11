

const Contact=()=>{
    return(
        <div className="contact">
            <h1>Contact US</h1>
            <form>
                <input placeholder="name" type="text" className="border border-black p-2 m-2"></input>
                <input placeholder="message" type="text" className="border border-black p-2 m-2"></input>
                <button type="submit" className="border border-black p-2 m-2 bg-gray-100 rounded-md">Submit</button>
            </form>
            
        </div>
    )
}
 export default Contact;