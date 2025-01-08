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
        // showing modal
        document.getElementById('success_modal').showModal();

        // main account balance - Feni account balance  
        const reduceBalance = mainBalance - amount;

        // Feni account balance + amount
        const addBalance = feniBalance + amount;

        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('grid');
        div.classList.add('grid-cols-1');
        div.classList.add('my-6');
        div.classList.add('border');
        div.classList.add('border-gray-200');
        div.classList.add('rounded-xl')
        div.classList.add('p-5');
        div.classList.add('w-full');


        div.innerHTML = `
            <div>
                <h3 class="text-lg font-semibold text-black">${amount} Taka is Donated for famine-2024 at Feni, Bangladesh  </h3>

                <p class="text-base font-light bg-gray-100 text-gray-500 my-2 p-2">${formattedDate}</p>
            </div>
        
        `
        document.getElementById('history-container').appendChild(div);


        // set the added money to feni balance
        document.getElementById('feni-balance').innerText = addBalance;

        // set the reduced money to the main balance
        document.getElementById('main-balance').innerText = reduceBalance;
        console.log('Feni : successfully Donate money')
    }
});