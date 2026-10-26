
window.addEventListener('load', function() {
    
    let c1 = document.querySelector('#kort');
    let c2 = document.querySelector('#mobilePay');

    let b1 = document.querySelector('#btnKort');
    let b2 = document.querySelector('#btnMobilePay');
    
    b1.addEventListener('click', function() {
        c1.style.display = "block";
        c2.style.display = "none";

        b1.className = "choice-button-selected";
        b2.className = "choice-button-unselected";
    });
    
    b2.addEventListener('click', function() {
        c1.style.display = "none";
        c2.style.display = "block";
        
        b1.className = "choice-button-unselected";
        b2.className = "choice-button-selected";
    });

});



let container = document.querySelector(".choose-a-donation-amount");
container.addEventListener("click", function(event){
    // console.log(event.target, event.target.parentNode.classList.contains("genstande-item"))
    // --- if clicked element contains the class "genstande-item": ---
    if (event.target.classList.contains("buttonsForDonations")) {
        
        // --- to do: remove class item-selected, from all other items ---
        let list = document.querySelectorAll(".item-selected");
        for (item of list){
            item.classList.remove("item-selected");
        };
        
        event.target.classList.add("item-selected");
        console.log(event.target.innerText);
    };
});


// let container = document.querySelector(".choose-a-donation-amount");
// container.addEventListener("click", function(event){
//     // console.log(event.target, event.target.parentNode.classList.contains("genstande-item"))
//     // --- if clicked element contains the class "genstande-item": ---
//     if (event.target.parentNode.classList.contains("buttonsForDonations")) {
        
//         // --- to do: remove class item-selected, from all other items ---
//         let list = document.querySelectorAll(".item-selected");
//         for (item of list){
//             item.classList.remove("item-selected");
//         };
        
//         event.target.parentNode.classList.add("item-selected");
//         console.log("item-selectet")
//     };
// });

















// var kort1var = document.getElementById("kort1");


// var mobilePvar = document.getElementById("mobileP");

// // betalingkort.classList.add("active");
// betalingkort.addEventListener("click" , () => {
//       betalingkort.classList.add("active");
//     }); 


// function myFunction() {
// //   var kort1var = document.getElementById("kort1");
//   if (kort1var.style.display === "none") {
//     kort1var.style.display = "block";
//      mobilePvar.style.display = "none";
//   } else {
//     kort1var.style.display = "none";

//   }
// }


// function myFunctionTwo() {
// //   var mobilePvar = document.getElementById("mobileP");
//   if ( mobilePvar.style.display === "none") {
//      mobilePvar.style.display = "block";
//      kort1var.style.display = "none";
//   } else {
//      mobilePvar.style.display = "none";
//   }
// }


// var button1 = document.getElementById('btnKort');
// var color1 = kortButton.style.backgroundColor;
// button1.addEventListener('click', function () {
//   // this function executes whenever the user clicks the button
//   color1 = kortButton.style.backgroundColor = color === 'green' ? 'red' : 'green';
// });

// var button2 = document.getElementById('btnMobile');
// var color2 = mobliePayButton.style.backgroundColor;
// button1.addEventListener('click', function () {
//   // this function executes whenever the user clicks the button
//   color2 = mobliePayButton.style.backgroundColor = color === 'green' ? 'red' : 'green';
// });



// const betalingkort = document.getElementById("btnKort");
// const betalingMobile = document.getElementById("btnMobileP")




