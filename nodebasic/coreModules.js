// path module
const path= require('path');

const filename = path.join(__filename);
const basename = path.basename(filename);
const extname = path.extname(basename)
console.log(__filename);
console.log('file name: '+filename); 
console.log('base name: '+basename); 
console.log('extension name: '+extname);