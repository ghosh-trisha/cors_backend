
import multer from 'multer';

import path from 'path';


// const upload = multer({ dest: 'public/uploads/' });


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // console.log('uploading file destination');
      cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      // const ext = path.extname(file.originalname);
      // cb(null, file.fieldname + '-' + uniqueSuffix+ ext);
      cb(null, file.originalname);


      console.log("file original name ----->", file.originalname);
      console.log("file original name basename ----->", path.basename(file.originalname));
      console.log("file original name extname ----->", path.extname(file.originalname));
    }
  })
  
  const upload = multer({ storage: storage })


export default upload;