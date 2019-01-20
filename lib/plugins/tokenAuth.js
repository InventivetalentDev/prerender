module.exports = {
    requestReceived: (req, res, next) => {
        let auth = req.headers["x-prerender-token"];
        if (!auth || auth !== process.env.PRERENDER_TOKEN) return res.send(401);

        return next();
    }
};