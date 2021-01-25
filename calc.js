// Initial userData
var initialUserData = {
	eggs: 0,
	piggyLevel: 1,
	piggyBank: 0,
	piggyDiscount: 0,
	epicCalcOnlyDesired: false,
	epicCalcIncludePiggy: false,
	epicCalcTruckType: 0, // 0-Truckload, 1-Pallet, 2-Big Crate
	epicDiscount: 0,
	hideCompleted: false,
	columns: {
		desc: true,
		bonus: true,
		spent: true,
		remaining: true,
		total: true
	},
	upgrades: {
		holdToHatch: 0,
		epicHatchery: 0,
		epicIntHatchery: 0,
		videoDoubler: 0,
		epicClucking: 0,
		epicMultiplier: 0,
		cheaperContractors: 0,
		bustUnions: 0,
		labUpgrade: 0,
		siloCapacity: 0,
		internalHatcherySharing: 0,
		internalHatcheryCalm: 0,
		accountingTricks: 0,
		soulFood: 0,
		prestigeBonus: 0,
		droneRewards: 0,
		epicComfyNests: 0,
		transportationLobbyists: 0,
		prophecyBonus: 0,
		holdToResearch: 0,
		hyperloopStation: 0
	},
	increase: {
		holdToHatch: 0,
		epicHatchery: 0,
		epicIntHatchery: 0,
		videoDoubler: 0,
		epicClucking: 0,
		epicMultiplier: 0,
		cheaperContractors: 0,
		bustUnions: 0,
		labUpgrade: 0,
		siloCapacity: 0,
		internalHatcherySharing: 0,
		internalHatcheryCalm: 0,
		accountingTricks: 0,
		soulFood: 0,
		prestigeBonus: 0,
		droneRewards: 0,
		epicComfyNests: 0,
		transportationLobbyists: 0,
		prophecyBonus: 0,
		holdToResearch: 0,
		hyperloopStation: 0
	}
};

var totals = {
	cost: 0,
	levels: 0
};

