import axios  from 'https://cdn.skypack.dev/axios';
const api = "c083e2f95a6317ae05910d55cec56315";
async function fetchMovieData () {
    try{
        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api}`);
        return data;
    }catch(err){
        console.log(err);
    }
}

const promise = fetchMovieData();
console.log(promise);
    function create(element){
         return document.createElement(element)
    }

const container = document.querySelector(".container");

promise.then(data =>{
    data.results.forEach(movie =>{

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
            language.innerText = movie.original_language;
            infoCon.appendChild(language);

            let date = create("p");
            date.innerText = movie.release_date;
            infoCon.appendChild(date);

            let rate = create("p");
            rate.classList.add("description");
            rate.innerText = movie.vote_average;
            infoCon.appendChild(rate);

            card.appendChild(infoCon);        
        container.appendChild(card);
    })
})    
const cards = document.querySelector(".card");
document.addEventListener('onmouse',function hover(){
    cards.setStyle.scale = 1.05;
})