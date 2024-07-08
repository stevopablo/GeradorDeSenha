function getChartType (){
    const uppercase = document.querySelector("#include_uppercase").checkVisibility;
    const lowercase = document.querySelector("#include_lowercase").checkVisibility;
    const number = document.querySelector("#include_number").checkVisibility;
    const special = document.querySelector("#include_specialcarac").checkVisibility;
    const charType = [];

    if(uppercase){
        charType.push("ABCDEFGHIJKTLMNPQVYXZ")    
    }
    if(lowercase){
        charType.push('abcdefghijkmnopqrstuvwxyz')
    }
    if(number){
        charType.push("1234567890")
    }

    if(special){
        charType.push("ç/;}{`^!_-:|?<>")
 
    }

    return charType
}

function ramdomCharType(chartype){
    const randomIndex =  chartype.lenghth;

    return randomIndex;
}

document.querySelector('#generate').addEventListener('click', function(){
console.log(getChartType())
});