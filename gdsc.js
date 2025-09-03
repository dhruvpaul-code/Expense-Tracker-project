// Show form when "Add Expense" is clicked
document
  .querySelector(".add-expense-btn") // give your Add Expense link a class
  .addEventListener("click", () => {
    document.getElementById("addExpenseForm").style.display = "block";
    document.getElementById("dashboard-heading").style.display = "none";
    document.getElementById("table1").style.display = "none";
    document.getElementById("table2").style.display = "";
    document.getElementById("LOGIN").style.display = "none";
    document.getElementById("piechart").style.display = "none";
    document.getElementById("linechart").style.display = "none";
    document.getElementById("piechart").style.width = "21vw";
    document.getElementById("linechart").style.width = "21vw";
    document.getElementById("data").style.display = "flex";
    document.getElementById("categories-input").style.display = "none";
    document.getElementById("income").style.display = "none";
    document.getElementById("table3").style.display = "none";
    document.getElementById("ai-div").style.display = "none";
    
    
    
    
  });

// add expense submit
const form = document.getElementById("expenseForm");
const tableBody = document.querySelector(".expensetable tbody");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page refresh

  // Get form values
  const date = form.date.value;
  const amount = form.amount.value;
  const category = form.category.value;
  const notes = form.notes.value;

  // Create a new row
  const newRow = document.createElement("tr");

  // Insert cells
  newRow.innerHTML = `
                    <td>${date}</td>
                    <td>${category}</td>
                    <td>${amount}</td>
                    <td colspan="3">${notes}</td>
                    <td><button class="delete-btn"> Delete </button></td>
                    
                    `;

  // Add row to table
  tableBody.appendChild(newRow);

  // Reset form
  form.reset();
  alert("Expense Added!");

  const deleteBtn = newRow.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    newRow.remove();
  });
});
document
  .querySelector(".search")
  .addEventListener("click", () => {
    document.getElementById("addExpenseForm").style.display = "none";
    document.getElementById("dashboard-heading").style.display = "none";
    document.getElementById("table1").style.display = "block";
    document.getElementById("table2").style.display = "block";
    document.getElementById("LOGIN").style.display = "none";
    document.getElementById("piechart").style.display = "none";
    document.getElementById("linechart").style.display = "none";
    document.getElementById("data").style.display = "none";
    document.getElementById("categories-input").style.display = "none";
    document.getElementById("income").style.display = "none";
  });


// show when dashboard is clicked
document
  .querySelector(".add-dashboard-btn") // give your Add Button link a class
  .addEventListener("click", () => {
    document.getElementById("addExpenseForm").style.display = "none";
    document.getElementById("table1").style.display = "";
    document.getElementById("table2").style.display = "";
    document.getElementById("dashboard-heading").style.display = "";
    document.getElementById("piechart").style.display = "";
    document.getElementById("linechart").style.display = "";
    document.getElementById("LOGIN").style.display = "none";
    document.getElementById("finance-tracking").style.display = "none";
    document.getElementById("navbar").style.display = "";
    document.getElementById("piechart").style.width = "400px";
    document.getElementById("linechart").style.width = "400px";
    document.getElementById("data").style.display = "flex";
    document.getElementById("linechart").style.marginTop = "10px";
    document.getElementById("categories-input").style.display = "none";
    document.getElementById("income").style.display = "none";
    document.getElementById("table3").style.display = "none";
    document.getElementById("ai-div").style.display = "none";
  });

