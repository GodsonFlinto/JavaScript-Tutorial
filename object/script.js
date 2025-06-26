let item = {
    name: 'phone',
    price: 20000,
    quantity: 1,
    categories: ['phone','tablet','smartwatch'],
    dimensions:{   //object inside object
        length: 5,
        breadth: 10,
        height: 6
    },
    addtoCart(){
        console.log("Item added successfully.")
    }
}
console.log(item.categories[1])
console.log(item.dimensions.height)
item.addtoCart();

console.log(item)

//another way to create object
let item2 = new Object()
item2.name = 'Charger'
item2.price = 200
item2.quantity = 2
console.log(item2)

//dot operator
console.log(item.price)
item.price = 15000
console.log(item.price)
console.log(item['quantity'])
item['newitem'] = 'Laptop'   // or item.newitem = 'Laptop
console.log(item.newitem)