import requests
url = "https://i9sqlgcajl.execute-api.us-west-2.amazonaws.com/test/s3?key=chatbotanniver/readme.jpg"


bin_data = open("image.jpg", 'rb').read()


r = requests.put(url,data=bin_data)
print(r.text)