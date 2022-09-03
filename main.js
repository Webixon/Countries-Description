let searchBtn = document.querySelector('#searchBtn')
let inputValue = document.querySelector('#countryInput')
let result = null;


function search (e) {
    result = e.target.value
    // console.log(result)
    lookForTheCountry()
}
inputValue.addEventListener('input', search)






function lookForTheCountry (){
fetch(`https://restcountries.com/v3.1/name/${result}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}