function getInputValueByID(id){
    const input= document.getElementById(id).value;
    const inputNumber = parseFloat(input);
    return inputNumber;
}

function getTextValueByID(id){
    const text = document.getElementById(id).innerText;
    const textNumber = parseFloat(text)
    return textNumber;
}

function showSectionByID(id){
    // hide all the sections
    document.getElementById('donate_list').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');

    // show current clicked section
    document.getElementById(id).classList.remove('hidden');
}


function changeColorToLime(){
    document.getElementById('show-donate-list').classList.add('bg-[#B4F461]');
    document.getElementById('show-transaction-list').classList.remove('bg-[#B4F461]');
}

function changeColorToWhite(){
    document.getElementById('show-donate-list').classList.remove('bg-[#B4F461]');
    document.getElementById('show-transaction-list').classList.add('bg-[#B4F461]');
}