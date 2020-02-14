const ui = new UI();

const div = document.querySelector('.information__content');

let search = document.getElementById('search');

search.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = document.getElementById('city');

    ui.locationMap(input.value);
});

