import { newModelCache } from './pipe-cache'

export type ZeroShotClassificationResult = Array<{
  label: string
  score: number
}>

let cache = newModelCache('zero-shot-classification')

export async function zeroShotClassification(input: {
  model?: string
  text: string
  labels: string[]
}) {
  let model = input.model || 'Xenova/distilbert-base-uncased-mnli'
  let classifier = await cache.loadModel(model)

  type Output = {
    sequence: string
    labels: string[]
    scores: number[]
  }

  let output: Output = await classifier(input.text, input.labels, {
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
