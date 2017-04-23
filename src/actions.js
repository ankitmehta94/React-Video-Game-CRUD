/**
 * Created by ankit on 4/9/17.
 */
export const SET_GAMES = 'SET_GAMES';
export const ADD_GAME = 'ADD_GAME';
export const GAME_FETCHED = 'GAME_FETCHED';
export const GAME_UPDATED = 'GAME_UPDATED';
export const GAME_DELETED = 'GAME_DELETED';
 export function saveGame(data) {
     return dispatch =>{
         return fetch('/api/games',{
             method:'POST',
             body:JSON.stringify(data),
             headers:{
                 "Content-type":"application/json"
             }
         }).then(handleResponse).then(data => {
             dispatch(addGame(data.game))
         })
     }
 }
 export function updateGame(data) {
     return dispatch =>{
         return fetch(`/api/games/${data._id}`,{
             method:'PUT',
             body:JSON.stringify(data),
             headers:{
                 "Content-type":"application/json"
             }
         }).then(handleResponse).then(data => {
             dispatch(gameUpdated(data.game))
         })
     }
 } export function deleteGame(id) {
     return dispatch =>{
         return fetch(`/api/games/${id}`,{
             method:'DELETE',
             headers:{
                 "Content-type":"application/json"
             }
         }).then(handleResponse).then(data => {
             dispatch(gameDeleted(id))
         })
     }
 }
 export function addGame(game) {
     return {
         type:ADD_GAME,
         game
     }
 }
 export function gameDeleted(gameId) {
     return {
         type:GAME_DELETED,
         gameId
     }
 }
 export function gameUpdated(game) {
     return {
         type:GAME_UPDATED,
         game
     }
 }
 function handleResponse(response) {
     if(response.ok){
         return response.json();
     }else{
         let error = Error(response.statusText)
         error.response = response;
         throw error
     }
 }
export function setGames(games) {
    return {
        type: SET_GAMES,
        games

    }
}
export function gamesFetched(game) {
    return {
        type:GAME_FETCHED,
        game
    }
}
export function fetchGames() {
console.log('BITCH');
    return dispatch =>{
        fetch('/api/games').then(res => res.json()).then(data => dispatch(setGames(data.games)));
    }
}export function fetchGame(id) {
    return dispatch =>{
        fetch(`/api/games/${id}`).then(res => res.json()).then(data => dispatch(gamesFetched(data.game)));
    }
}