function searchMovie() {
    const movieInput = document.getElementById("movieInput");
    if (movieInput.value === "")
        alert("Field is empty!")
    else {
        fetch(`https://www.omdbapi.com/?apikey=83f11fe&t=%27${movieInput.value}%27`)
            .then(data => data.json())
            .then(movieData => {
                if (movieData.Response === true) {
                    document.getElementById("title").innerText = movieData.Title;
                    document.getElementById("genres").innerText = "Genres: ";
                    displayGenres(movieData.Genre);
                    document.getElementById("plot").innerText = "Plot: ";
                    document.getElementById("description").innerText = movieData.Plot;
                }
                else
                    alert("No movie found!")
            })
        movieInput.value = ""
    }
}

function displayGenres(data) {
    const genreList = document.getElementById("genreList");
    genreList.innerText = ""
    let arrayOfGenres = data.split(", ");
    arrayOfGenres.forEach(el => {
        const li = document.createElement("li");
        li.innerText = el;
        let img = document.createElement("img");
        img.src = getImageByGenre(el);
        genreList.appendChild(li);
        img.classList.add("image");
        li.appendChild(img);
    })
}

function getImageByGenre(key) {
    let map = {
        "Comedy": "./images/comedy.png",
        "Drama": "./images/drama.png",
        "Romance": "./images/love.png",
        "Action": "./images/action.png"
    }
    let value = map[key];
    return value ? value : "./images/other.png";
}
