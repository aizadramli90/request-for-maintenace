export function uploadImage(req, res) {
    const file = req.file;
    console.log(file);
    res.status(200).json({
        message: "Image uploaded successfully",
        file: file,
    });
} 