import multer from "multer";
import path from "path";
import crypto from "crypto";

/* const upload = multer({ 
    dest: 'uploads/'
 }); */

const uuid = crypto.randomUUID();


 const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, uuid + path.extname(file.originalname))
    }
  });

  const upload = multer({ storage: storage });

export default upload;