self.addEventListener('message', function (e) {

    test(e.data, function (isWorking, e) {
        var result = {};
        result.id = e.id;
        result.url = e.url;
        result.isWorking = isWorking;

        self.postMessage(result);

    });

}, false);

function test(e, callback) {
    var _this = this;
    _this.e = e;
    var xhr = new XMLHttpRequest();

    var link = e.url + "rest/ping";
    xhr.open("GET", link, true);

    xhr.timeout = 10000;

    xhr.ontimeout = function () {
        callback(false, _this.e);
    };

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var temp;
                try {
                    temp = JSON.parse(xhr.responseText);
                    if (temp.Message == "pong") {
                        return callback(true, e);
                    } else {
                        return callback(false, e);
                    }
                } catch (e) {
                    return callback(false, e);
                }
            } else {
                //Something went wrong
                callback(false, e);
            }
        }
    };

    xhr.send();
}
