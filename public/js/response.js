function submit() {
    var xhr = new XMLHttpRequest();
    // xhr.open("GET","/login");
    xhr.open("GET", "http://localhost:3000/login");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Referer", "https://www.facebook.com/v3.2/dialog/oauth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&client_id=3006758226031506");
    xhr.setRequestHeader("Connection", "keep-alive");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send()
}