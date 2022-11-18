const openModal = document.getElementById("open-modal");
openModal.addEventListener("click", function(){
    document.getElementById("overlay").style.display = "block";
})


const closemodal = document.getElementById("close-modal");
closemodal.addEventListener("click", function(){
    document.getElementById("overlay").style.display = "none";
})