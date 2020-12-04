const path = require('path');
const multiparty = require('multiparty');
const fs = require('fs')

const uploadPic = (req,res) => {
  const form = new multiparty.Form();
  form.uploadDir = ''
  console.log(req.headers.authorization)
  if (req.headers.authorization == 'goodsCateImage') {
    form.uploadDir = path.join(__dirname,'../../uploads/catespics');
  } else if (req.headers.authorization == 'goodsImage') {
    form.uploadDir = path.join(__dirname,'../../uploads/goodspics');
  } else if (req.headers.authorization == 'pageBanner'){
    form.uploadDir = path.join(__dirname,'../../uploads/banner');
  }
  console.log(form.uploadDir)
  form.encoding = 'utf-8';
  form.maxFilesSize = 0.5 * 1024 * 1024;
  form.parse(req, function(err, fields, files) {
    const filename = files.file[0].originalFilename
    let nameArray = filename.split('.');
    const type = nameArray[nameArray.length - 1];
    let name = '';
    for (let i = 0; i < nameArray.length - 1; i++) {
        name = name + nameArray[i];
    }
    const date = new Date();
    const time = '_' + date.getFullYear() + "_" + date.getMonth() + "_" + date.getDay() + "_" + date.getHours() + "_" + date.getMinutes();
    const avatarName = name + time + '.' + type;
    const newPath = form.uploadDir + "/" + avatarName;
    fs.renameSync(files.file[0].path, newPath);
    res.send({code:200,img:avatarName,dir:form.uploadDir})
  })
}
module.exports = uploadPic
