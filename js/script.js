/* toggle navbar */

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open")
}


/* close nav when clicking on a nv item */

document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
})

/* sticky header */

window.addEventListener("scroll", function(){
    if(this.scrollY > 900){
        document.querySelector(".header").classList.add("sticky");
    } else {
        document.querySelector(".header").classList.remove("sticky");
    }
})
let data = "";
let userDetail="";
/* Api */
fetch("https://fakestoreapi.com/users").then((data) =>{
    return data.json();
}).then((json) =>{
    data = json;
    let users ="";
    let placements="";
    let details="";
    json.map((user) =>{
        users+=`<tr>
        <td>${user.name.firstname +" "+user.name.lastname }</td>
        <td>${user.phone}</td>
        <td>${user.email}</td>
      </tr> `

        details+=`<tr>
        <td>${user.name.firstname +" "+user.name.lastname }</td>
        <td>
            <button onclick="onSeeDetails(${user.id})" >See Details</button>
        </td>
      </tr> `
    });

    placements = `<div class="first-place">
    <div class="section-title">
      <img src="./img/firstPlace.png" alt="firstPlace" height="140px" />
      <h3>${json[0].name.firstname +" "+json[0].name.lastname}</h3>
    </div>
  </div>
  <div class="row">
    <div class="column item-title">
      <img src="./img/secondPlace.png" alt="firstPlace" height="140px" />
      <h3>${json[1].name.firstname +" "+json[1].name.lastname}</h3>
    </div>
    <div class="column item-title">
      <img src="./img/thirdPlace.png" alt="firstPlace" height="140px" />
      <h3>${json[2].name.firstname +" "+json[2].name.lastname}</h3>
    </div>`
    
    document.getElementById("table_body").innerHTML=users;
    document.getElementById("placements").innerHTML=placements;
    document.getElementById("table_body_participants").innerHTML=details;
    
});

function helper(place, firstname, lastname, prise ) {
    userDetail =`<h3>${place} º Place</h3>
         <h3>${firstname +" "+lastname}</h3>
         <h3>Prise</h3>
         <p>
           ${prise}
         </p>`;
 }

function onSeeDetails(number){
    
    switch (number) {
        case 1:  helper(data[number-1].id, data[number-1].name.firstname, data[number-1].name.lastname, "A television + A Computer" )
        break;
        case 2:  helper(data[number-1].id, data[number-1].name.firstname, data[number-1].name.lastname, "A radio" )
        break;
        case 3:  helper(data[number-1].id, data[number-1].name.firstname, data[number-1].name.lastname, "A pencil" )
        break;
        default:  helper(data[number-1].id, data[number-1].name.firstname, data[number-1].name.lastname, "Nothing" )
       break
    }
    document.getElementById("details_body").innerHTML=userDetail;
}
