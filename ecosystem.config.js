module.exports = {
  "apps": [
      {
        "name": "mock",
        "script": "json-server",
        "args": "./src/mock/mock.js -r ./src/mock/route.json -p 9000 --watch" 
      }
  ]
}
