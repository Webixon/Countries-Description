document.addEventListener('DOMContentLoaded', allCountries)
let searchBtn = document.querySelector('#searchBtn')
let showAllCountriesBtn = document.querySelector('#allBtn');
let regionBtn = document.querySelector('#regionBtn')
let inputValue = document.querySelector('#countryInput')
let container = document.querySelector('#container')
let globalData = null;
let result = null;
let country = null;
let select = null;
let option = null;
let all = null
let region = null;
function search (e) {
    result = e.target.value
    lookForTheCountry()
    
}
function update() {
    select = document.getElementById('regions');
    option = select.options[select.selectedIndex].value;
}

update();

select.addEventListener('change', () => getByRegion())
regionBtn.addEventListener('click', () => showByRegion())

function getByRegion(){
    fetch(`https://restcountries.com/v3.1/region/${option}`)
        .then(res => res.json())
        .then(data => region = data)
    
}

function showByRegion() {
    container.textContent = ""
    region.forEach((el) => {
    let fl = el.flags.png
    let newestEl = document.createElement('div');
    el = `<div id="flag"></div>
    <div id="countryData">
    <div id="countryName"><span id="name">${el.name.common}</span></div>
    <div id="population">Population: ${el.population}</div>
    <div id="region">Region: ${el.region}</div>
    <div id="capital">Capital: ${el.capital}</div>
    </div>`
    newestEl.innerHTML = el;
    newestEl.style.backgroundImage = `url(${fl})`
    newestEl.style.backgroundsize = 'cover';
    newestEl.style.backgroundRepeat = 'no-repeat';
    newestEl.style.border =  '1px solid black';
    newestEl.classList.add('country')
    container.appendChild(newestEl)
})
}

function createTemplate () {

    country = `<div id="flag"></div>
                <div id="countryData">
                <div id="countryName"><span id="name">${globalData[0].name.common}</span></div>
                <div id="population">Population: ${globalData[0].population}</div>
                <div id="region">Region: ${globalData[0].region}</div>
                <div id="capital">Capital: ${globalData[0].capital}</div>
                </div>`
      console.log(globalData[0].name.common)          
}


inputValue.addEventListener('input', search)

function createElement () {
    container.textContent = ""
    let newEl = document.createElement('div')
    
    newEl.innerHTML=country;
    newEl.classList.add('country')
    newEl.style.backgroundImage = `url(${globalData[0].flags.png})`
    newEl.style.backgroundsize = 'cover';
    newEl.style.backgroundRepeat = 'no-repeat';
    newEl.style.border =  '1px solid black';
    container.appendChild(newEl)
    
}


function lookForTheCountry (){
fetch(`https://restcountries.com/v3.1/name/${result}`)
    .then(res => res.json())
    .then(data => globalData = data)
    .catch(err => console.log(err))
}



function allCountries () {
    fetch('https://restcountries.com/v3.1/all').then(res=>res.json()).then(data=>all = data)
}



function showAllCountries () {
    container.textContent = ""
all.forEach(el => {
    let fl = el.flags.png
    let newestEl = document.createElement('div');
    el = `<div id="flag"></div>
    <div id="countryData">
    <div id="countryName"><span id="name">${el.name.common}</span></div>
    <div id="population">Population: ${el.population}</div>
    <div id="region">Region: ${el.region}</div>
    <div id="capital">Capital: ${el.capital}</div>
    </div>`
    newestEl.innerHTML = el;
    newestEl.style.backgroundImage = `url(${fl})`
    newestEl.style.backgroundsize = 'cover';
    newestEl.style.backgroundRepeat = 'no-repeat';
    newestEl.style.border =  '1px solid black';
    newestEl.classList.add('country')
    container.appendChild(newestEl)
})}

showAllCountriesBtn.addEventListener('click', () => showAllCountries())



searchBtn.addEventListener('click', createTemplate)
searchBtn.addEventListener('click', createElement)




// function drawingDiv(name,population,region,capital){
//     el = `<div id="flag"></div>
//     <div id="countryData">
//     <div id="countryName"><span id="name">${name}</span></div>
//     <div id="population">Population: ${population}</div>
//     <div id="region">Region: ${region}</div>
//     <div id="capital">Capital: ${capital}</div>
//     </div>`
// }