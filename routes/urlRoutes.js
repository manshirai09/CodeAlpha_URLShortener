const express = require("express");
const router = express.Router();

const { createShortUrl,
        redirectUrl,
        getAllUrls,
        getAnalytics,
        updateUrl,
        deleteUrl,
 } = require("../controllers/urlController");

// Create Short URL
router.post("/shorten", createShortUrl);

// GET -> Redirect
router.get("/:shortCode", redirectUrl);

// GET -> Get All URLs
router.get("/", getAllUrls);

// GET -> Get URL Analytics
router.get("/analytics/:shortCode", getAnalytics);

// PUT -> Update URL
router.put("/:shortCode", updateUrl);

// DELETE -> Delete URL
router.delete("/:shortCode", deleteUrl);



module.exports = router;