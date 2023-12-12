/*
 
  <------- DONE -------->

  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let arr = []
  transactions.forEach(element => {
        let cat = element.category;
        let flag = true;
        console.log(element.category)
        arr.forEach((ele)=>{
           if(ele.category==cat){
              flag = false;
              ele.price = ele.price + element.price;
           }
        })
        if(flag){
            let obj = {
               category:element.category,
               price:element.price
            }
            arr.push(obj);
        }
  });
  return ans;
}

calculateTotalSpentByCategory()

module.exports = calculateTotalSpentByCategory;
