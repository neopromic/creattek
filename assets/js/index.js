import { toRedirect } from "./toRedirect.js";

const btnContact = document.querySelector("#btnContact");
const dialogContact = document.querySelector("#dialogContact");
const dialogContactWPPBtn = document.querySelector("#dialogContactWPPBtn");
const btnCloseContactDialog = document.querySelector("#btnCloseContactDialog");


btnContact.addEventListener("click", () => {
  showDialog(dialogContact);
});

dialogContactWPPBtn.addEventListener("click", () => {
  return Redirect("https://w.app/creattek");
});

btnCloseContactDialog.addEventListener("click", () => {
  return closeDialog(dialogContact);
});


function showDialog(dialogID) {
  return dialogID.showModal();
}

function closeDialog(dialogID) {
  return dialogID.close();
}
