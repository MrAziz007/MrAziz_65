import { createGrid } from "./components/cletci.js";

function reload(arr, place, Component) {
    let box = document.querySelector(`#${place}`);
    box.innerHTML = '';
    for (let item of arr) {
        let elem = Component(item);
        box.append(elem);
    };
}

fetch('http://localhost:3001/cars')
    .then(res => res.json())
    .then(data => {
        let carsOne = data.filter(car => car.year >= 2014);
        let carsTwo = data.filter(car => car.year >= 2004 && car.year < 2014);
        let CarsThree = data.filter(car => car.year < 2004);

        reload(carsOne.slice(0, 4), 'one', createGrid);
        reload(carsTwo.slice(0, 4), 'two', createGrid);
        reload(CarsThree.slice(0, 4), 'three', createGrid);
    })
    .catch(error => console.log(error));