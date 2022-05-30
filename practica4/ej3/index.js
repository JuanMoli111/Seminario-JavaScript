const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}` ));



app.post('/api', (request, response) =>{
    
    //console.log(request.body.user);

    response.json({
        status: "success, printing data in server console:",
        user: request.body.user,
        pass: request.body.pass
    });
    
})