// Upgrade Data
var upgrades = {
	holdToHatch: {
		costs: [10, 45, 80, 115, 150, 185, 220, 255, 290, 325, 360, 395, 430, 465, 500],
		title: "Hold to Hatch",
		desc: "Hold chicken button +2 chickens per second",
		bonusDesc: "+{VAL}/SEC",
		bonusVal: 2
	},
	epicHatchery: {
		costs: [2, 54, 107, 159, 212, 264, 317, 369, 422, 474, 527, 579, 632, 684, 737, 789, 842, 894, 947, 1000],
		title: "Epic Hatchery",
		desc: "Increase hatchery refill rate by 10%",
		bonusDesc: "+{VAL}%",
		bonusVal: 10
	},
	epicIntHatchery: {
		costs: [25, 155, 285, 415, 546, 676, 806, 936, 1067, 1197, 1327, 1457, 1588, 1718, 1848, 1978, 2109, 2239, 2369, 2500],
		title: "Epic Int. Hatcheries",
		desc: "Increase internal hatchery rate by 5%",
		bonusDesc: "+{VAL}%",
		bonusVal: 5
	},
	videoDoubler: {
		costs: [25, 250, 475, 700, 925, 1150, 1375, 1600, 1825, 2050, 2275, 2500],
		title: "Video Doubler Time",
		desc: "Increase video doubler time by 30 min.",
		bonusDesc: "+{VAL} min.",
		bonusVal: 30
	},
	epicClucking: {
		costs: [20, 282, 544, 806, 1068, 1330, 1592, 1854, 2116, 2378, 2641, 2903, 3165, 3427, 3689, 3951, 4213, 4475, 4737, 5000],
		title: "Epic Clucking",
		desc: "+0.1% egg value bonus for each running chicken",
		bonusDesc: "+{VAL}% / chicken",
		bonusVal: 0.1
	},
	epicMultiplier: {
		costs: [10, 110, 211, 312, 413, 514, 615, 716, 817, 918, 1019, 1120, 1220, 1321, 1422, 1523, 1624, 1725, 1826, 1927, 2028, 2129, 2230, 2330, 2431, 2532, 2633, 2734, 2835, 2936, 3037, 3138, 3239, 3340, 3440, 3541, 3642, 3743, 3844, 3945, 4046, 4147, 4248, 4349, 4450, 4550, 4651, 4752, 4853, 4954, 5055, 5156, 5257, 5358, 5459, 5560, 5660, 5761, 5862, 5963, 6064, 6165, 6266, 6367, 6468, 6569, 6670, 6770, 6871, 6972, 7073, 7174, 7275, 7376, 7477, 7578, 7679, 7780, 7880, 7981, 8082, 8183, 8284, 8385, 8486, 8587, 8688, 8789, 8890, 8990, 9091, 9192, 9293, 9394, 9495, 9596, 9697, 9798, 9899, 10000],
		title: "Epic Multiplier",
		desc: "Increase max running chicken bonus by 2.0x!",
		bonusDesc: "+{VAL}x MAX",
		bonusVal: 2
	},
	cheaperContractors: {
		costs: [20, 240, 460, 680, 900, 1120, 1340, 1560, 1780, 2000],
		title: "Cheaper Contractors",
		desc: "Reduce hen house build costs by 5%",
		bonusDesc: "-{VAL}%",
		bonusVal: 5
	},
	bustUnions: {
		costs: [20, 240, 460, 680, 900, 1120, 1340, 1560, 1780, 2000],
		title: "Bust Unions",
		desc: "Reduce vehicle hire costs by 5%",
		bonusDesc: "-{VAL}%",
		bonusVal: 5
	},
	labUpgrade: {
		costs: [25, 244, 463, 683, 902, 1122, 1341, 1561, 1780, 2000],
		title: "Lab Upgrade",
		desc: "Reduce research costs by 5%",
		bonusDesc: "-{VAL}%",
		bonusVal: 5
	},
	siloCapacity: {
		costs: [500, 526, 552, 578, 605, 631, 657, 684, 710, 736, 763, 789, 815, 842, 868, 894, 921, 947, 973, 1000],
		title: "Silo Capacity",
		desc: "Increase away time per silo by 6 min",
		bonusDesc: "+{VAL} min.",
		bonusVal: 6
	},
	internalHatcherySharing: {
		costs: [250, 500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500],
		title: "Internal Hatchery Sharing",
		desc: "Full habs' internal hatcheries send +10% chicks to other habs",
		bonusDesc: "{VAL}% shared",
		bonusVal: 10
	},
	internalHatcheryCalm: {
		costs: [10, 114, 219, 324, 428, 533, 638, 743, 847, 952, 1057, 1162, 1266, 1371, 1476, 1581, 1685, 1790, 1895, 2000],
		title: "Internal Hatchery Calm",
		desc: "Increase internal hatchery rate by 10% while away",
		bonusDesc: "+{VAL}%",
		bonusVal: 10
	},
	accountingTricks: {
		costs: [250, 447, 644, 842, 1039, 1236, 1434, 1631, 1828, 2026, 2223, 2421, 2618, 2815, 3013, 3210, 3407, 3605, 3802, 4000],
		title: "Accounting Tricks",
		desc: "Increase farm valuation by 5%",
		bonusDesc: "+{VAL}%",
		bonusVal: 5
	},
	soulFood: {
		costs: [500, 532, 564, 597, 629, 661, 694, 726, 758, 791, 823, 856, 888, 920, 953, 985, 1017, 1050, 1082, 1115, 1147, 1179, 1212, 1244, 1276, 1309, 1341, 1374, 1406, 1438, 1471, 1503, 1535, 1568, 1600, 1633, 1665, 1697, 1730, 1762, 1794, 1827, 1859, 1892, 1924, 1956, 1989, 2021, 2053, 2086, 2118, 2151, 2183, 2215, 2248, 2280, 2312, 2345, 2377, 2410, 2442, 2474, 2507, 2539, 2571, 2604, 2636, 2669, 2701, 2733, 2766, 2798, 2830, 2863, 2895, 2928, 2960, 2992, 3025, 3057, 3089, 3122, 3154, 3187, 3219, 3251, 3284, 3316, 3348, 3381, 3413, 3446, 3478, 3510, 3543, 3575, 3607, 3640, 3672, 3705, 3737, 3769, 3802, 3834, 3866, 3899, 3931, 3964, 3996, 4028, 4061, 4093, 4125, 4158, 4190, 4223, 4255, 4287, 4320, 4352, 4384, 4417, 4449, 4482, 4514, 4546, 4579, 4611, 4643, 4676, 4708, 4741, 4773, 4805, 4838, 4870, 4902, 4935, 4967, 5000],
		title: "Soul Food",
		desc: "Increase bonus per soul egg by +1%",
		bonusDesc: "+{VAL}%",
		bonusVal: 1
	},
	prestigeBonus: {
		costs: [4000, 4105, 4210, 4315, 4421, 4526, 4631, 4736, 4842, 4947, 5052, 5157, 5263, 5368, 5473, 5578, 5684, 5789, 5894, 6000],
		title: "Prestige Bonus",
		desc: "Earn +10% soul eggs when you prestige",
		bonusDesc: "+{VAL}%",
		bonusVal: 10
	},
	droneRewards: {
		costs: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000],
		title: "Drone Rewards",
		desc: "Increase your chances for bigger drone rewards by 10%",
		bonusDesc: "+{VAL}%",
		bonusVal: 10
	},
	epicComfyNests: {
		costs: [250, 2868, 5486, 8105, 10723, 13342, 15960, 18578, 21197, 23815, 26434, 29052, 31671, 34289, 36907, 39526, 42144, 44763, 47381, 50000],
		title: "Epic Comfy Nests",
		desc: "Increase egg laying rate by 5%",
		bonusDesc: "+{VAL}%",
		bonusVal: 5
	},
	transportationLobbyists: {
		costs: [250, 379, 508, 637, 767, 896, 1025, 1155, 1284, 1413, 1543, 1672, 1801, 1931, 2060, 2189, 2318, 2448, 2577, 2706, 2836, 2965, 3094, 3224, 3353, 3482, 3612, 3741, 3870, 4000],
		title: "Transportation Lobbyists",
		desc: "Increase vehicle capacity by 5%",
		bonusDesc: "+{VAL}%",
		bonusVal: 5
	},
	prophecyBonus: {
		costs: [100000, 325000, 550000, 775000, 1000000],
		title: "Prophecy Bonus",
		desc: "Increase bonus per egg of prophecy by +1% (compounding)",
		bonusDesc: "+{VAL}%",
		bonusVal: 1
	},
	holdToResearch: {
		costs: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000],
		title: "Hold to Research",
		desc: "Increase repetition rate when holding down research button by 25%",
		bonusDesc: "+{VAL}%",
		bonusVal: 25
	},
	hyperloopStation: {
		costs: [50000],
		title: "Hyperloop Train",
		desc: "Purchasing Hyperloop trains requires you to first construct a hyperloop station",
		bonusDesc: "✓",
		bonusVal: 0
	}
};


