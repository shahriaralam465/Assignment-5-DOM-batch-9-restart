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
        console.log('Quota : Donate money for Quota success');

        // add to transaction history
        const div= document.createElement('div');
        div.classList.add('border');
        div.classList.add('border-gray-200');
        div.classList.add('rounded-xl')
        div.classList.add('p-5');
        div.classList.add('w-full');
        

        div.innerHTML =`
            <div>
                <h3 class="text-lg font-semibold text-black">${amount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>

                <p class="text-base font-light bg-gray-100 text-gray-500 my-2 p-2">${formattedDate}</p>
            </div>
        
        `
        document.getElementById('history-container').appendChild(div);

    }



})