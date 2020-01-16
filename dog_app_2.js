
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
function fetchDogPicture(breeds, subBreeds) {
    if (subBreeds > 0){
    fetch('https://dog.ceo/api/breed/' + breeds + '/' + subBreeds +'/images/random')
    .then(response => response.json())
    .then(doggyResponseJson =>{
        console.warn(doggyResponseJson);
        genPic(doggyResponseJson);
    })
    .catch(error => console.warn(error)|| alert("Zoinks! We can't find any dogs of that breed! Please come back later"))
    } else{
        fetch('https://dog.ceo/api/breed/' + breeds + '/images/random')
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
}

function genPic(doggyResponseJson){
    $(".make_breed").click(function(event){
        event.preventDefault();
        $(".dog_pic").replaceWith(
            `<section class="make_breed">
                <img class="dog_pic" src="${doggyResponseJson.message}" alt="doggy">
            </section>`
            )
        fetchDogPicture(breeds, subBreeds)
    })
}

function valueArray(responseJson) {
    console.log(responseJson.message)
}

fetchBreedList()
genPic()
