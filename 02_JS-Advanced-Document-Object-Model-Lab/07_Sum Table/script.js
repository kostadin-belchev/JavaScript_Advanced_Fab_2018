function sum() {
    let tableTrElements = document.querySelectorAll('table tr');
    let totalCost = 0;
    for (let i = 1; i < tableTrElements.length; i++) {
        const element = tableTrElements[i];
        let cols = element.children;
        let cost = cols[cols.length - 1].textContent;
        totalCost += Number(cost);
    }
    document.getElementById('sum').textContent = totalCost;
}