
function fetchBreedList() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(responseJson => {
        console.warn(responseJson);
        listOptions(responseJson);
        valueArray(responseJson);
    })
    .catch(warning => console.warn(warning) || alert("Ruh-Roh! Something went wrong! Please try again later"))
}
function fetchDogPicture(dogArray) {
    if (dogArray.length > 1){
        console.log(dogArray)
    fetch('https://dog.ceo/api/breed/' + dogArray[1] + '/' + dogArray[0] +'/images/random')
    .then(response => response.json())
    .then(doggyResponseJson =>{
        console.warn(doggyResponseJson);
        genPic(doggyResponseJson);
    })
    .catch(error => console.warn(error)|| alert("Zoinks! We can't find any dogs of that breed! Please come back later"))
    } else{
        fetch('https://dog.ceo/api/breed/' + dogArray + '/images/random')
        .then(response => response.json())
        .then(doggyResponseJson =>{
            console.warn(doggyResponseJson);
            genPic(doggyResponseJson);
        })
        .catch(error => console.warn(error)|| alert("Zoinks! We can't find any dogs of that breed! Please come back later"))
    }
}


function listOptions(responseJson){
    const breeds = Object.keys(responseJson.message)
    const subBreeds = Object.values(responseJson.message)
    for (let i = 0; i < breeds.length; i++){
        if (subBreeds[i].length >= 1 ){
            for (let x = 0; x < subBreeds[i].length; x++){
                $(".breed_list").append(
                `<option>${subBreeds[i][x]} ${breeds[i]}</option>`
                )
            }
        }
        else {
            $(".breed_list").append(
                `<option>${breeds[i]}</options`
            )
        }
    }
    submitBreedButton()
}

function submitBreedButton() {
    $(".make_breed").on("click submit", (function(event){
        event.preventDefault();
        let stringBreed = $('select option:selected').text()
        let dogArray = stringBreed.split(" ")
        fetchDogPicture(dogArray)
    })
    )
}



function genPic(doggyResponseJson){
    $(".dog_pic").replaceWith(
        `<section class="make_breed">
            <img class="dog_pic" src="${doggyResponseJson.message}" alt="doggy">
        </section>`
    )
}

function valueArray(responseJson) {
    console.log(responseJson.message)
}

fetchBreedList()


