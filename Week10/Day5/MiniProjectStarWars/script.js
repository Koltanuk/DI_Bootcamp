
function getRandomNumber(num, start=0){
    return Math.floor((Math.random() * num) + start);
}


async function getInfo(){
    let random = getRandomNumber(82,1);
    let res = await fetchData("https://www.swapi.tech/api/people/"+ random);
    console.log(people);
    if (res.message !== "ok"){
        alert ('no data!');
        return;
    }
    const {birth_year, gender, height, name, homeworld} = res.result.properties;

    let homeName = "no homeworld found";
    if (homeworld){
        let homeRes = await fetchData(homeworld);
        const homeName= homeRes.result.properties.name;
    }
    

    render (birth_year, gender, height, name, homeName);

                                                                                                                                                                
}

async function fetchData(url){
    try{
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    catch (error){
        console.log(error);
    }
}
const root = document.getElementById('root');


function render(birth_year, gender, height, name, homeName){

    root.innerHTML = "";

    const div = document.createElement('div');

    const nametag = document.createElement('h2');
    nametag.innerText = name;

    const heighttag = document.createElement('p');
    heighttag.innerText = height;

    const gendertag = document.createElement('p');
    gendertag.innerText = gender;

    const birth_yeartag = document.createElement('p');
    birth_yeartag.innerText = birth_year;

    const homeNametag = document.createElement('p');
    homeNametag.innerText = homeName;

    div.appendChild(nametag);
    div.appendChild(heighttag);
    div.appendChild(gendertag);
    div.appendChild(birth_yeartag);
    div.appendChild(homeNametag);

    root.appendChild(div);

}