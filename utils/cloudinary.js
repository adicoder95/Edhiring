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

exports.uploadFileToCloudinary = async (file, folder) => {
    const options = { folder };
    
    // Set the resource_type to auto to allow any type of file
    options.resource_type = "auto";

    // Upload the file using the tempFilePath provided by multer
    return await cloudinary.uploader.upload(file.tempFilePath, options);
};

exports.uploadTexFileToCloudinary = async (file, folder) => {
    const options = {
      folder,
      resource_type: 'raw', // 'raw' is used for non-image files
      use_filename: true,
      unique_filename: false,
    };
  
    return await cloudinary.uploader.upload(file.tempFilePath, options);
};


// resume .tex --> pdf

exports.uploadPdfToCloudinary = async (filePath, folder) => {
    const options = {
      folder: folder,
      resource_type: 'auto',
    };
    return await cloudinary.uploader.upload(filePath, options);
  };
  
  exports.deletePdfFromCloudinary = async (publicId) => {
    return await cloudinary.uploader.destroy(publicId);
  };