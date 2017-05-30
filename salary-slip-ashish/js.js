// vars
var form  = GE("inputForm"),
	inputs = {
		empId : "",
		month : "",
		year : "",
		paydays: ""
	},
	db = [],
	noOfdaysThismonth = 31,
	personDetails = {};

// function
function GE(id){
	return document.getElementById(id);
}

function submitForm(event){
	event.preventDefault();
	getInputs();
	searchEmp();
	putEmpDetails();
	doCal();
}

function getInputs(){
	for(var key in inputs){
		inputs[key] = form[key].value;
	}
}

function resetPaydaysOptions(){
	var month = form.month.value,
		year = form.year.value,
		paydays = form.paydays,
		thirtees = ["4", "6", "9", "11"],
		thirtyFirsts = ["1", "3", "5", "7", "8", "10", "12"],
		howMayDays = 28;

	if(thirtees.indexOf(month) > -1){
		howMayDays = 30;
	} else if(thirtyFirsts.indexOf(month) > -1) {
		howMayDays = 31;
	} else {
		if(year % 4 === 0){
			howMayDays = 29;
		}
	}

	noOfdaysThismonth = howMayDays;

	paydays.innerHTML = "";
	for(var i = howMayDays ; i>= 1; i--){
		var opt = document.createElement("option");
		opt.innerHTML = i;
		opt.value = i;
		paydays.appendChild(opt);
	}
}

function searchEmp(){
	for(i in db){
		if(db[i].empId == inputs.empId){
			personDetails = db[i];
		}
	}
}

function putEmpDetails(){
	var elms = {
		name : GE("name"),
		pan : GE("pan"),
		empId : GE("empId")
	};

	for(var key in elms){
		elms[key].innerHTML = personDetails[key];
	}
}

function doCal(){
	var gross = personDetails.salary,
		salaryPerDay = parseInt(gross / noOfdaysThismonth),
		grossThisMonth = salaryPerDay * inputs.paydays,
		elms = {
			basic : GE("n_basic"),
			pf : GE("n_pf"),
			da : GE("n_da"),
			esi : GE("n_esi"),
			hra : GE("n_hra"),
			loan : GE("n_loan"),
			conveyance : GE("n_conveyance"),
			tax : GE("n_tax"),
			medical : GE("n_medical"),
			tsd : GE("n_tsd"),
			special: GE("n_special")
		},
		earnings = {
			basic : grossThisMonth * 0.35,
			pf : (grossThisMonth * 0.35) * 0.05,
			da : (grossThisMonth * 0.35) * 0.1,
			esi : 200,
			hra : (grossThisMonth * 0.35) * 0.15,
			loan : 0,
			conveyance : 800,
			tax : (grossThisMonth * 0.35) * 0.04,
			medical : 1250,
			tsd : 300
		},
		sumOfnum = 0,
		totals = {
			deductions : 0,
			earnings : 0
		};

	for(var key in earnings){
		sumOfnum = sumOfnum + earnings[key];
		if(elms[key]){
			elms[key].innerHTML = earnings[key].toFixed(2);
		}
	}
	earnings.special = grossThisMonth - sumOfnum;
	elms.special.innerHTML = earnings.special.toFixed(2);

	totals.earnings = earnings.basic + earnings.da + earnings.hra + earnings.conveyance + earnings.medical + earnings.special;
	totals.deductions = earnings.pf + earnings.esi + earnings.loan + earnings.tax + earnings.tsd;

	GE("n_totalEarnings").innerHTML = totals.earnings.toFixed(2);
	GE("n_totalDeductions").innerHTML = totals.deductions.toFixed(2);
	GE("n_net").innerHTML = (totals.earnings - totals.deductions).toFixed(2);

	console.log(earnings, totals);
}

function doPrint(){
	window.print();
}

// Event Bindings
form.onsubmit = submitForm;
form.month.onchange = resetPaydaysOptions;
form.year.onchange = resetPaydaysOptions;
form.print.onclick = doPrint;

// db

db = [{
		name : "Ravi",
		pan : "some pan number",
		empId : "1",
		salary : 40000
	},
	{
		name : "Qadir",
		pan : "some pan number",
		empId : "2",
		salary : 30000
	},
	{
		name : "Rakesh",
		pan : "some pan number",
		empId : "3",
		salary : 42000
	},
	{
		name : "William",
		pan : "some pan number",
		empId : "4",
		salary : 8000
	},
	{
		name : "Ashish",
		pan : "some pan number",
		empId : "5",
		salary : 85000
	}];