import { writeFile } from 'fs'
import { main } from './uncertainty-source-archive.js'

async function run() {
  const result = await main()
  writeFile('public/data.json', result, () => {})
}

run()
