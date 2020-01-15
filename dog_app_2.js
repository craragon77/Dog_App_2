
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

/*function genPic(){
    $(".make_breed").click(function(event){
        event.preventDefault();
        fetchDogPicture()
        $("")
    })
} */

function valueArray(responseJson) {
    console.log(responseJson.message)
}

fetchBreedList()
//fetchDogPicture()
//genPic()
