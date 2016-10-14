var request = new Request({
    link: 'chain',
    onSuccess: function(){
        console.log(this.response.text);
    }
});

request.send({url: '/index.html', method: 'get'});
request.send({url: '/comments', method: 'post', data: {name: 'Mark'}});
