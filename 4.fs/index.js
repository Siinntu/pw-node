const fs = require('fs');

// console.log('read start');

//asynchronous way to read file

// fs.readFile("input.text",function(err,data){
//     if (err) {
//         console.log('err',err);
//         return err;
//     }
//     console.log('data',data.toString());
// })
// console.log('end');

//synchronous way to read file

// var data = fs.readFileSync('input.text');
// console.log('data:',data.toString());
// console.log('end code');
// console.log('other stuff');


// //read > open + read

// const buf = new Buffer(1024);

// fs.open('input.text','r+',function(err,fd){
//     if(err){
//         console.log('Error in opening file:',err);

//     }
//     console.log('file open successfully');

//     fs.read(fd,buf,0,buf.length,0,function(er,bytes){
//         if (er){
//             console.log('Error in reading file!')
//         }
//         console.log('data:',bytes);
//         console.log('data:',buf.slice(0,bytes).toString());
//            fs.close(fd,function(err){
//             if(err){
//                 console.log('error in closin file');

//             }else{
//                 console.log('file close success');
//             }
//            })
//     })
//  })


// //writing to file

// fs.writeFile('input.text','sintu roy',function(err){
//     if(err) {
//         console.log('error in writing file');

//     }else{
//         console.log('sucees in writing file!');
//     }
// })

// //append to file

// fs.appendFile('input.text','--sinturoy','utf8',function(err){
//     if (err){
//         console.log('error in appending file!');
//     }else{
//                  console.log('sucees in appending file!');
//              }
// })


// //deleting file
// fs.unlink('input.text',function(err){
//     if(err){
//         console.log('error in deleting file!')
//     }else{
//         console.log('success in deleting file!')
//     }
// });

