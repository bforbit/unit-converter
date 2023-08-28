let myNumber = ""
const typeNum = document.getElementById("input-number")
const btnConvert = document.getElementById("btn-convert")
let lengthLine = document.getElementById("length-line")
let volumeLine = document.getElementById("volume-line")
let massLine = document.getElementById("mass-line")

btnConvert.addEventListener("click", function() {
    myNumber = typeNum.value
    
    let meterFeet = myNumber * 3.281
    let feetMeter = myNumber / 3.281
    lengthLine.textContent = `${myNumber} meters = ${meterFeet.toFixed(3)} feet | ${myNumber} feet = ${feetMeter.toFixed(3)} meters`
    
    let literGallon = myNumber * 0.264
    let gallonLiter = myNumber / 0.264
    volumeLine.textContent = `${myNumber} liters = ${literGallon.toFixed(3)} gallons | ${myNumber} gallons = ${gallonLiter.toFixed(3)} liters`
    
    let kiloPound = myNumber * 2.204
    let poundKilo = myNumber / 2.204
    massLine.textContent = `${myNumber} kilos = ${kiloPound.toFixed(3)} pounds | ${myNumber} pounds = ${poundKilo.toFixed(3)} kilos`
})