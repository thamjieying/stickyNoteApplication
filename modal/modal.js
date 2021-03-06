// get the modal
let modal = document.getElementById('addNoteModal');
let editModal = document.getElementById('editNoteModal')
console.log('edit modal', editModal)

// get the button that opens the modal
let btn = document.getElementById("addNote");

// get the X element that closes the modal
let closeModal = document.getElementsByClassName("close")[0];
let editCloseModal = document.getElementsByClassName('close')[1]


// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
    modal.style.display = "none";
}
editCloseModal.onclick=function(e) {
    editModal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == editModal ){
        editModal.style.display = 'none';
    }
} 