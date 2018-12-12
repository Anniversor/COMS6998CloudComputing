var data = document.querySelector('input[type=file]').files[0];

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("PUT", "https://i9sqlgcajl.execute-api.us-west-2.amazonaws.com/test/s3?key=chatbotanniver/readme.jpg");
xhr.setRequestHeader("Content-Type", "image/jpeg");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("Postman-Token", "98cb3b94-091a-4c4f-a43d-50b3dcafb009");

xhr.send(data);


