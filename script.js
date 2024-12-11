const shoppingList = [
    { item: 'Placa-mãe', store1: 500, store2: 520, store3: 510 },
    { item: 'Processador', store1: 1200, store2: 1180, store3: 1190 },
    { item: 'Memória RAM (16GB)', store1: 400, store2: 420, store3: 410 },
    { item: 'SSD (1TB)', store1: 500, store2: 480, store3: 490 },
    { item: 'Fonte de Alimentação', store1: 300, store2: 310, store3: 305 },
    { item: 'Gabinete', store1: 250, store2: 240, store3: 245 },
    { item: 'Monitor', store1: 800, store2: 820, store3: 810 },
    { item: 'Teclado', store1: 150, store2: 160, store3: 155 },
    { item: 'Mouse', store1: 100, store2: 110, store3: 105 },
    { item: 'Caixas de Som', store1: 200, store2: 210, store3: 205 },
];

const ul = document.getElementById('shoppingList');
shoppingList.forEach(product => {
    const li = document.createElement('li');
    li.innerText = `${product.item} - Loja 1: R$${product.store1}, Loja 2: R$${product.store2}, Loja 3: R$${product.store3}`;
    ul.appendChild(li);
});