// How to fetch Data from server.

function fetchDataFromServer() {
  // fetch("https://jsonplaceholder.typicode.com/todos")
    fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => printData(json));
}

// function printData(data) {
//   console.log(data);
//   let ele = document.getElementById("code");
//   let tempData = data.filter((a) => a.id < 50);
//   ele.innerHTML = JSON.stringify(tempData, null, 4);
// }

// function printData(data){
//   console.log(data);
//   let{limit,skip,total,users} = data;
//   console.log(users);

//   // let named = users.map((ele)=>{ return {firstName,lastName}})
// }

function printData(data){
  console.log(data);
  const { limit,skip,total,users} = data;
  let thisarray =  users.map((e) => {})

  console.log(data);
  // let tdata = data.filter(())
}



fetchDataFromServer();
