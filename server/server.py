import socket
from threading import *

import sys

port = 0
if len(sys.argv) == 1:
	port = 3600
else:
	port = int(sys.argv[1])
print "Server starting on port " + str(port)

host = ''
port = 0 # let OS pick port for me

print (host)
print (port)
serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

serversocket.bind((host, port))

class client(Thread):
    def __init__(self, socket, address):
        Thread.__init__(self)
        self.sock = socket
        self.addr = address
        self.start()

    def run(self):
        engine = Engine(self.sock, self.addr)
        max_input = 1024

        while 1:
            data = self.sock.recv(max_input).decode()

            engine.receive(data)
            self.sock.send(engine.response())

capacity = 5
serversocket.listen(capacity)

print ('Server started and listening.')
while True:
    clientsocket, address = serversocket.accept()
    client(clientsocket, address)
