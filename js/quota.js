document.getElementById('btn-quota').addEventListener('click', function (event) {
    event.preventDefault();

    console.log('quota button click')

    const amount = getInputValueByID('input-quota-taka');
    const quotaBalance = getTextValueByID('quota-balance');

    const mainBalance = getTextValueByID('main-balance');

    if (isNaN(amount)) {
        document.getElementById('failed-modal').showModal();
        console.log('Quota : Input field just contains Number')
        return;
    }
    if (amount > mainBalance) {
        document.getElementById('failed-modal').showModal();
        console.log('Quota : Input Money Bigger than Main Account');
        return;
    }
    else {
        const addBalance = quotaBalance + amount;
        const balance = mainBalance - addBalance;

        // set the input amount to Quota balance
        document.getElementById('quota-balance').innerText = addBalance;

        // reduce the main money
        document.getElementById('main-balance').innerText = balance;

        // showing modal 
        document.getElementById('success_modal').showModal();

        console.log('Quota : Donate money for Quota success')

    }



})