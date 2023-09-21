// document.getElementById('modooscuro').onclick= function(){
//     if(document.getElementById('modooscuro').style.color= '#6d393d'){
//         document.body.style.backgroundColor='black'
//         document.getElementById('modooscuro').style.color= 'white'
//     }
// }
/**
document.getElementById('modooscuro').onclick= function(){
    if(document.getElementById('modooscuro').style.color= 'white'){
        document.body.style.backgroundColor='white'
        document.getElementById('modooscuro').style.color= '#6d393d'
    }
} */
// let modoosc = document.querySelectorAll('.modooscuro');

//       for (let [i, cv] of modoosc.entries()) {
//           cv.addEventListener('click', function focus() {
//               resetFocus();
//               cv.classList.toggle("modoclaro")
//           })
//       }

//       function resetFocus() {
//         modoosc.forEach(el => el.classList.remove("modooscuro"))
//       }

// let modoosc = document.getElementById('modooscuro').style.color
// document.getElementById('modooscuro').addEventListener("click", function () {
//     if (modoosc = '#6d393d') {
//         document.body.style.backgroundColor='black'
//         document.getElementById('modooscuro').style.color= 'white'
//     }
//     if (modoosc = 'white') {
//         document.body.style.backgroundColor='white'
//         document.getElementById('modooscuro').style.color= '#6d393d'
//     }
// })



//let modocl = document.getElementById("modooscuro").getElementsByClassName("clasemodoclaro");
document.getElementById('modooscuro').addEventListener("click", function () {
    let clasemodo = document.getElementById("modooscuro").classList.contains('clasemodooscuro');
    switch (clasemodo) {
        case true:
            document.body.style.backgroundColor = 'black'
            //document.getElementById('modooscuro').style.color= 'white'
            document.getElementById("modooscuro").classList.replace('clasemodooscuro', 'clasemodoclaro')
            document.getElementById("modooscuro").classList.replace('fa-moon', 'fa-sun')
            break;
        case false:
            document.body.style.backgroundColor = 'white'
            //document.getElementById('modooscuro').style.color= '#6d393d'
            document.getElementById("modooscuro").classList.replace('clasemodoclaro', 'clasemodooscuro')
            document.getElementById("modooscuro").classList.replace('fa-sun', 'fa-moon')
            break;
    }
})
