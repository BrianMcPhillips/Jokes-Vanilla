const jokeEl = document.getElementById('joke'),
  jokeBtn = document.getElementById('jokeBtn');

const generateJoke = async() => {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };
  const data = await fetch('https://icanhazdadjoke.com', config)
   const res = await data.json();
  jokeEl.innerHTML = res.joke;
}

generateJoke();

jokeBtn.addEventListener('click', () => {
  generateJoke();
})
