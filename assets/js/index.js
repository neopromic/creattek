const btnContact = document.querySelector("#btnContact")
const dialogContact = document.querySelector("#dialogContact")

btnContact.addEventListener("click", () => {
  Redirect("https://w.app/creattek");
})

/*
* Redirect function used globally in the application.
* @params url String
*/
function Redirect(url) {
  return window.location = url;
}

function showDialog(dialogID) {
  return dialogID.showModal();
}