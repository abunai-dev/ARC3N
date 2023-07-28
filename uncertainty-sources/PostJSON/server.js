const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
const directoryPath = "./uncertainties";

app.get("/", (req, res) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error('Error reading directory: ' + err)
        return res.status(500).json({ error: 'Internal Server Error' })
      }
  
      const data = files.map((file) => {
        const fileContent = fs.readFileSync(path.join(directoryPath, file), 'utf8')
        return JSON.parse(fileContent)
      })
  
      res.json(data)
    })
  })
  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
  