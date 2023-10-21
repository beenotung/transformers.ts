import { Pipeline, pipeline } from '@xenova/transformers'

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
