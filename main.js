

const generateAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then((response) => {
        if(response.ok){
            return response.json()
        }
        else{
            return Promise.reject('SERVER ERROR')
        }
    })
    .then(data => document.getElementById('advice').textContent = data.slip.advice)
      
}
const die_button = document.getElementById('die');
die_button.addEventListener('click', generateAdvice);