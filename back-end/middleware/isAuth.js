import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(" ")[1];
    //console.log(token);
    if (!token) {
        return res.status(401).json(
            {
                message: "Unauthorized",
            }
        );
    }
    //token validity
    //need to use env variable for secret key as it is sensitive information
    const secretKey = "verySecretKey009";
    jwt.verify(token, secretKey, (error, decoded) => {
        if (error) {
            return res.status(401).json(
                {
                    message: "Invalid token",
                }
            );
        }
        console.log(decoded);
        
        //for typescript
        //res.locals.user = decoded.user_id;

        //for javascript
        req.userId = decoded.user_id;
        req.userEmail = decoded.email;
        next();
    });

    
};
export default isAuth;