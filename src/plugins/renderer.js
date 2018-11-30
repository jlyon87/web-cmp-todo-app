export default (props, template) => {
  return Object.keys(props).reduce((acc, key) => {
    const pattern = new RegExp('\\${props\\.' + key + '}', 'g')
    acc = acc.replace(pattern, props[key])
    return acc
  }, template)
}
