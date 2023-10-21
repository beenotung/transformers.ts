import { expect } from 'chai'
import { zeroShotClassification } from './zero-shot-classification.js'

async function main() {
  let output = await zeroShotClassification({
    text: 'Happy',
    labels: ['mood', 'food'],
  })
  expect(output).to.have.lengthOf(2)
  expect(output[0].label).to.equals('mood')
  expect(output[0].score).to.be.greaterThan(0.5)
  expect(output[1].label).to.equals('food')
  expect(output[1].score).to.be.lessThan(0.5)
  console.log('[passed] zero-shot-classification')
}
main()
