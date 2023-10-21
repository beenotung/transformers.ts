import type { Pipeline } from '@xenova/transformers'
import { pipeline } from './pipeline.js'

export function newModelCache(task: string) {
  let cache = new Map<string | undefined, Promise<Pipeline>>()

  function loadModel(model?: string) {
    let p = cache.get(model)
    if (!p) {
      p = pipeline(task, model)
      cache.set(model, p)
    }
    return p
  }

  return { loadModel }
}
