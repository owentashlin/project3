function getNum(min, max) {
    return Math.round(Math.random()*(min-max)+min)
}

function PictPrompt() {
    let picNum = getNum(100, 400)
    return ( 
        <div className="movie-card">
            <h4>Random Image to Write a Story About: </h4>
            <img src={`https://picsum.photos/300/400/?${picNum}`}alt='Random'></img>
        </div>
     )
}

export default PictPrompt


