
function calculateTotal(cart, prices) {
    let total = 0;

    
    for (let item in cart) {
        if (cart.hasOwnProperty(item)) {
            
            let quantity = cart[item];
        
            let price = getPrice(item, prices);

            if (price !== null) {
                total += price * quantity;
            }
        }
    }

    return total;
}

function getPrice(item, prices) {
    for (let category in prices) {
        if (prices.hasOwnProperty(category)) {
            if (prices[category][item] !== undefined) {
                return prices[category][item]; 
            }
        }
    }
    return null; 
}

// Пример использования
const cart = {
    'laptop': 2,
    'mouse': 3,
    'keyboard': 1
};

const prices = {
    'computers': {
        'laptop': 1000,
        'desktop': 1500
    },
    'accessories': {
        'mouse': 20,
        'keyboard': 50
    }
};

console.log(calculateTotal(cart, prices));
