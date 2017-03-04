import socket
from threading import *

import sys
import os

host = ''
port = os.getenv('PORT', 3600)

print "Server starting on port " + str(port)
print (host)

print (port)
serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

port = int(port)
host = socket.gethostname()

serversocket.bind((host, port))

# class client(Thread):
#     def __init__(self, socket, address):
#         Thread.__init__(self)
#         self.sock = socket
#         self.addr = address
#         self.start()
#
#     def run(self):
#         engine = Engine(self.sock, self.addr)
#         max_input = 1024
#
#         while 1:
#             data = self.sock.recv(max_input)
#
#             engine.receive(data)
#             self.sock.send(engine.response())

# capacity = 5
serversocket.listen(1)

print ('Server started and listening.')
while True:
	csock, caddr = serversocket.accept()

	print "Connection from: " + `caddr`
	print req[0:100]
	req = csock.recv(1024)

	lines = req.split('\n')

	csock.sendall("""HTTP/1.0 200 OK
		Content-Type: text/html
		<html>
			<head>
				<title>Success</title>
			</head>
			<body>
				Success
			</body>
		</html>
	""")

	#clientsocket, address = serversocket.accept()
    #client(clientsocket, address)
