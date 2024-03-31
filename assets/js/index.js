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

const newOrder = (orderId, orderName) => ({
  orderId, 
  orderName
});

const order = newOrder("test123", "testOrder")

const el = document.createElement("p", {});
el.textContent = order.orderName;

document.appendChild(el);
