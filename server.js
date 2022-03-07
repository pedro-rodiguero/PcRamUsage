const http = require('http')
const host = "http://localhost"
const port = 3000
const stats = require(`./pcRamUsage.js`)

http.createServer((req, res) => {
    let url = req.url;

    if(url === '/stats')
        res.end(JSON.stringify(stats, null, 2))
    else
        res.end("<h1>Bem vindo!!</h1>")
}).listen(port, () => console.log(`Server is running in ${host}:${port}`));