const { generateContent } = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
    try {
        const code = req.body.code; // Fix: Changed variable name to `code`

        if (!code) {
            return res.status(400).json({ error: "Code input is required for review" });
        }

        const response = await generateContent(code);  

        res.json({ review: response });  
    } catch (error) {
        console.error("Error generating code review:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
