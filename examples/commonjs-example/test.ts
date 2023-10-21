import * as transformers from 'transformer.ts'

async function main() {
  let output = await transformers.textClassification({
    text: 'Learning Typescript',
  })
  console.log(output)
}
main().catch(e => console.error(e))
