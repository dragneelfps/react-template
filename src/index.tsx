import React, {FC} from "react"
import ReactDOM from "react-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import {Provider} from "react-redux"
import {persistor, store} from "./store"
import {PersistGate} from "redux-persist/integration/react"
import {ThemeProvider} from "styled-components"
import {theme} from "./theme"

const Root: FC = () => <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </PersistGate>
  </Provider>
</React.StrictMode>

ReactDOM.render(
  <Root/>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
