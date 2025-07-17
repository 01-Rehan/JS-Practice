import axios  from 'https://cdn.skypack.dev/axios';

async function fetchMovieData () {
    try{
        let { data } = await axios.get('https://imdb.iamidiotareyoutoo.com/search?tt=tt2250912');
        return data;
    }catch(err){
        console.log(err);
    }
}

const promise = fetchMovieData();
console.log(promise);