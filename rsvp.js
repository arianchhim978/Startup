document.addEventListener('DOMContentLoaded', function () {
    var addGuestButton = document.getElementById('addGuestButton');
    var guestInput = document.getElementById('guest');
    var guestList = document.getElementById('guestList');

    addGuestButton.addEventListener('click', function () {
        var guestName = guestInput.value.trim();

        if (guestName !== '') {
            addGuestToList(guestName);
            guestInput.value = '';
        }
    });

    function addGuestToList(guestName) {
        var listItem = document.createElement('li');
        listItem.textContent = guestName;

        // Add a line break after each guest
        guestList.appendChild(listItem);
        guestList.appendChild(document.createElement('br'));
    }
});
