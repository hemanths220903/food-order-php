const product =[
    {
        id:0,
        image:'burger.jpeg',
        title:'burger',
        price:90,
    },
    {
        id:1,
        image:'pizza.jpeg',
        title:'pizza',
        price:99,  
    },
    {
        id:2,
        image:'salad.jpeg',
        title:'salad',
        price:50,
    },
    {
        id:3,
        image:'hydrabad_biriyani.jpeg',
        title:'hydrabad biriyani',
        price:250,
    },
    {
        id:4,
        image:'idly.jpeg',
        title:'idly',
        price: 50,
    },
    {
        id:5,
        image:'pasta.jpeg',
        title:'pasta',
        price:180,
    },
    {
        id:6,
        image:'ice_cream.jpeg',
        title:'ice cream',
        price:60,
    },
    {
        id:7,
        image:'infused_chichen.jpeg',
        title:'infused chicken',
        price:980,
    },
    {
        id:8,
        image:'south_indian_food.jpg',
        title:'full meals',
        price: 200,
    },
    {
        id:9,
        image:'shawarma.png',
        title:'shawarma',
        price:120,
    },
    {
        id:10,
        image:'chat_item.jpg',
        title:'chat items',
        price:60,
    },
    {
        id:11,
        image:'waffle.jpg',
        title:'waffle',
        price:220,
    },
    {
        id:12,
        image:'mojito.jpg',
        title:'mojito',
        price:220,
    },
    {
        id:13,
        image:'chilly_parotta.jpg',
        title:'chilly parotta',
        price:180,
    },
    {
        id:14,
        image:'grill.jpeg',
        title:'grill chicken',
        price:420,
    },
    {
        id:15,
        image:'BBQ.jpg',
        title:'BBQ',
        price:500,
    },
    {
        id:16,
        image:'chickwn_wings.jpg',
        title:'chicken wings',
        price:180,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var{image, title, price}= item;
        return(
        `<div class= 'box'>
            <div class='img-box' >
            <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
    }).join('')

    var cart =[];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }

    function delElement(a){
        cart.splice(a, 1);
        displaycart();
    }

    function displaycart(a){
        let j = 0,total=0;
        document.getElementById("count").innerHTML=cart.length;
        if(cart.length==0){
            document.getElementById('cartItem').innerHTML="Your cart is empty";
            document.getElementById("total").innerHTML="₹ "+"";
        }
        else{
            document.getElementById("cartItem").innerHTML=cart.map((items)=>
            {
                var{image,title,price} = items;
                total=total+price;
                document.getElementById("total").innerHTML= "₹ "+total+"";
                return(
                    `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                        </div>
                        <p style='fon-size:12px;'>${title}</p>
                        <h2 style='font-size:15px;'>₹ ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                );
            }).join('');
        }
        }
    
