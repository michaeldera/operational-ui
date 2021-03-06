A textarea field, with optional label, hint and error.

### Simple usage

The following snippet show the text area with various visual additions handling fixed heights, errors and hints.

```jsx
import { Form, Textarea, OpenIcon } from "@operational/components"

json = JSON.stringify({ test: 123 }, null, 2)

initialState = {
  v0: "",
  v1: "",
  v2: "",
  v3: "",
  v4: "",
  v5: "",
  v6: "",
  v7: "",
  v8: "",
  v9: "",
}

const handleChange = key => value => {
  setState(() => ({ [key]: value }))
}
;<Form>
  <div>
    <Textarea value={state.v0} onChange={handleChange("v0")} />
  </div>
  <div style={{ verticalAlign: "top" }}>
    <Textarea value={state.v1} onChange={handleChange("v1")} label="simple" />
    <Textarea value={state.v4} onChange={handleChange("v4")} label="with error" error="oh no!" />
    <Textarea value={state.v5} onChange={handleChange("v5")} label="with hint" hint="this is a hint" />
    <Textarea value={state.v6} onChange={handleChange("v6")} label="disabled" disabled />
    <Textarea value={state.v7} onChange={handleChange("v7")} label="a code" code />
    <Textarea value={state.v8} onChange={handleChange("v8")} label="fixed height" height={200} />
    <Textarea value={state.v9} onChange={handleChange("v8")} label="with placeholder" placeholder={json} />
  </div>
  <div>
    <Textarea copy value={state.v2} onChange={handleChange("v2")} label="with copying" />
    <Textarea
      value={state.v3}
      onChange={handleChange("v3")}
      label="with actions"
      action={
        <div>
          <OpenIcon size={8} />
          <a href="#textarea">More information</a>
        </div>
      }
    />
  </div>
  <div>
    <Textarea value={state.v9} onChange={handleChange("v9")} label="full width" fullWidth />
  </div>
  <div>
    {/* full width without a label can behave differently */}
    <Textarea value={state.v9} onChange={handleChange("v9")} fullWidth />
  </div>
</Form>
```

### Submitting

Text areas detect a `cmd+enter` submit through an `onSubmit` prop, like so:

```jsx
import * as React from "react"
import { Textarea } from "@operational/components"

const MyOtherComponent = () => {
  const [value, setValue] = React.useState("Type something")
  const [submittedValue, setSubmittedValue] = React.useState(undefined)

  return (
    <>
      <Textarea value={value} onChange={setValue} onSubmit={() => setSubmittedValue(value)} />
      {submittedValue ? <p>Submitted: {submittedValue}</p> : <p>Submit by hitting cmd+enter</p>}
    </>
  )
}

;<MyOtherComponent />
```