// Data persistence helpers
function save() {
	localStorage.userData = JSON.stringify(userData);
}

function reset() {
	userData = JSON.parse(JSON.stringify(initialUserData));
	save();
	populateInputs();
}

function load(firsttime, fromstring) {
	// Should prevent errors when the userData structure has changed compared to the user's localstorage.
	// Also REAL fancy because thanks javascript.
	var localData = JSON.parse(fromstring || localStorage.userData);
	var initialData = JSON.parse(JSON.stringify(initialUserData));

	var localColumns = JSON.parse(JSON.stringify(localData.columns || {}));
	var initialColumns = JSON.parse(JSON.stringify(initialUserData.columns));

	var localUpgrades = JSON.parse(JSON.stringify(localData.upgrades || {}));
	var initialUpgrades = JSON.parse(JSON.stringify(initialUserData.upgrades));

	var localIncrease = JSON.parse(JSON.stringify(localData.increase || {}));
	var initialIncrease = JSON.parse(JSON.stringify(initialUserData.increase));

	userData = _.extend(initialData, localData);
	userData.upgrades = _.extend(initialUpgrades, localUpgrades);
	userData.columns = _.extend(initialColumns, localColumns);
	userData.increase = _.extend(initialIncrease, localIncrease);

	if (!firsttime) {
		populateInputs();
	}
}

