from http.server import BaseHTTPRequestHandler

def handler(request, response):
    response.status_code = 200
    response.setHeader('Content-type', 'text/plain')
    response.end()
    response.send('Hello, world!'.encode('utf-8'))
