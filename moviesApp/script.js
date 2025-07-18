import axios  from 'https://cdn.skypack.dev/axios';
const api = "c083e2f95a6317ae05910d55cec56315";
const searchWord = document.querySelector(".search");
let allmovies;

async function fetchMovieData () {
    try{
        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api}`);
        return data;
    }catch(err){
        console.log(err);
    }
}

async function initializeApp() {
    try{
        const movieData = await fetchMovieData();
        if(movieData && movieData.results){
            allmovies = movieData.results;
            createCard(allmovies);
        }

    }catch(err){
        console.log("initializing error");
    }
}

function create(element){
    return document.createElement(element)
}

const container = document.querySelector(".container");


function createCard(MovieArray){
    container.innerText = '';

    MovieArray.forEach(movie =>{

            let card = create("div");
            card.classList.add("card");
            
            let imgCon = create("div");
            imgCon.classList.add("movie-img");
            let img = create("img");
            img.setAttribute("src", `https://image.tmdb.org/t/p/original/${movie.poster_path}`);
            imgCon.appendChild(img);
            card.appendChild(imgCon);
    
            let infoCon = create("div");
            infoCon.classList.add("info");
    
                let heading = create("p");
                heading.classList.add("heading");
                heading.innerText = movie.original_title;
                infoCon.appendChild(heading);
            
                let language = create("p");
                language.innerText = `Language : ${movie.original_language}`;
                infoCon.appendChild(language);
    
                let date = create("p");
                date.innerText = `Release Date : ${movie.release_date}`;
                infoCon.appendChild(date);
    
                let rate = create("p");
                rate.classList.add("description");
                rate.innerText = `Rating : ${movie.vote_average}`;
                infoCon.appendChild(rate);
    
                card.appendChild(infoCon);        
            container.appendChild(card);
        })    
}

function SearchHandler(event,element){
    let searchTerm = element.value.toLowerCase().trim();

    let filterdArray;
    if(searchTerm.length > 0)
        filterdArray = allmovies.filter(movie =>  movie.original_title.toLowerCase().includes(searchTerm)) ;
    else
        filterdArray = allmovies;
    
    createCard(filterdArray);
}

searchWord.addEventListener("keyup", function (event){
  SearchHandler(event,this) ; 
} );
initializeApp();