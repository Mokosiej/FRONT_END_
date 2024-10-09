
function calculateTotal(cart, prices) {
    
    return Object.keys(cart).reduce((total, item) => {
        
        const quantity = cart[item];

        const price = getPrice(item, prices);
        
        return total + (price !== null ? price * quantity : 0);
    }, 0);
}

function getPrice(item, prices) {
    
    return Object.values(prices).reduce((foundPrice, category) => {
        return foundPrice !== null ? foundPrice : category[item] !== undefined ? category[item] : null;
    }, null);
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
