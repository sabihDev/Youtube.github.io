const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// close section

function CloseFunc(target) {
  let head = document.querySelector('.data-close-' + target).parentElement;
  head.parentElement.classList.add('hidden');
}

// Drop down
const createDropDownBtn = document.getElementById('drop-downs-create');
const dropDownContent = document.querySelector('.drop-down-create');
let countButtonClicks = 0;
let create = false;
let notificationss = false;
let accounts = false;

createDropDownBtn.addEventListener('click', function () {

  if (accounts === true && notificationss === true) {
    CloseAccount();
    accounts = false;
    CloseNotification();
    notificationss = false;
  } else if (accounts === true) {
    CloseAccount();
    accounts = false;
  } else if (notificationss === true) {
    CloseNotification();
    notificationss = false;
  } else {
    create = true;
    countButtonClicks += 1;
    if (create === true) {
      if (countButtonClicks % 2 === 1)
        OpenCreateDropDown();
      else
        CloseCreateDropDown();
    }
  }

})

function OpenCreateDropDown() {
  dropDownContent.classList.remove(dropDownContent.classList[2]);
  dropDownContent.style = 'transform:translateY(6px)';

}

function CloseCreateDropDown() {
  dropDownContent.classList.add('hidden');
}

// Notification 
let clicks = 0;
const notificationBtn = document.getElementById('drop-down-notifications-btn');
const notification = document.querySelector('.drop-down-notifications');

notificationBtn.addEventListener('click', function () {
  if (create === true && accounts === true) {
    CloseCreateDropDown();
    create = false;
    CloseAccount();
    accounts = false;
  } else if (create === true) {
    CloseCreateDropDown();
    create = false;
  } else if (accounts === true) {
    CloseAccount();
    accounts = false;
  } else {
    notificationss = true;
    clicks += 1;
    if (notificationss === true) {
      if (clicks % 2 === 1) {
        OpenNotification();
      }
      else {
        CloseNotification();
      }
    }
  }

});

function OpenNotification() {
  notification.classList.remove(notification.classList[2]);
}
function CloseNotification() {
  notification.classList.add('hidden');
}

let accountClicks = 0;
let accountDropDown = document.querySelector('.drop-down-account');
let account = document.getElementById('your-account');
account.addEventListener('click', function () {
  if (create === true && notificationss === true) {
    CloseCreateDropDown();
    create = false;
    CloseNotification();
    notificationss = false;
  } else if (create === true) {
    CloseCreateDropDown();
    create = false;
  } else if (notificationss === true) {
    CloseNotification();
    notificationss = false;
  } else {
    accounts = true;
    accountClicks += 1;
    if (accounts === true) {
      if (accountClicks % 2 === 1)
        OpenAccount();
      else
        CloseAccount();
    }
  }


});


function OpenAccount() {
  accountDropDown.classList.remove(accountDropDown.classList[2]);
}
function CloseAccount() {
  accountDropDown.classList.add('hidden');
}

function CloseDropDown() {
  if (create === true) {
    CloseCreateDropDown();
    create = false;
    countButtonClicks -= 1;
  } else if (notificationss === true) {
    CloseNotification();
    notificationss = false;
    clicks -= 1;
  } else if (accounts === true) {
    CloseAccount();
    accounts = false;
    accountClicks -= 1;
  }
}