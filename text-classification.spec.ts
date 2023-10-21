import { expect } from 'chai'
import { textClassification } from './text-classification.js'

async function main() {
  let output = await textClassification({ text: 'Happy' })
  expect(output).to.have.lengthOf(1)
  expect(output[0].label).to.equals('POSITIVE')
  expect(output[0].score).to.be.greaterThan(0.5)
  console.log('[passed] text-classification')
}
main()
