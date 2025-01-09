document.getElementById('show-donate-list').addEventListener('click', function () {
    console.log('donate list clicked');
    showSectionByID('donate_list');

});

document.getElementById('show-transaction-list').addEventListener('click', function () {
    console.log('History tab clicked');
    showSectionByID('history-container');
})


// // changing tab button color by click : lime
// document.getElementById('show-donate-list').addEventListener('click', function(){
//     changeColorToLime();
// });

// // changing tab button color by click : white
// document.getElementById('show-transaction-list').addEventListener('click', function(){
//     changeColorToWhite();
// });