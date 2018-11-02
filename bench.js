const util=require("util");
const zlib=require("zlib");
const gzip=util.promisify(zlib.gzip);
const fs=require("fs");
const tbuf=fs.readFileSync("test.bin");

const start=Date.now();
const queue=[];
for(var i=0;i<15;i++)queue.push(gzip(tbuf));

Promise.all(queue).then(()=>
	console.log(`${Date.now()-start}ms, ${process.env.UV_THREADPOOL_SIZE}thread`)
);
