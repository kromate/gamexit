interface readBlockObject {
  comp: () => Promise<{ [key: string]: any }>;
  name: string;
}


export const readBlocks = () => {
  const result: readBlockObject[] = []

  const requireComponent = import.meta.glob('../../blocks/*/index.vue')
  const BlockArr = Object.keys(requireComponent)

  for (let i = 0; i < BlockArr.length; i++) {
    const obj = {
      comp: requireComponent[BlockArr[i]],
      name: BlockArr[i].split('/')[3],
    }

    result.push(obj)
  }

  return result
}
