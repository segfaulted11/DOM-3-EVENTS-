// optn-2 for onclick event handler (externally creating the function and calling it from the html element)
function makeMaroon(){
    document.body.style.backgroundColor = "maroon"
}

// optn-3 for onclick event handler (js) --->

let btn = document.getElementById("btn-id")
btn.onclick = function makeGreen(){
    document.body.style.backgroundColor = "green"
    
}
//optn-3 (another way)
let btn_id2 = document.getElementById("btn-id2")
function makePink(){
    document.body.style.backgroundColor = "pink"
}
btn_id2.onclick = makePink()