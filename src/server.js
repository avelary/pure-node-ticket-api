import http from "node:http"

import { jasonHandler } from "./middlewares/jsonHandler.js"
import { routeHandler } from "./middlewares/routeHandler.js"

async function listener (request, response){
    await jasonHandler(request, response)
    routeHandler(request, response)
}

http.createServer(listener).listen(3333)

