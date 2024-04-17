let expenses = [];

function addExpense() {
    const description = document.getElementById('expense-description').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    const category = document.getElementById('expense-category').value;

    if (description && amount) {
        const expense = {
            description,
            amount,
            category
        };
        expenses.push(expense);
        renderExpenses();
        calculateTotalExpenses();
        clearInputFields();
    } else {
        alert('Please enter both description and amount.');
    }
}

function renderExpenses() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';
    expenses.forEach(expense => {
        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');
        expenseItem.textContent = `${expense.description} - ${expense.amount.toFixed(2)} (${expense.category})`;
        expenseList.appendChild(expenseItem);
    });
}

function calculateTotalExpenses() {
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    const totalExpensesDisplay = document.getElementById('total-expenses');
    
    totalExpensesDisplay.textContent = `Total Expenses: ${totalExpenses.toFixed(2)}`;
}

function clearInputFields() {
    document.getElementById('expense-description').value = '';
    document.getElementById('expense-amount').value = '';
}
