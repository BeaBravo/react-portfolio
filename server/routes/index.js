const router = require('express').Router();

router.route('/api/contact').post((req, res) => {
    try {
        const { name, email, message } = req.body;
        return res.status(200).json(`wants to send '${message}' to ${name}`)
    }
    catch (err) {
        console.log(err);
        return res.status(400).json(err)
    }
})

module.exports = router;