const path=require ('path');
console.log(path.sep);
// console.log(process.env.path);

// Console.log(path.delimiter);

const filepath1='/public_html/home/index.html';

const currentfilepath=__filename;
console.log( 'currentfilepath >',currentfilepath);
// const currentfilepath=__dirname;
// console.log(currentfilepath);


// let result=path.basename(currentfilepath);
// console.log(result);

// let basename=path.basename(currentfilepath);
//  console.log('basename >' ,basename);

// let basenamewithoutExt=path.basename(currentfilepath,'.JS');

// Console.log('basenamewithoutExt >',basenamewithoutExt);

let result=path.dirname(currentfilepath);
console.log('result >',result);

console.log('ext1 >',path.extname(currentfilepath));
console.log('ext2', path.extname('index.md.js'));

let pathTofile=path.format({
    dir:'/public_html/home/index.html',
    base:'sintu.html'
})
console.log('pathTofile >',pathTofile);

console.log('IsAbsolute', path.isAbsolute(currentfilepath));
console.log('IsAbsolute', path.isAbsolute('/index.js'));
console.log('IsAbsolute', path.isAbsolute('./index.js'));

let pathTodir = path.join('/home','js','dist','index.js');
console.log('pathTodir >',pathTodir);

console.log('parse >',path.parse(currentfilepath));

console.log('relative path >',path.relative)
