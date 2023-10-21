let load = new Function("return import('@xenova/transformers')")

export async function pipeline(task: string, model?: string, options?: {}) {
  let { pipeline } = await load()
  return pipeline(task, model, options)
}
