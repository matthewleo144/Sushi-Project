// function starGenerator(count,element="* "){
//     let star = "";
//     for(let i=1;i<=count;i++){
//         star += element
//     }
//     return star;
// }
// console.log(starGenerator(4," ="));




for(let i = 1;i<=6;i++){
    let star = "";
    for(let x = 1; x<=i ; x++){
        star += " *";
    }
    // console.log(starGenerator(i,"* "));
    console.log(star);
}
// for(let i = 6;i>=1;i--){
//     // let star = "";
//     // for(let x=1;x<=i;x++){
//     //     star += " *";
//     // }
//     console.log(starGenerator(i,"= "));
// }

// for(let i = 6;i>=1;i-- ){
//     // let star = "";
//     // for(let x=1;x<=i;x++){
//     //     star += "= ";
//     // }
//     console.log(starGenerator(i,"= "));
// }
// for(let i = 1 ; i<=6;i++){
//     // console.log(starGenerator(i,i%2 ===0 ? " =" : " *"))
//     if(i%2 === 0){
//         console.log(starGenerator(i,"= "));
//     }else{
//         console.log(starGenerator(i,"* "));
//     }
// }
// for(let i=1;i<=5;i++){
//     let result = "";
//     for(let x = 1;x<=5;x++){
//         // if(x <= i){
//         //     result <= "*";
//         // }else{
//         //     result <= "=";
//         // }
//         result += x<=i ? "* " : "- "
//     }
//     console.log(result,i)
// }

const ratings = [
    {
        id:1,
        name:"Mg Mg",
        rate:2
    },
    {
        id:2,
        name:"Kyaw Kyaw",
        rate:5
    },
    {
        id:3,
        name:"Zaw Zaw",
        rate:3
    },
    {
        id:4,
        name:"Mya Mya",
        rate:3
    },
    {
        id:5,
        name:"Hla Hla",
        rate:4
    },
    {
        id:6,
        name:"Ko Ko",
        rate:0
    }
];
for(let i=0;i<ratings.length;i++){
    let result = "";
    for(let x=1;x<=5;x++){
        if(x<=ratings[i].rate){
            result +=  " *"
        }else{
            result += " -"
        }
    }
    console.log("id :",ratings[i].id,"Rating :",result,"|",ratings[i].rate,ratings[i].name);
}

for( R of ratings){
    console.log(R.id,R.name,R.rate)
    console.log(R)
}
for( R in ratings){
    console.log(R,ratings[R])
}



const fruit=["apple","orange","lemon"]
for(index of fruit){
    console.log(index);
}
for(index in fruit){
    console.log(index,fruit[index]);
}

const mgmgInfo = {
    name : "mg mg",
    age : 15,
    job : "student"
}
for(key in mgmgInfo){
    console.log(key,mgmgInfo[key])
}