import { pool } from "../../database/connection.js";

//query to get all requests for specific user


//function to list all requests for a specific user
const listAllRequestForSpecificId = async (req, res) => {
    console.log(req.userId);
    try {
        const queryAllRequests = `
            SELECT * FROM request WHERE user_id = $1
            `;

        //can't use params here, to avoid brute force attack  

        user_id = req.body.user_id;
        const dbRes = await pool.query(queryAllRequests, [user_id]);
        //console.log(dbRes.rows);
        const data = dbRes.rows;
        res.status(200).json({
            message: `${data.length} requests submitted by ${user_id}`,
            data,
        })

        
    } catch (error) {

        console.error(error);
        res.status(500).json({
            message: "Internal server error",
        });

    }
    
};

export default listAllRequestForSpecificId;