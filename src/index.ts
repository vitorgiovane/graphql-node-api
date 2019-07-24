import * as http from "http"
import app from "./app"

const server = http.createServer(app)

const port = 3000

server.listen(port)
server.on("listening", () => console.log(`Listening on ${port} port...`))
