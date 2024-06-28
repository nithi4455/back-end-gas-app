const Booking = require('../models/Booking');

exports.bookSlot = async (req, res) => {
  const { gasProviderId, slot } = req.body;
  const userId = req.userId;
  try {
    const booking = new Booking({ user: userId, gasProvider: gasProviderId, slot });
    await booking.save();
    res.status(201).json({ booking });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

exports.getUserBookings = async (req, res) => {
  const userId = req.userId;
  try {
    const bookings = await Booking.find({ user: userId }).populate('gasProvider');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
