export function createGrid(obj) {
    let elems = document.createElement('div');
    let Title = document.createElement('h3');
    let Descr = document.createElement('p');
    let date = document.createElement('p');
    let btnClass = document.createElement('button');

    Title.textContent = obj.name
    Descr.textContent = 'Color: ' + obj.color
    date.textContent = 'Year: ' + obj.year;
    btnClass.textContent = 'Подробнее';
    
    elems.classList.add('elems');
    Title.classList.add('title');
    btnClass.classList.add('btnClass');

    elems.append(Title, Descr, date, btnClass);

    return elems
}