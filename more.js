function canIcome(busNo){
    if(busNo === 65 || busNo === 20){
        return "You can reach"
    }
    return "You can't"
}
console.log(canIcome(20));
console.log(canIcome(65));
console.log(canIcome(50));
console.log(canIcome(45));




function eat(food){
    if(food === "hotpot" ||food  === "malaxingao"){
        return "You might full"
    }
    else{
        return "You might not full"

    }
}
console.log(eat("hotpot"));
console.log(eat("malaxingao"));
console.log(eat("icecream"));


