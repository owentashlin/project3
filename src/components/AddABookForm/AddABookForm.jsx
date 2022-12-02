function AddBook() {
    
    const handleSubmit = async (book) => {
        try {
            console.log(book)
        } catch {
            console.log('error, could not save item')
        }
    }
    
    return ( 
        <>
        <h3>Add A Book to Your Library</h3>
        <form autoComplete='off' onSubmit={handleSubmit}>
            <label>Title: </label>
            <input type='text' name='title' required/>
            &nbsp;
            <label>Author: </label>
            <input type='text' name='author'/>
            &nbsp;
            <label>Genre: </label>
            <select name='genre' required>
                <option value=''></option>
                <option value='romance'>Romance</option>
                <option value='history'>History</option>
                <option value='fantasy'>Fantasy</option>
                <option value='sci-fi'>Sci-Fi</option>
                <option value='urban-fantasy'>Urban Fantasy</option>
                <option value='horror'>Horror</option>
                <option value='mystery'>Mystery</option>
                <option value='non-fiction'>Non-Fiction</option>
            </select>
            &nbsp;
            <label>Status: </label>
            <select name='status'>
                <option value='to-read'>On the Pile</option>
                <option value='finished'>Finished</option>
            </select>
            &nbsp;
            <button type='submit' value='add-book'>Add to Library</button>
        </form>
        </>    
     )
}

export default AddBook;