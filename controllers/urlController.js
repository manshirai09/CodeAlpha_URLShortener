const Url = require("../models/Url");
const shortid = require("shortid");
const isValidUrl = require("../utils/validateUrl");

// @desc    Create Short URL
// @route   POST /api/url/shorten
// @access  Public

const createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    // Check if URL is provided
    if (!originalUrl) {
      return res.status(400).json({
        success: false,
        message: "Original URL is required",
      });
    }

    // Check if URL already exists
    const existingUrl = await Url.findOne({ originalUrl });

    if (existingUrl) {
      return res.status(200).json({
        success: true,
        shortUrl: `${process.env.BASE_URL}/${existingUrl.shortCode}`,
        data: existingUrl,
      });
    }

    // Generate unique short code
    const shortCode = shortid.generate();

    // Save to MongoDB
    const url = await Url.create({
      originalUrl,
      shortCode,
    });

    res.status(201).json({
      success: true,
      message: "Short URL Created Successfully",
      shortUrl: `${process.env.BASE_URL}/${shortCode}`,
      data: url,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Check if URL is provided
if (!originalUrl) {
  return res.status(400).json({
    success: false,
    message: "Original URL is required",
  });
}



// @desc Redirect to Original URL
// @route GET /:shortCode
// @access Public

const redirectUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;

    const url = await Url.findOne({ shortCode });

    if (!url) {
      return res.status(404).json({
        success: false,
        message: "Short URL not found",
      });
    }

    // Increase click count
    url.clicks += 1;
    await url.save();

    // Redirect
    res.redirect(url.originalUrl);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Validate URL
if (!isValidUrl(originalUrl)) {
  return res.status(400).json({
    success: false,
    message: "Please enter a valid URL",
  });
}

// @desc Get All URLs
// @route GET /api/url
// @access Public

const getAllUrls = async (req, res) => {
  try {
    const urls = await Url.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: urls.length,
      data: urls,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// @desc Get URL Analytics
// @route GET /api/url/analytics/:shortCode
// @access Public

const getAnalytics = async (req, res) => {
  try {
    const url = await Url.findOne({
      shortCode: req.params.shortCode,
    });

    if (!url) {
      return res.status(404).json({
        success: false,
        message: "URL not found",
      });
    }

    res.status(200).json({
      success: true,
      data: {
        originalUrl: url.originalUrl,
        shortCode: url.shortCode,
        clicks: url.clicks,
        createdAt: url.createdAt,
        updatedAt: url.updatedAt,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// @desc Update Original URL
// @route PUT /api/url/:id
// @access Public

const updateUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    const updatedUrl = await Url.findByIdAndUpdate(
      req.params.id,
      { originalUrl },
      { new: true }
    );

    if (!updatedUrl) {
      return res.status(404).json({
        success: false,
        message: "URL not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "URL updated successfully",
      data: updatedUrl,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

if (!isValidUrl(originalUrl)) {
  return res.status(400).json({
    success: false,
    message: "Please enter a valid URL",
  });
}


// @desc Delete URL
// @route DELETE /api/url/:id
// @access Public

const deleteUrl = async (req, res) => {
  try {

    const deletedUrl = await Url.findByIdAndDelete(req.params.id);

    if (!deletedUrl) {
      return res.status(404).json({
        success: false,
        message: "URL not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "URL deleted successfully",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

module.exports = {
  createShortUrl,
  redirectUrl,
  getAllUrls,
  getAnalytics,
  updateUrl,
  deleteUrl,
};