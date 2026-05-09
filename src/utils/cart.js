export function getCart() {
	const token = localStorage.getItem("token");
	const cartKey = token ? `cart_${token}` : "cart_guest";

	const cartString = localStorage.getItem(cartKey);

	if (cartString == null) {
		localStorage.setItem(cartKey, "[]");
		return [];
	} else {
		const cart = JSON.parse(cartString);
		return cart;
	}
}

const sampleCart = [
	{
		product: {
			productId: "12345",
			name: "Product 1",
			labelledPrice: 1000,
			price: 800,
			image: "https://via.placeholder.com/150",
		},
		qty: 1,
	},
	{
		product: {
			productId: "67890",
			name: "Product 2",
			labelledPrice: 2000,
			price: 1500,
			image: "https://via.placeholder.com/150",
		},
		qty: 1,
	},
];

export function addToCart(product , qty){
	const token = localStorage.getItem("token");
	const cartKey = token ? `cart_${token}` : "cart_guest";

    const cart = getCart();

    const existingProductIndex = cart.findIndex(
        (item)=>{
            return item.product.productId == product.productId
        }
    );

    if(existingProductIndex ==  -1){

        if(qty <= 0){
            console.error("Quantity must be greater than 0");
            return;
        }

        cart.push(
            {
                product : {
                    productId : product.productId,
                    name : product.name,
                    labelledPrice : product.labelledPrice,
                    price : product.price,
                    image : product.images[0]
                },
                qty : qty
            }
        )

    }else{


        const newQty = cart[existingProductIndex].qty + qty

        if(newQty <= 0){            
            //remove product from cart
            cart.splice(existingProductIndex , 1)

        }else{

            cart[existingProductIndex].qty = newQty

        }
        
    }

    const cartString = JSON.stringify(cart);

    localStorage.setItem(cartKey, cartString);

}

export function getCartTotal(cart){
    
    let total = 0 

    cart.forEach(
        (cartItem)=>{
                //total = total + cartItem.product.price * cartItem.qty
                total += cartItem.product.price * cartItem.qty
        }
    )    
    return total
}

export function migrateGuestCartToUser() {
	const guestCartString = localStorage.getItem("cart_guest");
	const token = localStorage.getItem("token");
	
	if (guestCartString && token) {
		const guestCart = JSON.parse(guestCartString);
		const userCartKey = `cart_${token}`;
		const userCartString = localStorage.getItem(userCartKey);
		const userCart = userCartString ? JSON.parse(userCartString) : [];
		
		// Merge guest cart items with user cart
		guestCart.forEach((guestItem) => {
			const existingIndex = userCart.findIndex(
				(item) => item.product.productId === guestItem.product.productId
			);
			
			if (existingIndex === -1) {
				// Add new item
				userCart.push(guestItem);
			} else {
				// Add quantities together
				userCart[existingIndex].qty += guestItem.qty;
			}
		});
		
		// Save merged cart to user's cart
		localStorage.setItem(userCartKey, JSON.stringify(userCart));
		// Clear guest cart
		localStorage.removeItem("cart_guest");
	}
}


