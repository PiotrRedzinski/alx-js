//1. Stwórz aplikację chat
// stwórz aplikację chat, która zawiera okna chatu i formularz wpisywania wiadomości

// formularz powinien mieć 2 inputy, pole autor i message

// okno czatu powinno wyświetlać wysłane wiadomości wraz z jego autorem

// wiadomości zapisz jako tablicę objektów i umieść je w lokal storage

// po wejściu na stronę przeczytaj wiadmości z localStorage

// * nad oknem chatu zrób header z searchem  (input + przycisk search), po wniśnieciu przycisku filtruj wiadomości
// tylko po message

// ** ostyluj zadanie zeby przypominało realny chat

// odczytywanie i zapisywanie do localStorarage stwórz jako osobne funkcje w osobnych plikach i zaimportuj
import { save_historia } from "./save_to_local_storage";
import read_historia from "./read_from_local_storage";

const addMessage = document.querySelector('#newMessage');
const name = document.querySelector('#imie');
const message = document.querySelector('#wiadomosc');
const chat = document.querySelector('#chat');
const chat_history = document.querySelector('#historia');
const search = document.querySelector('#search');

const handleSearch = (event) => {
  if (historia_czatu) {
    const fraza = document.querySelector('#fraza');
    const wynik_szukania = historia_czatu.filter(function (value) { return value.message.toLowerCase().indexOf(fraza.value) > -1;});
    chat_history.innerHTML = ''
    wynik_szukania.map((a, b) => chat_history.innerHTML += `<p>${a.name}-${a.message}`);
  }
}
search.addEventListener("click", handleSearch);

let klasa = "bubble bubble-bottom-left";
let strona = "left";
let historia_czatu = read_historia();
if (historia_czatu) {
  console.log(historia_czatu);
  historia_czatu.map((a, b) => chat_history.innerHTML += `<p>${a.name}-${a.message}`);
}

const handleSubmit = (event) => {
  event.preventDefault(); // Blokowanie domyslnego zachowania przegladarki
  const imie = name.value;
  const wiadomosc = "  " + message.value;

  historia_czatu?historia_czatu.push({"name":imie,"message":wiadomosc}):historia_czatu=[{"name":imie,"message":wiadomosc}];
  //localStorage.setItem('historia_czatu',JSON.stringify(historia_czatu));
  save_historia(historia_czatu);
  console.log(historia_czatu);

  //if (klasa == "bubble bubble-bottom-left")
  //  {klasa = "bubble bubble-bottom-right"; }
  //else
   // {klasa = "bubble bubble-bottom-left"; }
  strona = (strona == "left")?"right":"left"
  console.log(strona)

  chat.innerHTML += `
    <div align="${strona}"><label class="bar">${imie}</label><div class="bubble">${wiadomosc}</div></div>
  `
  //todos.push({ title: inputValue })
  //localStorage.setItem('todos', JSON.stringify(todos));

  name.value = '';
  message.value = '';
}

addMessage.addEventListener('submit', handleSubmit);
