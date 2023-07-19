var budgetArr = [];

function addItem() {
    var itemObj = {
        myItem: budgetItem.value,
        myPrice: budgetPrice.value
    }
    if (budgetItem.value != "" && budgetPrice.value != "" ) {
        budgetArr.push(itemObj)
        console.log(budgetArr);
        budgetItem.value = ""
        budgetPrice.value=""
        displayItem();
        console.log(itemObj);
        
    }
    else {
        display.innerHTML = `<h2 style= "margin-left: 150px; color: red"> Please Fill in all spaces</h2>`;
        console.log("Space cannot be Empty");
    }
}

function displayItem() {
    document.getElementById("itemTable").style.display = "table"
    itemTable.innerHTML = ""
    itemTable.innerHTML = `
        <tr>
            <th>S/N</th>
            <th>Budget Item</th>
            <th>Budget Price</th>
            <th>Actions</th>
        </tr>
    `
    for (i = 0; i < budgetArr.length; i++) {
        itemTable.innerHTML +=  `
        <tr>
            <td>${i+1}</td>
            <td>${budgetArr[i].myItem}</td>
            <td>${budgetArr[i].myPrice}</td>
            <td>
                <button class= "btn btn-danger" onclick= "deleteOne(${i})">Delete</button>
            </td>
        </tr>
    `
    }
}

function deleteOne(index) {
    console.log(`${index}`);
    budgetArr.splice(index,1)
    displayItem()
}
