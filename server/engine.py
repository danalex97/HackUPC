dummy_response = """
        HTTP/1.0 200 OK
		Content-Type: text/html
		<html>
			<head>
				<title>Success</title>
			</head>
			<body>
				Success
			</body>
		</html>
	"""

class Engine():
    def __init__(self, socket, address):
        self.req = ""
        self.socket = socket
        self.address = address
        self.response = ""

    def receive(self, data):
        print("I got data")
        self.response = dummy_response

    def preprocess(self):
        return self.response

    def response(self):
        return preprocess()
