// Get elements from html
const datum_d = document.getElementById("datum");
const tijd_d = document.getElementById("tijd");
const les_d = document.getElementById("les");
const vantot_d = document.getElementById("vantot");

const l1_d = document.getElementById("l1");
const l2_d = document.getElementById("l2");
const l3_d = document.getElementById("l3");
const l4_d = document.getElementById("l4");
const l5_d = document.getElementById("l5");
const l6_d = document.getElementById("l6");
const l7_d = document.getElementById("l7");
const l8_d = document.getElementById("l8");

// Fancy calculations and fetching ooh scary scary
let currentDate = new Date();

Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}

Date.prototype.timeNow = function () {
    return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

let dateTime = "Last Sync: " + currentDate.today() + " @ " + currentDate.timeNow();
console.log(dateTime)

// Update contents of html
document.getElementById("datum").textContent = "Datum: " + currentDate.today();
document.getElementById("tijd").textContent = "Het is nu: " + currentDate.timeNow();
// les_d.textContent = "Les: " + les_f;
// vantot_d.textContent = "Van tot: " + vantot_f;
