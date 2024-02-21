const express = require('express');
const {isRoleAdmin, isAdminLoggedIn} = require("../middlewares/role_validator");
const providers = require('../models/provider');
const riders = require('../models/rider');
const bookings = require('../models/booking');
const properties = require('../models/property');
const contacts = require('../models/contact');
const {stripePrivateKey} = require('../config');
const stripe = require('stripe')(stripePrivateKey);

const router = express.Router();

router.use(isAdminLoggedIn);
router.use(isRoleAdmin);

router.get('/', async (req, res) => {
	const totalProperties = await properties.find({}).count();
	const totalRiders = await riders.find({}).count();
	const totalBookings = await bookings.find({}).count();
	const totalProviders = await providers.find({}).count();
	const totalContacts = await contacts.find({}).count();
	const balanceObject = await stripe.balance.retrieve();

	res.render('admin-dashboard', {
		location: 'admin-dashboard',
		success: 'successfully shown dashboard',
		data: {
			totalProperties,
			totalRiders,
			totalBookings,
			totalProviders,
			totalContacts,
			totalBalance: Math.round(balanceObject.pending[0].amount / 100),
		}
	});
});

router.post('/admin/properties/:propertyId/approve', async (req, res) => {
    try {
        const { propertyId } = req.params;
        const { action } = req.body; // 'approve' or 'reject'

        const property = await properties.findById(propertyId);

        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }

        // Update the status based on admin's decision
        if (action === 'approve') {
            property.status = 'approved';
        } else if (action === 'reject') {
            property.status = 'rejected';
        }

        await property.save();

        return res.json({ success: `Property ${action === 'approve' ? 'approved' : 'rejected'} successfully` });
    } catch (e) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Function to fetch property data
async function fetchProperty(propertyId) {
    const response = await fetch(`/api/properties/${propertyId}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch property: ${response.status}`);
    }
    return response.json();
}

// Function to approve or reject a property
async function handlePropertyApproval(propertyId, action) {
    try {
        const response = await fetch(`/admin/properties/${propertyId}/approve`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ action }),
        });

        if (!response.ok) {
            throw new Error(`Failed to ${action} property: ${response.status}`);
        }

        // Optionally, you can update the UI to reflect the approved or rejected status
        const property = await fetchProperty(propertyId);
        // Update UI logic here based on the property.status
    } catch (error) {
        console.error(error);
        // Handle error or show a notification to the user
    }
}


module.exports = router;