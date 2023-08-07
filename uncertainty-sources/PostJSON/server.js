const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');

const port = 3000;
const directoryPath = "./uncertainties";
const imagesPath = "./images";

app.use(cors({ origin: 'http://localhost:5173'}));



async function fetchData() {
  try {
    const files = await fs.promises.readdir(directoryPath);
    const data = await Promise.all(
      files.map(async (file) => {
        const fileContent = await fs.promises.readFile(path.join(directoryPath, file), 'utf8');
        return JSON.parse(fileContent);
      })
    );
    return data;
  } catch (err) {
    console.error('Error reading directory: ' + err);
    return [];
  }
}

// async function fetchImages() {
//   try {
//     const imageFiles = await fs.promises.readdir(imagesPath);
//     const images = await Promise.all(
//       imageFiles.map(async (file) => {
//         const imageContent = await fs.promises.readFile(path.join(imagesPath, file));
//         return {
//           filename: file,
//           content: imageContent,
//         }
//       })
//     );
//     return images;
//   } catch (err) {
//     console.error('Error reading images directory: ' + err);
//     return [];
//   }
// }

app.get('/uncertainties', async (req, res) => {
  const data = await fetchData();
  res.json(data);
});

app.get('/images/:subfolder/:filename', async (req, res) => {
  try {
    const {subfolder, filename} = req.params;

    const imagePath = (subfolder === 'categories' || subfolder === 'uncertainties') ? path.join(imagesPath, subfolder, filename) : path.join(imagesPath, filename);
    console.log(imagePath);

    const imageContent = await fs.promises.readFile(imagePath);

    res.setHeader('Content-Type', 'image/jpg');
    res.end(imageContent);
  } catch (err) {
    console.error('Error reading images directory: ' + err);
    res.status(500).json({error: 'Error trying to read image:' + imagesPath});
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Get all images and upload them



// Get all uncertainties and upload them
// app.get("/uncertainties", (req, res) => {
//     fs.readdir(directoryPath, (err, files) => {
//       if (err) {
//         console.error('Error reading directory: ' + err)
//         return res.status(500).json({ error: 'Internal Server Error' })
//       }
  
//       const data = files.map((file) => {
//         const fileContent = fs.readFileSync(path.join(directoryPath, file), 'utf8')
//         return JSON.parse(fileContent)
//       })
  
//       res.json(data)
//     })
//   })
//   app.listen(port, () => {
//     console.log(`Server running on port ${port}`)
//   })
  