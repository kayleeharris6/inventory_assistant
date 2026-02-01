let itemname = "cookie";
let unitcost = 1.50;
let currentstock = 120;
let reorderlevel = 100;
let targetstock = 200;
let weeklydemand = 30;
let supplierleadtimeweeks = 5; // in weeks

let weeksofcover = weeklydemand > 0 ? currentstock / weeklydemand : Infinity; 
let stockdeficit = Math.max(0, targetstock - currentstock);
let reorderquantity = (currentstock <= reorderlevel || weeksofcover < supplierleadtimeweeks) ? Math.ceil(stockdeficit) : 0;
let estimatedreordercost = reorderquantity * unitcost;
let reordernow = currentstock <= reorderlevel || weeksofcover < supplierleadtimeweeks;

console.log("cookie");
console.log(`weeks of cover: ${weeksofcover.toFixed(2)} weeks`);
console.log(`reorder now: ${reordernow}`);
console.log(`recommended reorder quantity: ${reorderquantity} units`);
console.log(`estimated reorder cost: $${estimatedreordercost}`);
