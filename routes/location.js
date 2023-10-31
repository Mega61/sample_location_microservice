
const axios = require('axios');
require('dotenv').config();

const username = process.env.GEONAME_USERNAME;

module.exports = async function (req, res) {
    if (req.method === 'POST') {
        const { lat, lng } = req.body;

        try {
            const response = await axios.get(
                `http://api.geonames.org/findNearbyPlaceNameJSON?lat=${lat}&lng=${lng}&username=${username}`
            );

            const geonames = response.data.geonames;
            const countryName = geonames[0].countryName;
            const city = geonames[0].toponymName;

            res.status(200).json({
                countryName,
                city
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Unable to fetch location data' });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
