document.getElementById('btn-noakhali').addEventListener('click', function (event) {
    event.preventDefault();

    const amount = getInputValueByID('input-donate-noakhali');

    const balance = getTextValueByID('noakhali-balance');
    const mainBalance = getTextValueByID('main-balance');


    if (isNaN(amount)) {
        document.getElementById('failed-modal').showModal();
        return;
    }
    if (amount > mainBalance) {
        document.getElementById('failed-modal').showModal();
        return;
    }
    else {
        document.getElementById('success_modal').showModal();
        const newBalance = balance + amount;
        const reduceBalance = mainBalance - newBalance;


        document.getElementById('noakhali-balance').innerText = newBalance;
        document.getElementById('main-balance').innerText = reduceBalance;
    }

});