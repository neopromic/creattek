import { toRedirect } from "./toRedirect.ts";

const btnContact = document.querySelector("#btnContact");
const dialogContact = document.querySelector("#dialogContact");
const dialogContactWPPBtn = document.querySelector("#dialogContactWPPBtn");
const btnCloseContactDialog = document.querySelector("#btnCloseContactDialog");

btnContact.addEventListener("click", () => {
  return showDialog(dialogContact);
});

dialogContactWPPBtn.addEventListener("click", () => {
  return toRedirect("https://w.app/creattek");
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
