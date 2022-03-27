import { data, addValue } from "./data.js";

//for data push onto table
let length = data.length,
  totalFee = 0,
  count,
  nameStartWithR = 0,
  fee3_5 = 0,
  feeInRange = 0,
  cityName,
  feeLesss1000 = 0,
  nameSCityCh = 0,
  nameJCityH = 0,
  addedName,addedCity,addedFees,
  tableRow,
  statsics,
  max,
  min;

//   tableRow = document.createElement("tr");
// let showData = data.map(item => {
//   return (
//   tableRow.innerHTML += `<td>${data[i].id}</td>
//    <td>${data[i].name}</td>
//    <td>${data[i].city}</td>
//    <td>$${data[i].fees}</td>
//    <td><button onclick="editValue(i)">Edit</button>  <button>Delete</button></td>`);
// });

function showData() {
  for (let i = 0; i < length; i++) {
    tableRow = document.createElement("tr");
    tableRow.innerHTML = `<td>${data[i].id}</td>
     <td>${data[i].name}</td>
     <td>${data[i].city}</td>
     <td>$${data[i].fees}</td>
     <td><button onclick="function addValue(){
       ${data[i].name = document.getElementById("name").value}
     }">Edit</button>  <button>Delete</button></td>`;
    document.getElementById("table").appendChild(tableRow);

    //For total fees
    totalFee += data[i].fees;

    //For total number of students
    count = i + 1;

    if (data[i].name.charAt(0) === "R") {
      nameStartWithR++;
    }

    //Number of students whose name starts from "S" AND City name starts from "Ch"
    if (
      data[i].name.charAt(0) === "S" &&
      data[i].city.substring(0, 2) === "Ch"
    ) {
      nameSCityCh++;
    }

    //Number of students whose name starts from "S" AND City name starts from "Ch"
    if (data[i].name.charAt(0) === "J" && data[i].city.charAt(0) === "H") {
      nameJCityH++;
    }

    //Number of students whose fees is in between $2000 and $3900
    if (data[i].fees > 2000 && data[i].fees < 3900) {
      feeInRange += 1;
    }

    //Number of students whose fees is < $1000
    if (data[i].fees < 1000) {
      feeLesss1000 += 1;
    }
  }

  if (length < 4) {
    cityName = "Not Found";
  } else {
    cityName = data[3].city;
  }

  //For counting fees of 3rd and 5th student
  if (length === 2) {
    fee3_5 = 0;
  } else if (length < 5) {
    fee3_5 = data[2].fees;
  } else {
    fee3_5 = data[2].fees + data[4].fees;
  }

  //Find the Min and Max fees

  const array = data.map((item) => item.fees);
  max = Math.max(...array);
  min = Math.min(...array);

  function editValue(a){
    alert(a)
  }

  summary();
}


function summary() {
  statsics = document.createElement("ol");
  statsics.innerHTML = `<li>Total fees: ${totalFee}</li>
    <li>Total number of students: ${count}</li>
    <li>Number of students whose name starts from "R": ${nameStartWithR}</li>
    <li>City name of 4th student: ${cityName}</li>
    <li>Total fees of 3rd and 5th student: ${fee3_5}</li>
    <li>Number of students whose fees is in between $2000 and $3900: ${totalFee}</li>
    <li>Number of students whose fees is < $1000: ${feeLesss1000}</li>
    <li>Number of students whose name starts from "S" AND City name starts from "Ch": ${nameSCityCh}</li>
    <li>Number of students whose name starts from "J" AND City name starts from "H": ${nameJCityH}</li>
    <li>Find the Min and Max fees: ${min} ${max}</li>`;
  document.getElementById("stastics").appendChild(statsics);
}



//Adding new filed to the Table
let button = document.getElementById("myBtn");
button.addEventListener("click", function () {
  length++;
  addedName = document.getElementById("name").value;
  addedCity = document.getElementById("city").value;
  addedFees = document.getElementById("fees").value;
  //console.log(length, addedName, addedCity, addedFees);

  if(addedName==="" || addedCity==="" || addedFees===""){
    alert("All Fields are Mandatory")
  }else{
    tableRow = document.createElement("tr");
    tableRow.innerHTML = `<td>${length}</td>
     <td>${addedName}</td>
     <td>${addedCity}</td>
     <td>$${addedFees}</td>
     <td><button onclick="editValue(i)">Edit</button>  <button>Delete</button></td>`;
    document.getElementById("table").appendChild(tableRow);

    addValue(length, addedName, addedCity, addedFees);
    showData();
  }
  
  
});



// console.log(`${length} ${addedName} ${addedCity} ${addedFees}`);
  // //alert(`${length} ${addedName} ${addedCity} ${addedFees}`);

  // data.push({ id: length, name: addedName, city: addedCity, fees: addedFees });
  // console.log(data);

  //addValue(addedName, addedCity, addedFees);
  //data.push({id : length+1, name : addedName, city : addedCity, fees : addedFees});
  //  val = [...data];
  //printValue();

// function addValue(){
//   addedName = document.getElementById('name').value;
//   addedCity = document.getElementById('city').value;
//   addedFees = document.getElementById('fees').value;
//   length++;
//   alert(`${length} ${addedName} ${addedCity} ${addedFees}`);
//   data.push({id : length, name : addedName, city : addedCity, fees : addedFees})
//   console.log(data);
// }

// let button = document.getElementById("myBtn");
// console.log(button);
// button.addEventListener("click", function () {
//   length++;
//   let addedName = document.getElementById("name").value;
//   let addedCity = document.getElementById("city").value;
//   let addedFees = document.getElementById("fees").value;
//   console.log(`${length} ${addedName} ${addedCity} ${addedFees}`);
//   //alert(`${length} ${addedName} ${addedCity} ${addedFees}`);

//   data.push({ id: length, name: addedName, city: addedCity, fees: addedFees });
//   console.log(data);

//   //addValue(addedName, addedCity, addedFees);
//   //data.push({id : length+1, name : addedName, city : addedCity, fees : addedFees});
//   //  val = [...data];
//   //printValue();
// });

// function addValue(addedName, addedCity, addedFees){
//   length++;
//   data.push({id : length, name : addedName, city : addedCity, fees : addedFees});
//   alert(`${length} ${addedName} ${addedCity} ${addedFees}`);
//   setTimeout(function(){
//     console.log(data)
//   },3000);
// }

// function show(){
//   data.map(item => console.log(item));
// }

export { showData };
