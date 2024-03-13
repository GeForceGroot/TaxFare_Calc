// const { json } = require('express');
// const app = require('../server');
// const mocha = require('mocha')
// const expect = mocha.expect;
// const request = require('request')
// let server;
// describe('server', ()=>{

//     before((done)=>{
//         server = app.listen(4040, done)
//     })

//     it('rate should be correct', (done)=>{
//         request.get('http://localhost:4040/rates', (err, req, res)=>{
//             let body = JSON.parse(res);
//             console.log(body);
//             done();
//         })
//     })

//     after(()=>{
//         server.close();
//     })

// })
