class UI {
  constructor(id) {

    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }
  // submit budget method
   submitBudgetForm(){
      console.log("hello from es6");
    const value = this.budgetInput.value;
    if(value === ''|| value < 0 ){
       this.budgetFeedback.classList.add('showItem');
       this.budgetFeedback.innerHTML =`<p> value cannot cannot be empty or negative</p>`;
       const self = this
       console.log(self);
       setTimeout(function(){
       
       self.budgetFeedback.classList.remove('showItem');
       },4000)
    }
    else{
      this.budgetAmount.textContent = value;
      this.budgetInput.value = '';
      this.showBalance();
    }
  }
    // Show balance
    showBalance(){
       const expense = this.totalExpense();

    }
    // total expense
   
}

function eventListeners(){
  const budgetForm = document.getElementById('budget-form');
  const expenseForm = document.getElementById('expense-form');
  const expenseList = document.getElementById('expense-list');

  // Create  new instance of UI
  const ui = new UI ();

  // bugdget form submit
  budgetForm.addEventListener('submit', function(event){
    event.preventDefault();
    ui.submitBudgetForm();
  });

  // expense form submit
  expenseForm.addEventListener('submit',function(event){
     event.preventDefault();
  });
 // expense list submit
  expenseList.addEventListener('click',function(event){
    event.preventDefault();
  });

  
}

document.addEventListener("DOMContentLoaded",function(){
  eventListeners();
});