console.log('test');

let selectpay = document.querySelector('');
let selectBreed1 = document.querySelector('pays');
let selectBreed2 = document.querySelector('');

selectpay.addEventListener('click',display());

function display() {

    xhr.send();
    
};

function url(url){
    let url;
    if (selectBreed.value === '') {
        url = 'https://dog.ceo/api/breeds/image/random';
    } else {
        url = 'https://dog.ceo/api/breed/' + selectBreed.value + '/images/random';
    };
    return url;
}


function sendRequest(argument) {
    return new Promise((resolve) => {

        let xhr = new XMLHttpRequest();
        let url = url(argument);
    xhr.open('GET', url);
    
    xhr.onload = function () {
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            
        };
    };
        // Le code à appliquer
        resolve(response);
    });
};


// function setBreeds() {

    // let response = sendRequest('https://catfact.ninja/breeds?limit=1');
    sendRequest('https://catfact.ninja/breeds?limit=1').then(response => {

    
            let breeds = Object.keys(response.country);
            // Autre option : For in -> parcourir un objet
            breeds.forEach(breed => {
                let option = document.createElement('option');
                option.textContent = capitalizeFirstLetter(breed);
                option.value = breed;
                selectBreed1.appendChild(option);
            });
    
    
    xhr.send();
})
// }


    // Vous utilisez l'information retournée comme vous le souhaitez    
//    console.log(response);



