// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function() {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function() {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(x) {
    return function(fare) {
       return x * fare
    }
}

const doubler = createFareMultiplier(2);

function fareDoubler(x) {
    return doubler(x) 
}

const tripler = createFareMultiplier(3);

function fareTripler(x) {
    return tripler(x)
}

function selectDifferentDrivers(drivers, funct) {
    return funct(drivers);
}