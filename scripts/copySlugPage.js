const fs = require('fs');

require('dotenv').config();

console.log("Copying templates")

fs.copyFileSync('./pagetemplates/[[...slug]].ssr.tsx', './pages/[[...slug]].tsx');
