
// node 6_Array_Inside_Object.js
const list = [
    {
        name: "mac",
        price: 30000,
        color: "blue",
        status: true
    },

    {
        name: "sony",
        price: 40000,
        color: "green",
        status: false
    },

    {
        name: "samsung",
        price: 222,
        color: "yellow",
        status: true
    }, {
        name: "hp",
        price: 30000,
        color: "blue",
        status: true
    },
    {
        name: "iphone",
        price: 30000,
        color: "blue",
        status: true
    }

];

console.log(list);

for (var i = 0; i < list.length; i++) {
    console.log(list[i].name, list[i].price, list[i].color, list[i].status);
}