function exportBase64() {
	var exportfield = document.querySelector("#exportfield");
	exportfield.value = btoa(JSON.stringify(userData));
	exportfield.select();
}

function loadBase64() {
	load(false, atob(document.querySelector("#exportfield").value));
}


// Helper methods for dynamic data calculations, refreshing UI
function calculate() {
	var totalSpentLevels = 0;
	var totalSpent = 0;
	var totalDesiredLevels = 0;
	var totalDesiredCost = 0;
	_.each(upgrades, function(upgrade, key) {
		// Statistics
		var spent = 0;
		for (i=0; i<=userData.upgrades[key]-1; i++) {
			spent += upgrade.costs[i];
		}
		totalSpentLevels += userData.upgrades[key];
		totalSpent += spent;
		document.querySelector("#spent-"+key).innerHTML = spent.toLocaleString();
		document.querySelector("#remaining-"+key).innerHTML = (upgrade.total - spent).toLocaleString();
		document.querySelector("#bonus-"+key).innerHTML = userData.upgrades[key] == 0 ? "&ndash;" : upgrade.bonusDesc.replace("{VAL}", Math.round((upgrade.bonusVal * userData.upgrades[key]) * 100) / 100);

		// Futures
		var increaseCost = 0;
		var desiredLevels = userData.increase[key];
		var discountMultiplier = (key !== "hyperloopStation" ? userData.epicDiscount/100 : 0);
		for (i=userData.upgrades[key]; i<userData.upgrades[key]+desiredLevels; i++) {
			increaseCost += upgrade.costs[i] - Math.floor(upgrade.costs[i] * discountMultiplier);
		}
		totalDesiredLevels += userData.increase[key];
		totalDesiredCost += increaseCost;
		document.querySelector("#fut-cost-"+key).innerHTML = increaseCost === 0 ? "&ndash;" : increaseCost.toLocaleString();
		var nextCost = upgrade.costs[userData.upgrades[key]] - Math.floor(upgrade.costs[userData.upgrades[key]] * discountMultiplier);
		document.querySelector("#fut-next-"+key).innerHTML = nextCost ? nextCost.toLocaleString() : "&ndash;";

		// Buy?
		document.querySelector("#fut-buy-"+key).disabled = upgrade.costs.length === userData.upgrades[key] || userData.eggs < nextCost;

		// Visiblity if complete
		var upgradeRow = document.querySelector("#upgradeRow-"+key);
		var planRow = document.querySelector("#planRow-"+key);
		if (userData.hideCompleted && userData.upgrades[key] >= upgrade.costs.length) {
			planRow.classList.add("hide");
			upgradeRow.classList.add("hide");
		}
		else {
			planRow.classList.remove("hide");
			upgradeRow.classList.remove("hide");
		}
	});
	var totalLevelString = totalSpentLevels + " / " + totals.levels;
	document.querySelector("#total-levels").innerHTML = totalLevelString;
	document.querySelector("#total-levels-2").innerHTML = totalLevelString;
	document.querySelector("#total-spent").innerHTML = totalSpent.toLocaleString();
	document.querySelector("#total-remaining").innerHTML = (totals.cost - totalSpent).toLocaleString();
	document.querySelector("#total-desired-cost").innerHTML = totalDesiredCost.toLocaleString();
	document.querySelector("#total-desired-levels").innerHTML = totalDesiredLevels;

	// Piggy Bank calculations
	var piggyBonus = getPiggyBankBonus(userData.piggyLevel);
	var piggyBonusCalc = Math.ceil(userData.piggyBank*(piggyBonus/100));
	var piggyCrackTotal = userData.piggyBank + piggyBonusCalc;
	document.querySelector("#piggybonus").innerHTML = piggyBonus;
	document.querySelector("#piggybonuscalc").innerHTML = piggyBonusCalc.toLocaleString();
	document.querySelector("#piggycracktotal").innerHTML = piggyCrackTotal.toLocaleString();

	document.querySelector("#crackpiggy").disabled = userData.piggyBank < 300;

	// Update truckload options based on piggy level
	var truckloadQty = (10000+(userData.piggyLevel-1)*2500);
	document.querySelector("#opt-truck").innerHTML = "Truckload ("+truckloadQty.toLocaleString()+" @ $19.99)";
	var palletQty = (4400+(userData.piggyLevel-1)*1100);
	document.querySelector("#opt-pallet").innerHTML = "Pallet ("+palletQty.toLocaleString()+" @ $9.99)";
	var crateQty = (2000+(userData.piggyLevel-1)*500);
	document.querySelector("#opt-crate").innerHTML = "Big Crate ("+crateQty.toLocaleString()+" @ $4.99)";

	// Calculate remaining eggs
	var remaining = 0;
	var usedPiggyCrack = false;
	if (userData.epicCalcOnlyDesired) {
		remaining = totalDesiredCost;
	}
	else {
		// Recalculate a full total including discount
		_.each(upgrades, function(upgrade, key) {
			var discountMultiplier = (key !== "hyperloopStation" ? userData.epicDiscount/100 : 0);
			for (i=userData.upgrades[key]; i<upgrades[key].costs.length; i++) {
				remaining += upgrade.costs[i] - Math.floor(upgrade.costs[i] * discountMultiplier);
			}
		});
	}
	remaining -= userData.eggs;
	if (userData.epicCalcIncludePiggy && remaining > 0 && piggyCrackTotal > 0) {
		remaining -= piggyCrackTotal;
		usedPiggyCrack = true;
	}
	remaining = Math.max(remaining, 0);

	document.querySelector("#fut-egg-remain").innerHTML = remaining.toLocaleString();

	// Calculate purchase cost
	var piggyCost = 4.99 - (4.99 * userData.piggyDiscount/100).toFixed(2);
	document.querySelector("#piggycost").innerHTML = piggyCost.toLocaleString(undefined, { minimumFractionDigits: 2 });

	var purchaseQty = 1;
	var purchasePrice = 0;
	if (userData.epicCalcTruckType === 0) {
		purchaseQty = truckloadQty;
		purchasePrice = 19.99;
	}
	else if (userData.epicCalcTruckType === 1) {
		purchaseQty = palletQty;
		purchasePrice = 9.99;
	}
	else if (userData.epicCalcTruckType === 2) {
		purchaseQty = crateQty;
		purchasePrice = 4.99;
	}
	var remainingCost = Math.ceil(remaining/purchaseQty)*purchasePrice;
	if (usedPiggyCrack) {
		remainingCost += piggyCost;
	}

	document.querySelector("#fut-egg-remain-cost").innerHTML = "$"+(remainingCost.toLocaleString(undefined, { minimumFractionDigits: 2 }));

	// Re-stripe tables
	stripeTables();
}

