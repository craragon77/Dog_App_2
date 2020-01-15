
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

function listOptions(responseJson){
    const breeds = Object.keys(responseJson.message)
    const subBreeds = Object.values(responseJson.message)
    for (let i = 0; i < subBreeds.length; i++){
        if (subBreeds[i].length > 0 ){
            return subBreeds[i]
        }
    }
    for (let i = 0; i < breeds.length; i++){
        $(".breed_list").append(
            `<option>${subBreeds}${breeds}</option>`
        )
    }
}

function genList(){
    $(".make_breed").click(function(){
        alert("hello, Dave")
    })
}

function valueArray(responseJson) {
    console.log(responseJson.message)
}

fetchBreedList()
genList()
