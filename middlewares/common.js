const riders = require("../models/rider");
const providers = require("../models/provider");

async function addRoleID(req, res, next) {
  if (req.user) {
    const { username, role } = req.user;

    try {
      switch (role) {
        case "rider": {
          const user = await riders.findOne({ email: username });
          if (user) {
            req.session.userDet = user;
            req.session.userRoleID = user.id;
          }
          break;
        }

        case "provider": {
          const user = await providers.findOne({ email: username });
          if (user) {
            req.session.userDet = user;
            req.session.userRoleID = user.id;
          }
          break;
        }

        case "admin": {
          break;
        }

        default: {
        }
      }
    } catch (error) {
      // Handle database error
      console.error("Error fetching user:", error);
    }
  }

  next();
}

module.exports = {
  addRoleID,
};
