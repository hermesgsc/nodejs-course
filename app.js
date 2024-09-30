const http = require('http')


const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers)
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>NodeJS Course</title></head>')
  res.write('<body><p>NodeJS Course</p></body>')

  res.write('</html>')
  res.end()
});

server.listen(1910);