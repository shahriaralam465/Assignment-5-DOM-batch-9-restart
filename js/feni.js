document.getElementById('btn-feni').addEventListener('click', function (event) {
    event.preventDefault();

    const amount = getInputValueByID('input-donate-feni');
    const feniBalance = getTextValueByID('feni-balance');


    const mainBalance = getTextValueByID('main-balance');

    if (isNaN(amount)) {
        document.getElementById('failed-modal').showModal();
        console.log('Feni : Input field are not any number')
        return;
    }
    if (amount > mainBalance) {
        document.getElementById('failed-modal').showModal();
        console.log('Feni : Amount is over the Main balance')
        return;
    }
    else {
        document.getElementById('success_modal').showModal();
        const reduceBalance = mainBalance - amount;
        const addBalance = feniBalance + amount;

        document.getElementById('feni-balance').innerText = addBalance;
        document.getElementById('main-balance').innerText = reduceBalance;
        console.log('Feni : successfully Donate money')
    }
});