import express from "express"
import React from "react";
import { renderToString } from "react-dom/server"
import App from "../shared/App"
import { ServerStyleSheet } from 'styled-components'

const app = express()

app.use(express.static("public"))

app.get("*", (req, res) => {

  const sheet = new ServerStyleSheet()

  const body = renderToString(sheet.collectStyles(<App />))
  const styles = sheet.getStyleTags()
  const title = 'Server Side rendering with Styled Compontents'


  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
        <title>${title}</title>

        ${styles}
        <script src="/bundle.js" defer></script>
    </head>
    
    <body>
      <div id="root">${body}</div>
      </body>
      </html>
      `)
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening")
})