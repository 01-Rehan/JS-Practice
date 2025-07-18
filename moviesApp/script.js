import axios  from 'https://cdn.skypack.dev/axios';
const api = "c083e2f95a6317ae05910d55cec56315";
let searchWord = document.querySelector(".search");
let languageinput = document.querySelector(".lang");

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

    if(MovieArray.length === 0){
        container.innerText = "Couldn't find any results";
        return;
    }

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

let filterdArray;
let currentSearchTerm = '';
let currentLangTerm = '';

function applyFilters(){
    filterdArray = allmovies.filter(movie =>{
        let matchSearch = !currentSearchTerm ||
                        movie.original_title.toLowerCase().includes(currentSearchTerm);
        let matchLang = !currentLangTerm || 
                        movie.original_language.toLowerCase().includes(currentLangTerm);

        return matchLang && matchSearch;
    });
    createCard(filterdArray);

}
function SearchHandler(event,element){
    currentSearchTerm = element.value.toLowerCase().trim();
    applyFilters();
}
function langHandler(event,element){
    currentLangTerm = event.target.value.toLowerCase().trim();
    applyFilters();
}

const debouncedSearch = debounce(function (event) {
    SearchHandler(event, searchWord);
}, 300); 

searchWord.addEventListener("keyup", debouncedSearch);

languageinput.addEventListener("change", function (event){
  langHandler(event,this) ; 
} );


function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

initializeApp();
