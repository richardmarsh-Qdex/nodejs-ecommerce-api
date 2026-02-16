const generateSKU = (name) => {
  const prefix = name.substring(0, 3).toUpperCase();
  const timestamp = Date.now().toString().slice(-6);
  return `${prefix}-${timestamp}`;
};

const calculateTotal = (items) => {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

module.exports = {
  generateSKU,
  calculateTotal,
  formatCurrency
};
