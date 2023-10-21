# transformer.ts

Typescript wrapper for [@xenova/transformers](https://www.npmjs.com/package/@xenova/transformers).

Works in both commonjs and ESM module projects.

[![npm Package Version](https://img.shields.io/npm/v/transformer.ts)](https://www.npmjs.com/package/transformer.ts)

## Supported Tasks

For all task, the model name can be optionally specified in the input object.

More tasks and models will be typed over time.

### text-classification (alias: sentiment-analysis)

**Input Type**: `{ text: string }`

**Output Type**: `Array<{ label: TextClassificationLabel, score: number }>`

```typescript
type TextClassificationLabel =
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
```

### zero-shot-classification

**Input Type**: `{ text: string, labels: string[] }`

**Output Type**: `Array<{ label: string, score: number }>`

## License

This project is licensed with [BSD-2-Clause](./LICENSE)

This is free, libre, and open-source software. It comes down to four essential freedoms [[ref]](https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html#fnref:2):

- The freedom to run the program as you wish, for any purpose
- The freedom to study how the program works, and change it so it does your computing as you wish
- The freedom to redistribute copies so you can help others
- The freedom to distribute copies of your modified versions to others
