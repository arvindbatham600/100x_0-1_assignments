// Middleware for handling auth
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    try {
        const decodeValue = jwt.decode(jwtToken, JWT_SECRET)

        if (decodeValue.username) {
            next();
        } else {
            res.status(403).json({
                msg: "you are not authenticated"
            })
        }
    } catch (e) {
        res.json({
            msg: "Incorrect inputs"
        })
    }
}

module.exports = adminMiddleware;