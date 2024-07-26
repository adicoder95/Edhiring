// const cloudinary = require('cloudinary').v2;
// require('dotenv').config(); // Make sure to have dotenv to load environment variables

// // Configure Cloudinary with your credentials
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const uploadImageToCloudinary = async (filePath, folderName, width, height) => {
//   try {
//     const result = await cloudinary.uploader.upload(filePath, {
//       folder: folderName,
//       width: width,
//       height: height,
//       crop: 'limit'
//     });
//     return result;
//   } catch (error) {
//     throw new Error('Failed to upload image to Cloudinary');
//   }
// };

// module.exports = { uploadImageToCloudinary };



const cloudinary = require('cloudinary').v2

//for uploading image
exports.uploadImageToCloudinary  = async (file, folder, height, quality) => {
    const options = {folder};
    if(height) {
        options.height = height;
    }
    if(quality) {
        options.quality = quality;
    }
    options.resource_type = "auto";

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}