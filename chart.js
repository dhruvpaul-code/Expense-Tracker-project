// ---------- Chart.js Setup ---------- //

// Pie Chart (Expense by Category)
const pieCtx = document.getElementById("expensePieChart").getContext("2d");
const expensePieChart = new Chart(pieCtx, {
  type: "pie",
  data: {
    labels: ["Food", "Transport", "Grocery", "Entertainment"],
    color: "white",
    datasets: [
      {
        label: "Expenses",
        data: [300, 150, 500, 200], // dummy data
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "white", // change legend text color
        },
      },
    },
  },
});

// Line Chart (Income vs Expense over time)
const lineCtx = document.getElementById("incomeLineChart").getContext("2d");
const incomeLineChart = new Chart(lineCtx, {
  type: "bar",
  data: {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Income",
        data: [2000, null], // dummy data
        borderColor: "blue",
        backgroundColor: "#36a2eb",
        fill: true,
      },
      {
        label: "Expenses",
        data: [null, 1150], // dummy data
        borderColor: "red",
        backgroundColor: "#ff6384",
        fill: true,
      },
    ],
  },
   options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: "white" }   // legend label color
      },
      tooltip: {
        bodyColor: "white",         // tooltip main text
        titleColor: "yellow"        // tooltip title
      }
    },
    scales: {
      x: {
        ticks: { color: "white" }   // X-axis label color
      },
      y: {
        ticks: { color: "white" }  // Y-axis label color
      }
    }
  }
});

