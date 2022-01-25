const http=require('http');
const port=3000;

const server= http.createServer(function (req,res){
 console.log('server');
});

server.listen(port,function (error){
    if(error){
        console.log(error);
    }
    else{
        console.log('server is listenning '+port);
    }
})
