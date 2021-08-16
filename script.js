const jokeEl = document.getElementById('joke'),
  jokeBtn = document.getElementById('jokeBtn');

generateJoke();

const generateJoke = () => {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };
  fetch('https://icanhazdadjoke.com', config)
    .then(res => res.json())
    .then((data) => console.log(data));
}