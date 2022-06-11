import axios from "axios";

const GET_POKEMONS = "GET_POKEMONS";
const GET_TYPES = "GET_TYPES";
const GET_DETAIL = "GET_DETAIL";
const FILTER_TYPE = "FILTER_TYPE";
const FILTER_NAME = "FILTER_NAME";
const FILTER_ORIGIN = "FILTER_ORIGIN";
const FILTER_ATTACK = "FILTER_ATTACK";
const GET_POKENAME = "GET_POKENAME";
const CLEAN_POKEMONS = "CLEAN_POKEMONS";
const CLEAN_DETAIL = "CLEAN_DETAIL";
const LOADER_FALSE = "LOADER_FALSE";
 
export function getPokemons(){
    return (dispatch)=>{
    return axios.get("https://pokemonappxdrimer.herokuapp.com/pokemons")
    .then(r=>dispatch({type: GET_POKEMONS, payload: r.data}))
}
}

export function getPokemonName(name){
    return async function(dispatch){
        try{
            let poke = await axios.get(`https://pokemonappxdrimer.herokuapp.com/pokemons/?name=${name}`)
            return dispatch({type: GET_POKENAME, payload: poke.data})
        }catch(err){
            dispatch({type: LOADER_FALSE, payload: false})
        }
    }
}

export function getPokemonById(id){
    return async function(dispatch){
        try{
            let poke =  await axios.get(`https://pokemonappxdrimer.herokuapp.com/pokemons/${id}`)
            return dispatch({type: GET_DETAIL, payload: poke.data})
        }catch(err){
            console.log(err.response.data)
        }
    }
}

export function getTypes(){
    return (dispatch)=>{
    return axios.get("https://pokemonappxdrimer.herokuapp.com/types")
    .then(r=>dispatch({type: GET_TYPES, payload: r.data}))
}
}

export function filterType(type){
    return{type: FILTER_TYPE, payload: type}
}

export function filterOrigin(origin){
    return{type: FILTER_ORIGIN, payload: origin}
}

export function filterName(order){
    return{type: FILTER_NAME, payload: order}
}

export function filterAttack(order){
    return{type: FILTER_ATTACK, payload: order}
}

export function cleanPokemons(){
    return {type: CLEAN_POKEMONS, payload: {}}
}

export function cleanDetail(){
    return {type: CLEAN_DETAIL, payload: {}}
}

export function postPokemon(data){
    return async function(dispatch){
        const post = await axios.post("https://pokemonappxdrimer.herokuapp.com/pokemons",data)
        return post;
    }
}