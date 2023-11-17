const express = require("express")
const router = express.Router()

// Routes

router.get("", (req, res) => {
	const locals = {
		title: "Joga Powszechna",
		description: "Blog o jodze",
	}
	res.render("index", { locals })
})
router.get("/about", (req, res) => {
	res.render("about")
})

module.exports = router
