import { writeFile } from 'fs'
import { main } from './arc3n.js'

async function run() {
  const result = await main()
  writeFile('public/data.json', result, () => {})
}

run()
