console.log("JS");


let a = 5
a = 15
console.log( a );

const b = 3
// b = 45 // error
console.log( b );

// let yil = prompt( "a" )
// console.log(2023 - yil);


let num = 15 
let big = 15n
console.log( typeof num );
console.log( typeof big);

let s = Symbol(15)
let s1 = Symbol("salom")
console.log( typeof s);


// Reference -> object
// 1. array
// 2. object

// array -> index and value
let fruits = ["apple", "banana", "ananas", 25, true]
console.log( fruits );
console.log( fruits[1]);
console.log( fruits [3] * 2 );


// object -> key and value 
let user = {
    ism: "Muhammad_Sodiq",
    username: "Muhammadsodiq_5712009",
    parol: 123456789
}
console.log( user );
console.log( user.parol);

let arr = [20, "salom", true, null, [25, 30], {name:"John"},
    {
        ism: "Mike",
        address: {
            country:"USA",
            city:"New York"
        }
    },
    {
        a: 15,
        b: [
            true, {
                c:"mana shu chiqish kerak"
            }
        ]

    }
]

console.log( arr );
console.log( arr[4][1]);
console.log( arr[5].name);
console.log( arr[6].address.city);
console.log( arr[7].b[1].c);


let instaBase = [
    {
        name: "Boburmirzo",
        username:"boburmirzo_brm",
        password: "********",
        bio: "Trust but Verify",
        avatar:"https://",
        following: ["id56156165", "id151231313"],
        followers: ["id56156165", "id151231313", "id151231313", "id-selena"],
        posts: [
            {
                url: "https",
                likes: ["id1231321", "id1561561"],
                comments: [
                    {
                        name: "Sardor",
                        msg: "ustoz codelarni tawlavori"
                    },
                    {
                        name: "Muhammadsodiq",
                        msg: "Bugun darsmi"
                    },
                ]
            }
        ]
    }
]

console.log( instaBase [0].followers[3]);
console.log( instaBase [0].posts[0].comments[1].msg);





















