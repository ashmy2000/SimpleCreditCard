const express = require('express');
const router = express.Router();

  // Main page with html
  router.get("/", async (req, res) => {
    res.sendFile(`${credit_card}/index.html`);
  });
  
module.exports = router;