// show when login is clicked
document
  .querySelector(".add-login-btn") // give your Add Button link a class
  .addEventListener("click", () => {
    document.getElementById("addExpenseForm").style.display = "none";
    document.getElementById("table1").style.display = "none";
    document.getElementById("table2").style.display = "none";
    document.getElementById("piechart").style.display = "none";
    document.getElementById("linechart").style.display = "none";
    document.getElementById("dashboard-heading").style.display = "none";
    document.getElementById("navbar").style.display = "none";
    document.getElementById("LOGIN").style.display = "";
    document.getElementById("finance-tracking").style.display = "";
    document.getElementById("LOGIN").style.marginTop = "20%";
    document.getElementById("LOGIN").style.marginLeft = "22%";
    document.getElementById("Password").style.width = "251px";
    document.getElementById("email").style.width = "251px";
    document.getElementById("form-login-btn").style.width = "84px";
    document.getElementById("categories-input").style.display = "none";
    document.getElementById("table3").style.display = "none";
    document.getElementById("ai-div").style.display = "none";
    document.getElementById("income").style.display = "none";
    document.querySelector(".form-login-btn").addEventListener("click", () => {
      alert("LOGIN SUCCESSFULL");
    });
  });
// Image Login Button
document.querySelector(".image-login-btn").addEventListener("click", () => {
  document.getElementById("addExpenseForm").style.display = "none";
  document.getElementById("table1").style.display = "none";
  document.getElementById("table2").style.display = "none";
  document.getElementById("piechart").style.display = "none";
  document.getElementById("table3").style.display = "none";
  document.getElementById("linechart").style.display = "none";
  document.getElementById("dashboard-heading").style.display = "none";
  document.getElementById("navbar").style.display = "none";
  document.getElementById("LOGIN").style.display = "";
  document.getElementById("finance-tracking").style.display = "";
  document.getElementById("LOGIN").style.marginTop = "20%";
  document.getElementById("LOGIN").style.marginLeft = "22%";
  document.getElementById("Password").style.width = "21vw";
  document.getElementById("email").style.width = "21vw";
  document.getElementById("form-login-btn").style.width = "7vw";
  document.getElementById("categories-input").style.display = "none";
  document.getElementById("income").style.display = "none";
  document.getElementById("ai-div").style.display = "none";
});


// show when ADD INCOME is clicked
document
  .querySelector(".add-income-nav-btn") // give your Add Button link a class
  .addEventListener("click", () => {
    document.getElementById("addExpenseForm").style.display = "none";
    document.getElementById("table1").style.display = "none";
    document.getElementById("table2").style.display = "none";
    document.getElementById("piechart").style.display = "none";
    document.getElementById("linechart").style.display = "none";
    document.getElementById("dashboard-heading").style.display = "none";
    document.getElementById("navbar").style.display = "none";
    document.getElementById("LOGIN").style.display = "none";
    document.getElementById("ai-div").style.display = "none";
    document.getElementById("finance-tracking").style.display = "";
    document.getElementById("income").style.display = "";
    document.getElementById("table3").style.display = "";
    document.getElementById("income").style.marginTop = "6%";
    document.getElementById("income").style.marginBottom = "8%";
    document.getElementById("income").style.marginLeft = "22%";
    document.getElementById("amountincome").style.width = "21vw";
    document.getElementById("SOURCE").style.width = "21vw";
    document.getElementById("add-income-btn").style.width = "7vw";
    document.getElementById("categories-input").style.display = "none";
    
  });


// show when Ask Gemini is clicked
document
  .querySelector(".askgemini-btn") // give your Add Button link a class
  .addEventListener("click", () => {
    document.getElementById("addExpenseForm").style.display = "none";
    document.getElementById("table1").style.display = "none";
    document.getElementById("table2").style.display = "none";
    document.getElementById("piechart").style.display = "none";
    document.getElementById("linechart").style.display = "none";
    document.getElementById("dashboard-heading").style.display = "none";
    document.getElementById("navbar").style.display = "none";
    document.getElementById("LOGIN").style.display = "none";
    document.getElementById("finance-tracking").style.display = "none";
    document.getElementById("income").style.display = "none";
    document.getElementById("table3").style.display = "none";
    document.getElementById("ai-div").style.display = "";
    
    document.getElementById("categories-input").style.display = "none";
    
  });




  // add income submit
