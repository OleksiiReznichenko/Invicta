
const giftCards = [
  {
    id: 'NikeUk', slug: 'nike-uk', name: 'Nike UK', category: 'clothes',
    image: 'nikeUK', price: 254.99, oldPrice: 299.99,
    amountInStock: 1, country: 'UK', eta: '7-12 days', sellerId: 'antoniojr',
  },
  {
    id: 'PG', slug: 'pg', name: 'P&G', category: 'shopping',
    image: 'pg', price: 240.99, oldPrice: 309.99,
    amountInStock: 2, country: 'USA', eta: '8-14 days', sellerId: 'alexjr',
  },
  {
    id: 'Dole', slug: 'dole', name: 'Dole', category: 'technology',
    image: 'dole', price: 134.99, oldPrice: 159.99,
    amountInStock: 20, country: 'USA', eta: '5-14 days', sellerId: 'alexjr',
  },
  {
    id: 'Dell', slug: 'dell', name: 'Dell', category: 'technology',
    image: 'dell', price: 199.99, oldPrice: null,
    amountInStock: 5, country: 'USA', eta: '14-21 days', sellerId: 'alexjr',
  },
  {
    id: 'M', slug: 'm', name: 'M', category: 'shopping',
    image: 'm', price: 129.99, oldPrice: 149.99,
    amountInStock: 10, country: 'USA', eta: '5-14 days', sellerId: 'alexjr',
  },
  {
    id: 'MacDonalds', slug: 'macdonalds', name: 'MacDonalds', category: 'food',
    image: 'mac', price: 49.99, oldPrice: 59.99,
    amountInStock: 100, country: 'USA', eta: '7-10 days', sellerId: 'alexjr',
  },
  {
    id: 'Ozon', slug: 'ozon', name: 'Ozon', category: 'shopping',
    image: 'ozon', price: 59.99, oldPrice: 79.99,
    amountInStock: 50, country: 'Russia', eta: '7-14 days', sellerId: 'alexjr',
  },
];

const accountBrands = ['NikeUk', 'PG', 'Dole', 'Dell'];
const accountSellers = ['alexjr', 'antoniojr'];

function createProduct(item, type = 'giftcard', sellerId = item.sellerId) {
  const isAccount = type === 'account';

  return {
    id: isAccount ? `account-${item.slug}-${sellerId}` : item.id,
    type,
    category: item.category,
    name: isAccount ? `Account ${item.name}` : item.name,
    price: item.price,
    oldPrice: item.oldPrice,
    photo: `/products/${item.image}.jpg`,
    photoBig: `/products/${item.image}Big.jpg`,
    discount: '',
    amountInStock: item.amountInStock,
    country: item.country,
    description: isAccount
      ? `${item.name} account listing for the Invicta frontend demo.`
      : `${item.name} gift card listing for the Invicta frontend demo.`,
    warranty: 'Demo listing only',
    eta: item.eta,
    sellerId,
  };
}

export const state = () => ({
  products: [
    ...giftCards.map(item => createProduct(item)),
    ...giftCards
      .filter(item => accountBrands.includes(item.id))
      .flatMap(item =>
        accountSellers.map(sellerId =>
          createProduct(item, 'account', sellerId)
        )
      ),
  ],
});

export const mutations = {
  createNewProduct(state, { newProduct }) {
    if (!newProduct || !newProduct.id) {
      throw new Error('A new product must have an ID');
    }

    if (state.products.some(product => product.id === newProduct.id)) {
      throw new Error(`Product ID already exists: ${newProduct.id}`);
    }

    state.products.push(newProduct);
  },
};
