//call api
// make layout of card
//make fields configurable


function fetchDataFromServer() {
    // fetch("https://jsonplaceholder.typicode.com/todos")
      fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((json) => showTheData(json));
    //   let mainContainer = document.getElementsByClassName("main-conatiner")[0];
    //   let result = data.json();
    //   result.users.forEach((ele) => {
    //     mainContainer.appendChild(showTheData(ele));
    //   });
  }

// function printData(data){
//     console.log(data);
// }
// const you = "youare";
// console.log(you);

const nameFormatter = (user) => {return `${user.firstName} ${user.lastName}`}
let array = [
    {key: "name", label:"Name",formatter: nameFormatter},
    {key: "age", label:"Age"},
    {key: "bloodGroup", label:"Blood Group"},
    {key: "weight", label:"Weight"},
];


function showTheData(data){
    console.log(data);
    const {limit,skip,total,users} = data;
    let mainDiv = document.getElementsByClassName('main-conatiner')[0];
    const thisUser = users[0];
    


    let cardDiv = document.createElement("div");
    cardDiv.className = "card";

    var image = document.createElement("img");
    image.src = thisUser.image;
    cardDiv.appendChild(image);

    // console.log(cardDiv);
    array.forEach((ele) =>{
        let p1 = document.createElement('p');
        let thisNode;
        if(ele.formatter==null){
            thisNode = document.createTextNode(`${ele.label}: ${thisUser[ele.key]}`);
        }else{
            thisNode = document.createTextNode(`${ele.label}: ${ele.formatter(thisUser)}`);        
        }
        p1.appendChild(thisNode);
        cardDiv.appendChild(p1);
    })


    mainDiv.appendChild(cardDiv);
}



fetchDataFromServer();