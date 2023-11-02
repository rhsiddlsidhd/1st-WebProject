const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({ type: "category" });
});

module.exports = router;
