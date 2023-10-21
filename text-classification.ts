import { newModelCache } from './pipe-cache.js'

let cache = newModelCache('sentiment-analysis')

/** @alias SentimentAnalysisResult */
export type TextClassificationResult = Array<{
  label: TextClassificationLabel
  score: number
}>

/** @alias SentimentAnalysisLabel */
export type TextClassificationLabel =
  // Xenova/distilbert-base-uncased-finetuned-sst-2-english
  | 'POSITIVE'
  | 'NEGATIVE'
  // Xenova/bert-base-multilingual-uncased-sentiment
  | '5 stars'
  | '4 stars'
  | '3 stars'
  | '2 stars'
  | '1 star'
  // Xenova/toxic-bert
  | 'toxic'
  | 'insult'
  | 'obscene'
  | 'identity_hate'
  | 'threat'
  | 'severe_toxic'

export type TextClassificationModel =
  | 'Xenova/distilbert-base-uncased-finetuned-sst-2-english'
  | 'Xenova/bert-base-multilingual-uncased-sentiment'
  | 'Xenova/toxic-bert'

/** @alias sentimentAnalysis */
export async function textClassification(input: {
  text: string
  model?: TextClassificationModel
}) {
  let model =
    input.model || 'Xenova/distilbert-base-uncased-finetuned-sst-2-english'

  let classifier = await cache.loadModel(model)

  let out = await classifier(input.text)
  // [{'label': 'POSITIVE', 'score': 0.999817686}]

  return out as TextClassificationResult
}

/* alias */
export let sentimentAnalysis = textClassification
export type SentimentAnalysisResult = TextClassificationResult
export type SentimentAnalysisLabel = TextClassificationLabel
