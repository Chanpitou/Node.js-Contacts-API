const express = require("express");
const router = express.Router();
const {getContacts, createContact, getContact, updateContact, deleteContact} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
// get all contacts
router.route("/").get(getContacts);

// create contact
router.route("/").post(createContact);

// get one contact
router.route("/:id").get(getContact);

// update contact
router.route("/:id").put(updateContact);

// delete contact
router.route("/:id").delete(deleteContact);

module.exports = router;
