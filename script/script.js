let friends = [];

function addFriend() {
  let friendName = document.getElementById('friendInput').value;
  if (friendName.length > 3) {
    if (friends.includes(friendName)) {
      alert('This name already exists in the list');
    } else {
      friends.push(friendName);
      displayFriends();
      saveToLocalStorage();
    }
  } else {
    alert('Name should be more than 3 characters long');
  }
}

function displayFriends() {
  let friendList = document.getElementById('friendList');
  friendList.innerHTML = '';
  for (let friend of friends) {
    friendList.innerHTML += `<li>${friend}</li>`;
  }
}

function saveToLocalStorage() {
  localStorage.setItem('friends', JSON.stringify(friends));
}

function loadFromLocalStorage() {
  let savedFriends = localStorage.getItem('friends');
  if (savedFriends) {
    friends = JSON.parse(savedFriends);
    displayFriends();
  }
}

document.getElementById('friendInput').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addFriend();
  }
});

loadFromLocalStorage();
