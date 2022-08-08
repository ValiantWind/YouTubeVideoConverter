function generate(){
    var urlInput = document.getElementById("input").value;
  
    var apiUrl = `https://convert2mp3s.com/api/widgetv2?url=${urlInput}`;

    var output = document.getElementById("output");

  var submitButton = document.getElementById("submit");

  submitButton.innerText = "Success!"

    output.src = apiUrl;

  console.log(output)

  }