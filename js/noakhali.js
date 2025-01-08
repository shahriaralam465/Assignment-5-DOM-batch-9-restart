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
               <h3 class="text-lg font-semibold text-black">${amount} Taka is Donated for Flood Relief in Noakhali,Bangladesh</h3>

               <p class="text-base font-light bg-gray-100 text-gray-500 my-2 p-2">${formattedDate}</p>
           </div>
       
       `
        document.getElementById('history-container').appendChild(div);



        document.getElementById('noakhali-balance').innerText = newBalance;
        document.getElementById('main-balance').innerText = reduceBalance;
    }

});