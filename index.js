const saveBtnEl = document.getElementById("save-btn");
const tabBtnEl = document.getElementById("tab-btn");
const delBtnEl = document.getElementById("del-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

let myLeads = [];

const myLeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (myLeadsFromLocalStorage) {
  myLeads = myLeadsFromLocalStorage;
  renderLeads();
}

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>`;
  }
  ulEl.innerHTML = listItems;
  inputEl.value = "";
}

function updateStorageAndRender() {
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
}

saveBtnEl.addEventListener("click", function () {
  if (inputEl.value) {
    myLeads.push(inputEl.value);
    updateStorageAndRender();
  }
});

tabBtnEl.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    updateStorageAndRender();
  });
});

delBtnEl.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});
