var data = 'name=Mark&age=23';

var request = new Request({
    url: 'http://foo.com/comment/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.length
    }
});