function getPiggyBankBonus(level) {
	if (level === 1) {
		return 2;
	}
	if (level === 2) {
		return 25;
	}
	return 10*(level+1);
}

function populateInputs() {
	_.each(upgrades, function(upgrade, key) {
		document.querySelector("#lvl-"+key).value = userData.upgrades[key];
		updateLevel(key, true);
		document.querySelector("#fut-inc-"+key).value = userData.increase[key];
		document.querySelector("#fut-inc-"+key).max = upgrade.costs.length - userData.upgrades[key];
		updateIncrease(key);
	});
	_.each(userData.columns, function(value, key) {
		document.querySelector("#chk"+key).checked = userData.columns[key];
		updateColumn(key, userData.columns[key]);
	});
	document.querySelector("#sethidecompleted").checked = userData.hideCompleted;
	document.querySelector("#goldeneggs").value = userData.eggs;
	document.querySelector("#piggylevel").value = userData.piggyLevel;
	document.querySelector("#piggybank").value = userData.piggyBank;
	document.querySelector("#piggydiscount").value = userData.piggyDiscount;
	document.querySelector("#chkcalcdesired").checked = userData.epicCalcOnlyDesired;
	document.querySelector("#chkcalcpiggy").checked = userData.epicCalcIncludePiggy;
	document.querySelector("#optcalctrucktype").value = userData.epicCalcTruckType;
	document.querySelector("#epicdiscount").value = userData.epicDiscount;
	calculate();
}

