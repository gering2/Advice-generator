const generateAdvice = () => {
    //get advice and advice # and set appropriate element text values
    fetch('https://api.adviceslip.com/advice')
    .then((response) => {
        if(response.ok){
            return response.json()
        }
        else{
            return Promise.reject('SERVER ERROR')
        }
    })
    .then((data) => {
        document.getElementById('outer-advice').textContent = `"${data.slip.advice}"`;
        document.getElementById('advice-number').textContent = data.slip.id;
    })
    .catch((error) => console.log(error))
      
}
//generate advice when the die is clicked
const die_button = document.querySelector('.die-container');
die_button.addEventListener('click', generateAdvice);   