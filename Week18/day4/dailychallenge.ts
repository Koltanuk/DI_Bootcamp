type User = {
    type: 'user';
    name: string;
    age: number;
};

type Product = {
    type: 'product';
    id: number;
    price: number;
};

type Order = {
    type: 'order';
    orderId: string;
    amount: number;
};

type DataItem = User | Product | Order;

function isUser(item: DataItem): item is User {
    return item.type === 'user';
}

function isProduct(item: DataItem): item is Product {
    return item.type === 'product';
}

function isOrder(item: DataItem): item is Order {
    return item.type === 'order';
}

function handleData(data: DataItem[]): string[] {
    return data.map(item => {
        if (isUser(item)) {
            return `Hello, ${item.name}! You are ${item.age} years old.`;
        } else if (isProduct(item)) {
            return `Product ID: ${item.id}, Price: $${item.price.toFixed(2)}`;
        } else if (isOrder(item)) {
            return `Order ID: ${item.orderId}, Total Amount: $${item.amount.toFixed(2)}`;
        }
        return "Unknown data type";
    });
}

const mixedData: DataItem[] = [
    { type: 'user', name: 'Alice', age: 25 },
    { type: 'product', id: 101, price: 29.99 },
    { type: 'order', orderId: 'ORD123', amount: 150.75 }
];

const results = handleData(mixedData);
console.log(results);