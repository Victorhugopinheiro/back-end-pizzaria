"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlewareAuth = MiddlewareAuth;
const jsonwebtoken_1 = require("jsonwebtoken");
function MiddlewareAuth(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        res.status(401).end();
    }
    const [, token] = authToken.split(" ");
    console.log(token);
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        console.log(sub);
        req.user_id = sub;
        return next();
    }
    catch (err) {
        res.status(401).end();
    }
}
