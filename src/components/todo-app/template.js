export default (scope) => {
  return `
    <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container">
        <h1 class="navbar-brand">
          ${scope.title}
        </h1>

        <small class="float-right text-light">
          by <a href="https://www.github.com/jlyon87" target="blank" >
            Justin Lyon
          </a>
        </small>
      </div>
    </nav>

    <main class="container">
      <todo-form></todo-form>
      <hr />
      <todo-list ref="list"></todo-list>
    </main>
  `
}
