import template from './template.html'
import render from '../../plugins/renderer.js'

export default (props) => {
  return render(props, template)
}
