function App() {

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)
    }
    return (
        <div>
            <form className='formStyle' onSubmit={handleSubmit} encType='multipart/form-data'>
                    <label>File:</label>
                    <input type='file' id='file' name='file' required/>
                    <label>Password: </label>
                    <input type='password' id='password' name='password'/>
                    <button className='btn' type='submit'>Share</button>
            </form>
        </div>
    );
}

export default App;
