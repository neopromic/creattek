const btnContact = document.querySelector("#btnContact");
const dialogContact = document.querySelector("#dialogContact");
const dialogContactWPPBtn = document.querySelector("#dialogContactWPPBtn");
const btnCloseContactDialog = document.querySelector("#btnCloseContactDialog");


btnContact.addEventListener("click", () => {
  showDialog(dialogContact);
  // Redirect("https://w.app/creattek");
});

dialogContactWPPBtn.addEventListener("click", () => {
  return Redirect("https://w.app/creatttek");
});

btnCloseContactDialog.addEventListener("click", () => {
  return closeDialog(dialogContact);
});

/*
 * Redirect function used globally in the application.
 * @params url String
 */
function Redirect(url) {
  return (window.location = url);
}

function showDialog(dialogID) {
  return dialogID.showModal();
}

function closeDialog(dialogID) {
  return dialogID.close();
}
