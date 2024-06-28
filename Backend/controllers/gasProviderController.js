const GasProvider = require('../models/GasProvider');

exports.getAllProviders = async (req, res) => {
  try {
    const providers = await GasProvider.find();
    res.status(200).json(providers);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

exports.searchProviders = async (req, res) => {
  const { name } = req.query;
  try {
    const providers = await GasProvider.find({ name: { $regex: name, $options: 'i' } });
    res.status(200).json(providers);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

exports.getProviderById = async (req, res) => {
  const { providerId } = req.params;

  try {
    const provider = await GasProvider.findById(providerId);

    if (!provider) {
      return res.status(404).json({ message: 'Provider not found' });
    }

    res.status(200).json(provider);
  } catch (error) {
    console.error('Error fetching provider:', error);
    res.status(500).json({ message: 'Failed to fetch provider' });
  }
};