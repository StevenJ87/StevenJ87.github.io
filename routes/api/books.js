const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/");

router.route("/projects");

router.route("/about");

module.exports = router;
