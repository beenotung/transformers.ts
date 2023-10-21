import { Pipeline, pipeline } from '@xenova/transformers'
import { newModelCache } from './pipe-cache'

/** @alias SentimentAnalysisResult */
export type TextClassificationResult = Array<{
  label: SentimentAnalysisLabel
  score: number
}>

/** @alias SentimentAnalysisLabel */
export type TextClassificationLabel = 'POSITIVE' | 'NEGATIVE'

let cache = newModelCache('sentiment-analysis')

/** @alias sentimentAnalysis */
export async function textClassification(input: {
  sentence: string
  model?: string
}) {
  let model =
    input.model || 'Xenova/distilbert-base-uncased-finetuned-sst-2-english'

  let pipe = await cache.loadModel(model)

  let out = await pipe(input.sentence)
  // [{'label': 'POSITIVE', 'score': 0.999817686}]

  return out as SentimentAnalysisResult
}

/* alias */
export let sentimentAnalysis = textClassification
export type SentimentAnalysisResult = TextClassificationResult
export type SentimentAnalysisLabel = TextClassificationLabel
