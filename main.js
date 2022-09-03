document.addEventListener('DOMContentLoaded', allCountries)
let searchBtn = document.querySelector('#searchBtn')
let inputValue = document.querySelector('#countryInput')
let countryTicket = document.querySelector('.country');
let container = document.querySelector('#container')
let globalData = null;
let result = null;
let country = null;

function search (e) {
    result = e.target.value
    // console.log(result)
    lookForTheCountry()
}

function createTemplate () {

    country = `<div id="flag"></div>
                <div id="countryName">${globalData[0].name.common}</div>
                <div id="population">${globalData[0].population}</div>
                <div id="region">${globalData[0].region}</div>
                <div id="capital">${globalData[0].capital}</div>`
      console.log(globalData[0].name.common)          
}


inputValue.addEventListener('input', search)

function createElement () {
    let newEl = document.createElement('div')
    
    newEl.innerHTML=country;
    newEl.classList.add()
    newEl.style.backgroundImage = `url(${globalData[0].flags.png})`
    newEl.style.backgroundsize = 'cover';
    newEl.style.backgroundRepeat = 'no-repeat';
    // newEl.style.maxHeight = '200px';
    // newEl.style.backgroundColor = 'blue'
    countryTicket.appendChild(newEl)
    
}


function lookForTheCountry (){
fetch(`https://restcountries.com/v3.1/name/${result}`)
    .then(res => res.json())
    // .then(data => countryName = data[0].name.common)
    // .then(data => console.log(data))
    .then(data => globalData = data)
    .catch(err => console.log(err))
}


let all = null
function allCountries () {
    fetch('https://restcountries.com/v3.1/all').then(res=>res.json()).then(data=>all = data)
}



function showAllCountries () {
all.forEach(el => {
    let fl = el.flags.png
    let newestEl = document.createElement('div');
    el = `<div id="flag"></div>
    <div id="countryName">${el.name.common}</div>
    <div id="population">${el.population}</div>
    <div id="region">${el.region}</div>
    <div id="capital">${el.capital}</div>`
    newestEl.innerHTML = el;
    newestEl.style.backgroundImage = `url(${fl})`
    newestEl.style.backgroundsize = 'cover';
    newestEl.style.backgroundRepeat = 'no-repeat';
    newestEl.style.border =  '1px solid black';
    newestEl.classList.add('country')
    container.appendChild(newestEl)
})}





searchBtn.addEventListener('click', createTemplate)
searchBtn.addEventListener('click', createElement)