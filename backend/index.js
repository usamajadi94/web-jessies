const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { Category, Product } = require('./models');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample API
app.get('/api/products', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [
        {
          model: Product,
          as: 'products'
        }
      ]
    });

    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Express API running at http://localhost:${PORT}`);
});
