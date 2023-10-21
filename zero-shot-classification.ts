import { pipeline } from '@xenova/transformers'

export type ZeroShotClassificationResult = Array<{
  label: string
  score: number
}>

export async function zeroShotClassification(text: string, labels: string[]) {
  let classifier = await pipeline('zero-shot-classification')

  type Output = {
    sequence: string
    labels: string[]
    scores: number[]
  }

  let output: Output = await classifier(text, labels, {
    multi_label: true,
  })
  /**
{
	sequence: 'I have a problem with my iphone that needs to be resolved asap!',
  labels: [ 'urgent', 'phone', 'computer', 'tablet', 'not urgent' ],
  scores: [
    0.9958870956360275,
    0.9923963400697035,
    0.0023335396113423794,
    0.0015134138567598765,
    0.0010699384208377163
  ]
}
	 */

  return output.labels.map((label, i) => ({
    label,
    score: output.scores[i],
  })) as ZeroShotClassificationResult
}
