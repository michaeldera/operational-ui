Main wrapper for Operational UI, required at the top level of the application. See `OperationalContext` for some more involved context-reliant features of this component.

### Classic example

```jsx
import * as React from "react"
import { Button } from "@operational/components"

const App = () => (
  <div>
    Hi, I'm an Operational App! <Button color="primary">Cool!</Button>
  </div>
)

;<OperationalUI>
  <App />
</OperationalUI>
```

### Setting up routing

To set up routing that is automatically wired up to the `to` props of all nested linking components such as `Button`, `Breadcrumb`,`SidenavHeader` and `SidenavItem`, you only need to supply a single prop on this one component:

```jsx
import * as React from "react"
import { Button } from "@operational/components"

class RoutingComponent extends React.Component {
  constructor(props) {
    super(props)
    // Set the initial path instate
    this.state = {
      path: window.location.pathname,
    }
  }

  render() {
    return (
      <OperationalUI
        pushState={newPath => {
          /**
           * This is a simple way to persist path changes in state.
           * Routing libraries like `react-router` do this automatically,
           * so if you have access to its `history` object, you can simply do
           * `<OperationalUI pushState={history.push} />`
           */
          this.setState(() => ({
            path: newPath,
          }))
          window.history.pushState(null, null, newPath)
        }}
      >
        <div>
          <p>{`The path is ${this.state.path}`}</p>
          <Button to="/abcd">Go to /abcd</Button>
        </div>
      </OperationalUI>
    )
  }
}

;<RoutingComponent />
```
