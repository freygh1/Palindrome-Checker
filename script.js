const textInput = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const result = document.querySelector('#result')

const modalBox = document.getElementById('description-box')
const modalContent = document.getElementById('description-content')
const showDescriptionBtn = document.getElementById('show_description')
const closeModalBtn = document.getElementById('close')

const isAPalindrome = "is a palindrome"
const isNotAPalindrome = "is not a palindrome"

const collections = [
  "Put some words, man!",
  "Do you want to check for something or not?",
  "Just do it, bro",
  "I think you have a lot of free time, dude.",
  "Play some music for me, please. I'm boring.",
  "Don't waste my time, Amigo.",
  "Do you wanna test me, right?",
  "Do you really have nothing better to do?",
  "Pack it in, friend.",
  "¿Te lo digo en Español entonces?"
]

checkBtn.addEventListener('click', () => {
  if (textInput.value === '') {
    const randomPhrase = Math.floor(Math.random() * collections.length)
    result.textContent = collections[randomPhrase]
  } else {
    const myInput = textInput.value.replace(/[^A-Za-z0-9]/gi, '').toLowerCase()

    if (myInput === [...myInput].reverse().join('')) {
      result.textContent = `${textInput.value} ${isAPalindrome}`
    } else {
      result.textContent = `${textInput.value} ${isNotAPalindrome}`
    }

    textInput.value = '';
    textInput.focus()
  }

})

showDescriptionBtn.addEventListener('click', () => {
  modalBox.classList.remove('hidden')
  modalBox.classList.add('flex')
})

closeModalBtn.addEventListener('click', () => {
  modalBox.classList.remove('flex')
  modalBox.classList.add('hidden')
})