function buy(key) {
	document.querySelector("#lvl-"+key).value++;
	document.querySelector("#fut-inc-"+key).value--;
	var discountMultiplier = (key !== "hyperloopStation" ? userData.epicDiscount/100 : 0);
	document.querySelector("#goldeneggs").value -= upgrades[key].costs[userData.upgrades[key]] - Math.floor(upgrades[key].costs[userData.upgrades[key]] * discountMultiplier);

	userUpdateIncrease(key);
	userUpdateLevel(key, true);
	userUpdateEggs();
}

function crackThePiggy() {
	var eggs = document.querySelector("#goldeneggs");
	var level = document.querySelector("#piggylevel");
	var bank = document.querySelector("#piggybank");

	var piggyBonus = getPiggyBankBonus(userData.piggyLevel);
	var piggyBonusCalc = Math.ceil(userData.piggyBank*(piggyBonus/100));

	eggs.value = parseInt(eggs.value) + userData.piggyBank + piggyBonusCalc;
	bank.value = 0;
	level.value++;
	userUpdateEggs();
}

function userUpdateColumn(key, show) {
	updateColumn(key, show);
	userData.columns[key] = show;
	calculate();
	save();
}

function setRowsHidden(value) {
	userData.hideCompleted = value;
	calculate();
	save();
}

function updateColumn(key, show) {
	var items = document.querySelectorAll(".show"+key);
	for (var i=0; i<items.length; i++) {
		var item = items[i];
		// One would think I could use classList.toggle with a forced parameter, but IE11 proved me wrong.
		if (show) {
			item.classList.remove("hide");
		}
		else {
			item.classList.add("hide");
		}
	}
}

function userUpdateLevel(key, isA) {
	var newVal = updateLevel(key, isA);
	userData.upgrades[key] = newVal;

	document.querySelector("#fut-inc-"+key).max = upgrades[key].costs.length - newVal;
	userUpdateIncrease(key);

	calculate();
	save();
}

function updateLevel(key, isA) {
	var inputA = document.querySelector("#lvl-"+key);
	var inputB = document.querySelector("#fut-lvl-"+key);
	var newVal = isA ? (parseInt(inputA.value) || 0) : (parseInt(inputB.value) || 0);
	newVal = Math.min(Math.max(newVal, 0), upgrades[key].costs.length);
	inputA.value = newVal;
	inputB.value = newVal;

	return newVal;
}

function userUpdateIncrease(key) {
	var newVal = updateIncrease(key);
	userData.increase[key] = newVal;
	calculate();
	save();
}

function updateIncrease(key) {
	var input = document.querySelector("#fut-inc-"+key);
	var newVal = parseInt(input.value) || 0;
	newVal = Math.min(Math.max(newVal, 0), (upgrades[key].costs.length - userData.upgrades[key]));
	input.value = newVal;
	return newVal;
}

