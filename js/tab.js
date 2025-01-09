document.getElementById('show-donate-list').addEventListener('click', function () {
    console.log('donate list clicked');
    showSectionByID('donate_list');

});

document.getElementById('show-transaction-list').addEventListener('click', function () {
    console.log('History tab clicked');
    showSectionByID('history-container');
});