import { v4 as uuidv4 } from 'uuid';

const addTrainsFrom = document.querySelector('#addTrains');

const train_from = document.querySelector('#from');
const train_to = document.querySelector('#to');
const train_date = document.querySelector('#date');
const train_isPremium = document.querySelector('#isPremium');

const handleSubmit = (event) => {
    event.preventDefault();

    const newConnection = {
      "id": uuidv4(),
      "from": train_from.value,
      "to": train_to.value,
      "date": train_date.value,
      "isPremium": train_isPremium.checked
    }

    fetch('http://localhost:5000/trains', {
    method: 'POST',
    headers: {
        'Content-type': "application/json"
        },
    body: JSON.stringify(newConnection)
    })
    .then(() =>  {
        window.location.href = 'index.html';
    });
}
addTrainsFrom.addEventListener('submit', handleSubmit);

// Zeby za pomoca JS przejsc do strony index.html po wcisnieciu guzika "Dodaj", potrzebujemy uzyc metody
// window.location.href = 'index.html';