function userUpdateEggs() {
	var eggs = document.querySelector("#goldeneggs");
	var newEggs = parseInt(eggs.value) || 0;
	newEggs = Math.max(newEggs, 0);
	eggs.value = newEggs;
	userData.eggs = newEggs;

	var bank = document.querySelector("#piggybank");
	var newBank = parseInt(bank.value) || 0;
	newBank = Math.max(newBank, 0);
	bank.value = newBank;
	userData.piggyBank = newBank;

	var level = document.querySelector("#piggylevel");
	var newLevel = parseInt(level.value) || 1;
	newLevel = Math.max(newLevel, 1);
	level.value = newLevel;
	userData.piggyLevel = newLevel;

	var piggyDiscount = document.querySelector("#piggydiscount");
	var newpiggyDiscount = parseInt(piggyDiscount.value) || 0;
	newpiggyDiscount = Math.min(Math.max(newpiggyDiscount, 0), 100);
	piggyDiscount.value = newpiggyDiscount;
	userData.piggyDiscount = newpiggyDiscount;

	var calcDesired = document.querySelector("#chkcalcdesired");
	var newCalcDesired = calcDesired.checked || false;
	calcDesired.checked = newCalcDesired;
	userData.epicCalcOnlyDesired = newCalcDesired;

	var calcPiggy = document.querySelector("#chkcalcpiggy");
	var newCalcPiggy = calcPiggy.checked || false;
	calcPiggy.checked = newCalcPiggy;
	userData.epicCalcIncludePiggy = newCalcPiggy;

	var calcTruck = document.querySelector("#optcalctrucktype");
	var newTruck = parseInt(calcTruck.value) || 0;
	newTruck = Math.min(Math.max(newTruck, 0), 2);
	calcTruck.value = newTruck;
	userData.epicCalcTruckType = newTruck;

	var discount = document.querySelector("#epicdiscount");
	var newDiscount = parseInt(discount.value) || 0;
	newDiscount = Math.min(Math.max(newDiscount, 0), 100);
	discount.value = newDiscount;
	userData.epicDiscount = newDiscount;

	calculate();
	save();
}

function stripeTables() {
	stripeRows(document.querySelectorAll("#stats-table tr:not(.hide)"));
	stripeRows(document.querySelectorAll("#future-table tr:not(.hide)"));
}

function stripeRows(rows) {
	for (var i=0; i<rows.length; i++) {
		if (i%2===0) {
			rows[i].classList.add('odd');
		}
		else {
			rows[i].classList.remove('odd');
		}
	};
}

// Initialize data
window.onload = function() {
	if (localStorage.userData === undefined) {
		localStorage.userData = JSON.stringify(initialUserData);
	}

	_.each(upgrades, function(upgrade, key) {
		upgrade.total = upgrade.costs.reduce(function(prev, cur){ return prev+cur; } );
		totals.cost += upgrade.total;
		totals.levels += upgrade.costs.length;
	});
	load(true);

	// Pre-compile and render template
	var template = _.template(
		document.querySelector("script.template").innerHTML
	);
	document.querySelector("#content").innerHTML = template({
		userData: userData,
		upgrades: upgrades,
		totals: totals
	});

	populateInputs();

	// Set up events
	_.each(upgrades, function(upgrade, key) {
		document.querySelector("#lvl-"+key).addEventListener("change", function() { userUpdateLevel(key, true); });
		document.querySelector("#fut-lvl-"+key).addEventListener("change", function() { userUpdateLevel(key, false); });
		document.querySelector("#fut-inc-"+key).addEventListener("change", function() { userUpdateIncrease(key); });
		document.querySelector("#fut-buy-"+key).addEventListener("change", function() { buy(key); });
	});

	_.each(userData.columns, function(val, key) {
		document.querySelector("#chk"+key).addEventListener("change", function(ev) { userUpdateColumn(key, ev.target.checked); });
	});

	document.querySelector("#sethidecompleted").addEventListener("change", function(ev) { setRowsHidden(ev.target.checked); });

	var exportfield = document.querySelector("#exportfield");
	exportfield.onfocus = function() {
		exportfield.select();
	};

	document.querySelector("#goldeneggs").addEventListener("change", userUpdateEggs);
	document.querySelector("#piggylevel").addEventListener("change", userUpdateEggs);
	document.querySelector("#piggybank").addEventListener("change", userUpdateEggs);
	document.querySelector("#piggydiscount").addEventListener("change", userUpdateEggs);
	document.querySelector("#chkcalcdesired").addEventListener("change", userUpdateEggs);
	document.querySelector("#chkcalcpiggy").addEventListener("change", userUpdateEggs);
	document.querySelector("#optcalctrucktype").addEventListener("change", userUpdateEggs);
	document.querySelector("#epicdiscount").addEventListener("change", userUpdateEggs);
}
