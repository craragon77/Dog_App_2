
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
    for (let i = 0; i < responseJson.message.length; i++){
        $("option").replaceWith(
            `<option>${responseJson.message[i]}</option>`
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