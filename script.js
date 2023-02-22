function calculate() {
	//Monthly Income
	let monthlyIncome = parseFloat(document.getElementById("income").value);

	//Savings
	let savings = 0.20 * monthlyIncome;
	let bills = 0.10 * monthlyIncome;

	//Expenses
	let expenses = monthlyIncome - savings - bills;

	//Financial statement
	document.getElementById("results").innerHTML = "<p>Monthly Income: ₱" + monthlyIncome.toFixed(2) + "</p>" +
		"<p>Savings (20%): ₱" + savings.toFixed(2) + "</p>" +
		"<p>Bills (10%): ₱" + bills.toFixed(2) + "</p>" +
		"<p>Expenses: ₱" + expenses.toFixed(2) + "</p>";
}