const formincome = document.getElementById("addincome");
const incometableBody = document.querySelector(".incometable tbody");

formincome.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page refresh

  // Get form values
  const amount = formincome.amountincome.value;
  const sources = formincome.SOURCE.value;
 

  // Create a new row
  const newIncomeRow = document.createElement("tr");

  // Insert cells
  newIncomeRow.innerHTML = `
                    <td>${amount}</td>
                    <td>${sources}</td>
                    <td><button class="delete-btn"> Delete </button></td>
                     `;

  // Add row to table
  incometableBody.appendChild(newIncomeRow);

  // Reset form
  formincome.reset();
  alert("Income Added!");

  const deleteIncomeBtn = newIncomeRow.querySelector(".delete-btn");
  deleteIncomeBtn.addEventListener("click", () => {
    newIncomeRow.remove();
  });
});





// reports button is clicked

document.querySelector(".reports-btn").addEventListener("click", () => {
  document.getElementById("addExpenseForm").style.display = "none";
  document.getElementById("table1").style.display = "none";
  document.getElementById("table2").style.display = "none";
  document.getElementById("piechart").style.display = "";
  document.getElementById("linechart").style.display = "";
  document.getElementById("dashboard-heading").style.display = "none";
  document.getElementById("navbar").style.display = "none";
  document.getElementById("table3").style.display = "none";
  document.getElementById("LOGIN").style.display = "none";
  document.getElementById("ai-div").style.display = "none";
  document.getElementById("finance-tracking").style.display = "none";
  
  document.getElementById("piechart").style.width = "50vw";
  document.getElementById("linechart").style.width = "50vw";
  document.getElementById("data").style.display = "block";
  document.getElementById("linechart").style.marginTop = "50px";
  
  document.getElementById("categories-input").style.display = "none";
  document.getElementById("income").style.display = "none";
});

// CATEGORIES BUTTON IS CLICKED
document.querySelector(".Categories-btn").addEventListener("click", () => {
  document.getElementById("addExpenseForm").style.display = "none";
  document.getElementById("table1").style.display = "none";
  document.getElementById("table2").style.display = "none";
  document.getElementById("piechart").style.display = "none";
  document.getElementById("ai-div").style.display = "none";
  document.getElementById("linechart").style.display = "none";
  document.getElementById("dashboard-heading").style.display = "none";
  document.getElementById("navbar").style.display = "none";
  document.getElementById("table3").style.display = "none";
  document.getElementById("LOGIN").style.display = "none";
  document.getElementById("finance-tracking").style.display = "none";
  document.getElementById("categories-input").style.display = "";
  document.getElementById("category-data").style.width = "23vw";
  document.getElementById("add-category-btn").style.marginTop = "26px";
  document.getElementById("added-category").style.marginTop = "26px";
  document.getElementById("mr-category").style.marginRight = "0";
  document.getElementById("income").style.display = "none";
});
//  TO OPEN SIDEBAR
document.querySelector(".sidebar-btn-hide").addEventListener("click",()=>{
  document.getElementById("sidebar").style.display="block";
  document.getElementById("close-window").style.display="block";
  document.getElementById("close-window").style.marginLeft="45px";
  
});
//  TO Close SIDEBAR
document.querySelector(".close-window").addEventListener("click", () => {
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("close-window").style.display = "none";
});
// TO ADD CATEGORY

const form2 = document.getElementById("category-form");
const input = document.getElementById("added-category");
const input2 = document.getElementById("expense-category");
const input3 = document.getElementById("category");

form2.addEventListener("submit", function (e) {
  e.preventDefault();

  const categoryData = document.getElementById("category-data").value;

  function createOption(text) {
    const opt = document.createElement("option");
    opt.textContent = text;
    return opt;
  }

  input.appendChild(createOption(categoryData));
  input2.appendChild(createOption(categoryData));
  input3.appendChild(createOption(categoryData));

  form2.reset();
});
