import template from './template'

const scope = {
  title: 'ToDo App'
}

export default class TodoApp extends HTMLElement {
  constructor () {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })
    shadowRoot.innerHTML = template(scope)
  }
}
