function fetchRequest(breed){
    fetch('https://dog.ceo/api/breed/' + breed + '/images/random')
    .then(results => results.json())
    .then(doggyResponseJson => {
        if (doggyResponseJson.status == 'success'){
        genPic(doggyResponseJson)
        } else {
            throw doggyResponseJson 
        }
    })
    .catch(error => alert("Ruh-Roh! We can't find that breed! Please try a new one!"));
}

function submitBreedButton() {
    $(".make_breed").click(function(event){
        event.preventDefault();
        userInput()
    })
}

function userInput(){
    let breed = $(".breed_input").val()
    console.log(breed)
    fetchRequest(breed)
}

function genPic(doggyResponseJson){
    $(".dog_pic").replaceWith(
        `<section class="make_breed">
            <img class="dog_pic" src="${doggyResponseJson.message}">
        </section>`
    )
}

function test(doggyResponseJson){
    console.log(doggyResponseJson)
}
submitBreedButton()

