import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
    res.statusCode = 200;
    res.render("pages/index");
});

export default router;
