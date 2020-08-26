const names = ['Marc', "Matt", "Jesse", "Rohan", "Nhi"];
let currentNameIdx = 0; 

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', "text/html");
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Hello! Welcome to my first NodeJs Server!</h1>');
        res.write('<form action="/create-user" method="POST"> <input type="text" name="username"> <input type="submit"> </form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method === "POST"){
        const requestData = [];
        req.on('data', (chunk)=>{
            requestData.push(chunk);
            console.log(chunk);
        })
        req.on('end', () => {
            const parsedData = Buffer.concat(requestData).toString();
            console.log(parsedData.split('=')[1]);
        })
        res.statusCode = 200;
        res.writeHead(302, {'Location': '/'});
        return res.end();
    }
    if (url === '/users'){
        res.setHeader('Content-Type', "text/html");
        res.statusCode = 200;
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Users:</h1>');
        res.write('<ul>');
        res.write(`<li>${names[currentNameIdx < names.length ? currentNameIdx++ : currentNameIdx=0]}</li>`);
        res.write(`<li>${names[currentNameIdx < names.length ? currentNameIdx++ : currentNameIdx=0]}</li>`);
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
}

exports.routesHandler = requestHandler;