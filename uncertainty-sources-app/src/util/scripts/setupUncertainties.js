import path from 'path'
import fs from 'fs'
import express from 'express'
import portInfo from './portInfo.js'

const app = express()
const apiPath = '/api/data'
const port = portInfo.port
const directoryPath = portInfo.path

app.get(apiPath, (req, res) => {
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
