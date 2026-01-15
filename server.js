const { createServer } = require("http")
const next = require("next")

const port = parseInt(process.env.PORT || "7510", 10)
const hostname = process.env.HOST || "0.0.0.0"
const app = next({ dev: false, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, hostname, (err) => {
    if (err) throw err
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
