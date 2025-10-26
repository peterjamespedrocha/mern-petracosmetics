const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "ASM6IjRr7Tx1kxR9v4zE_L9C82PRklWFNbBng40cE8Mp6uF8I62hS1mVH_1OO1i9wD7nai7I_KS0e1_X",
  client_secret: "EBa9YJtTawok-yTF2RlAbNNzHjka4dDhHhdxmHbrH9CcrMknrwBqW65vfVB96Rbs0S6ou5cNll-vduok",
});

module.exports = paypal;
