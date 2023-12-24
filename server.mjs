// server.mjs
import express from 'express';
import { PrismaClient } from './prisma/generated/client/index.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/products', async (req, res) => {
  const prisma = new PrismaClient();

  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
});

app.get('/api/cart', async (req, res) => {
  const prisma = new PrismaClient();

  try {
    const cartItems = await prisma.CartItem.findMany();
    res.json(cartItems);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
});
app.get('/api/categories', async (req, res) => {
  const prisma = new PrismaClient();

  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Function to add a category
async function addCategory(name) {
  const prisma = new PrismaClient();

  try {
    const newCategory = await prisma.category.create({
      data: { name },
    });

    console.log('Category added:', newCategory);
  } catch (error) {
    console.error('Error adding category:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Function to add a product
async function addProduct(name, description, price, categoryId) {
  const prisma = new PrismaClient();

  try {
    const newProduct = await prisma.product.create({
      data: { name, description, price, categoryId },
    });

    console.log('Product added:', newProduct);
  } catch (error) {
    console.error('Error adding product:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Function to add a user
async function addUser(username, email) {
  const prisma = new PrismaClient();

  try {
    const newUser = await prisma.user.create({
      data: { username, email },
    });

    console.log('User added:', newUser);
    return newUser; // Return the created user for further use
  } catch (error) {
    console.error('Error adding user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Function to add a cart item
async function addCartItem(userId, productId, quantity) {
  const prisma = new PrismaClient();

  try {
    // Find the user by ID
    let user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      // If the user does not exist, create a new user
      const newUser = await addUser(`user_${userId}`, `user_${userId}@example.com`);
      user = newUser;
    }

    // Find the product by ID
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      console.error('Product does not exist');
      return;
    }

    // Add the cart item
    const newCartItem = await prisma.cartItem.create({
      data: { userId: user.id, productId: product.id, quantity },
    });

    console.log('Cart item added:', newCartItem);
  } catch (error) {
    console.error('Error adding cart item:', error);
  } finally {
    await prisma.$disconnect();
  }
}

