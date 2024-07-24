import jwt from 'jsonwebtoken';

const isAuth = (req, res, next) => {
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(" ")[1];

    console.log(token);

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    };

    //check token validity
    const secretKey = 'verySecretKey009';
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "Invalid token"
            });
        };
    
    console.log(decoded);
    /* req.userId = decoded.user_id;
    req.userEmail = decoded.email; */
    next();

    });


};

export default isAuth;