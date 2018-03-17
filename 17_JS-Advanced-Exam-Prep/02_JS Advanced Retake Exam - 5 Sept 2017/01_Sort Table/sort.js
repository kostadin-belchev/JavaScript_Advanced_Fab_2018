function sort(colIndex, descending) {
    let body = $('tbody'); // no need to declare it seperately for performance since we have a if else tree
    console.log(body);
    let items = $('tbody > tr');
    //console.log(items);
    
    if (colIndex === 0) { // order by name
        if (descending) { // order by Name in descending order
            items.sort((a,b) => {
                //console.log(a);
                let nameA = a.getElementsByTagName('td')[0].textContent;
                let nameB = b.getElementsByTagName('td')[0].textContent;
                //console.log(nameA);
                return nameB.localeCompare(nameA);
            });
            body.append(items);
        } else { // order by name in ascending order
            items.sort((a,b) => {
                //console.log(a);
                let nameA = a.getElementsByTagName('td')[0].textContent;
                let nameB = b.getElementsByTagName('td')[0].textContent;
                //console.log(nameA);
                return nameA.localeCompare(nameB);
            });
            body.append(items);
        }
    } else { // order by price
        if (descending) { // order by Price in descending order
            items.sort((a,b) => {
                //console.log(a);
                let priceA = Number(a.getElementsByTagName('td')[1].textContent);
                let priceB = Number(b.getElementsByTagName('td')[1].textContent);
                //console.log(nameA);
                return priceB - priceA;
            });
            body.append(items);
        } else { // order by Price in ascending order
            items.sort((a,b) => {
                //console.log(a);
                let priceA = Number(a.getElementsByTagName('td')[1].textContent);
                let priceB = Number(b.getElementsByTagName('td')[1].textContent);
                //console.log(nameA);
                return priceA - priceB;
            });
            body.append(items);
        }
    }
}