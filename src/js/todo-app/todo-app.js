import template from './template'

const scope = {
  message: 'sup'
}

export default class TodoApp extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({mode: 'closed'})
    shadowRoot.innerHTML = template(scope)
  }
}
