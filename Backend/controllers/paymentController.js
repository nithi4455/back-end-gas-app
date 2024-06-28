const Stripe = require('stripe');
const Booking = require('../models/Booking');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

exports.createPayment = async (req, res) => {
  const { bookingId, token } = req.body;
  try {
    const booking = await Booking.findById(bookingId);
    const charge = await stripe.charges.create({
      amount: 5000, // Example amount in cents
      currency: 'usd',
      source: token,
      description: `Payment for booking ID: ${bookingId}`,
    });
    booking.status = 'confirmed';
    await booking.save();
    res.status(200).json({ charge });
  } catch (error) {
    res.status(500).json({ message: 'Payment failed' });
  }
};
