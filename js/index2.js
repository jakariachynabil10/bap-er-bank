document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeInput = document.getElementById('deposite-field');
    const depositeAmountInput = depositeInput.value;
    const depositeAmountInputNumber = parseFloat(depositeAmountInput);
    depositeInput.value = '';
    
    const depositeCurrentAmount = document.getElementById('deposite');
    // const depositeCurrentTotal = depositeCurrentAmount.innerText;
    // const depositeCurrentTotalNumber = parseFloat(depositeCurrentTotal);

    

    depositeCurrentAmount.innerText = depositeAmountInputNumber;

    const toast = document.getElementById('toast');
    toast.style.display = 'block'

    const balance = document.getElementById('balance');
    const balanceAmount = balance.innerText;
    const balanceAmountNumber = parseFloat(balanceAmount);
    const newBalanceAmount = balanceAmountNumber + depositeAmountInputNumber;
    balance.innerText = newBalanceAmount;
    
    
})

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-field');
    const withdrawAmountInput = withdrawInput.value;
    const withdrawAmountInputNumber = parseFloat(withdrawAmountInput);
    withdrawInput.value = '';
    
    const withdrawCurrentAmount = document.getElementById('withdraw');
    // const depositeCurrentTotal = depositeCurrentAmount.innerText;
    // const depositeCurrentTotalNumber = parseFloat(depositeCurrentTotal);

    const balance = document.getElementById('balance');
    const balanceAmount = balance.innerText;
    const balanceAmountNumber = parseFloat(balanceAmount);
    if (balanceAmountNumber < withdrawAmountInputNumber ) {
       alert('incificient Balance')
       return;
    }

    const newBalanceAmount = balanceAmountNumber - withdrawAmountInputNumber;
    balance.innerText = newBalanceAmount;
    withdrawCurrentAmount.innerText = withdrawAmountInputNumber;
    withdrawInput.value = '';
})

