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

function getByRegion(){
    fetch(`https://restcountries.com/v3.1/region/${option}`).then(res => res.json()).then(data => region = data).catch(err => console.log(err))}

function lookForTheCountry (){
    fetch(`https://restcountries.com/v3.1/name/${result}`).then(res => res.json()).then(data => globalData = data).catch(err => console.log(err))
    }
function allCountries () {
    fetch('https://restcountries.com/v3.1/all').then(res=>res.json()).then(data=>all = data).catch(err => console.log(err))}

function showByRegion() {
    container.textContent = ""
    region.forEach((el) => {drawingDiv(el.name.common,el.population,el.region,el.capital,el.flags.png)})
}

function createTemplate () {
    container.innerHTML = " "
    drawingDiv(globalData[0].name.common,globalData[0].population,globalData[0].region,globalData[0].capital,globalData[0].flags.png)        
}

function drawingDiv(name,population,region,capital,flag){
    country = `<div id="flag"></div>
    <div id="countryData">
    <div id="countryName"><span id="name">${name}</span></div>
    <div id="population">Population: ${population}</div>
    <div id="region">Region: ${region}</div>
    <div id="capital">Capital: ${capital}</div>
    </div>`
    let newEl = document.createElement('div')    
    newEl.innerHTML=country;
    newEl.classList.add('country')
    newEl.style.backgroundImage = `url(${flag})`
    newEl.style.backgroundsize = 'cover';
    newEl.style.backgroundRepeat = 'no-repeat';
    newEl.style.border =  '1px solid black';
    container.appendChild(newEl)
}

function showAllCountries () {
    container.textContent = ""
    all.forEach(el => drawingDiv(el.name.common,el.population,el.region,el.capital,el.flags.png))}

select.addEventListener('change', () => getByRegion())
regionBtn.addEventListener('click', () => showByRegion())
showAllCountriesBtn.addEventListener('click', () => showAllCountries())
inputValue.addEventListener('input', search)
searchBtn.addEventListener('click', createTemplate)