
import path from 'path';
import fs from 'fs';
import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';


const fetchController = asyncHandler((req, res, next) => {
    const folderId = req.params.folder_id;
    const folderPath = path.join('public', 'uploads', folderId);

    // console.log(folderId);
    // console.log(folderPath);

    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('Error reading folder:', err);
            return res.status(500).send('Error reading folder');
        }

        // console.log(files);
        const data=files.map((file)=>{
            return {url:`http://localhost:3000/uploads/${folderId}/${path.basename(file.toString())})}`}
        })
        res.status(201).json(new ApiResponse("uploaded successfully", {
            data        // data == data: data 
        }));
    });
});


const downloadController = asyncHandler((req, res, next) =>{

    const { folder_id, file_name } = req.params;
    const filePath = path.join('public', 'uploads', folder_id, file_name);

    res.download(filePath, (err) => {
        if (err) {
            console.error('Error downloading file:', err);
            return res.status(500).send('Error downloading file');
        }
    });
});


export  {fetchController , downloadController};