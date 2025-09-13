import "./product.css"

const products = [
    {
        name: "I phone",
        price: "75000",
        company: "Apple",
        categories: "electronics"
    },
    {
        name: "Hayabusa",
        price: "1750000",
        company: "Suzuki",
        categories: "vehicle"
    },
    {
        name: "Laptop",
        price: "75000",
        company: "Dell",
        categories: "electronics"
    },
    {
        name: "Ear Buds",
        price: "7500",
        company: "Boat",
        categories: "electronics"
    },
    {
        name: "Car",
        price: "7500000",
        company: "BMW",
        categories: "vehicle"
    },
    {
        name: "Thumps Up",
        price: "90",
        company: "Coca-Cola",
        categories: "snacks"
    },
    {
        name: "Jeans",
        price: "5000",
        company: "Roadster",
        categories: "wearable"
    },
    {
        name: "Cricket Bat",
        price: "4500",
        company: "GC",
        categories: "sports"
    },
    {
        name: "Ball",
        price: "90",
        company: "Daynite",
        categories: "sports"
    },
    {
        name: "Chocolate",
        price: "250",
        company: "Cadbury",
        categories: "snacks"
    },
    {
        name: "Paalak",
        price: "50",
        categories: "kitchen"
    },
    {
        name: "Banana",
        price: "50",
        categories: "kitchen"
    },
    {
        name: "Fish",
        price: "150",
        categories: "kitchen"
    },
    {
        name: "Dog",
        price: "5000",
        categories: "animal"
    },
    {
        name: "Surf Exel",
        price: "5000",
        company:"Ariel",
        categories: "detergent"
    }
]

// export default function Cards(){
//     return(
//         <div>
//             <h2>Product List</h2>
//             <div className="container">

//             {products.map((product) => (
//                 <div className="card">
//                     <div className="name"><strong>Name: </strong>{product.name}</div>
//                     <div className="price"><strong>Price: ₹</strong>{product.price}</div>
//                     <div className="company"><strong>Company: </strong>{product.company}</div>
//                 </div>
//             ))}
//         </div>
//         </div>
//     )
// }

export default function Cards() {
    return (
        <div style={{border:"2px solid black", marginTop:"20px"}}>
            <h2>Products</h2>
            
                <div>
                <select name="" id="">
                    {products.map((category) => (
                    <option value="all">{category.categories}</option>   
                ))}
                </select>
            </div>
            
            <div className="container">
                {products.map((product) => (
                    <div className="card">
                        {Object.entries(product).map(([Key, value]) => (
                            <div>
                                <strong>{Key}: </strong>{value}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

// let product = products[2];
// let keys = Object.keys(product);
// console.log(keys)

// for(i=0; i<keys.length, i++){
//     product.keys[i]
// }
