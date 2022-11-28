const express = require('express');
const cors = require('cors');
require('dotenv').config()

// const mongoose = require('mongoose')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res) {
  console.log(req.file)
  res.json({name: req.file.originalname, type: req.file.mimetype, size: req.file.size})
})




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
