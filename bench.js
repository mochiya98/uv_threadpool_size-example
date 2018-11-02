const util=require("util");
const zlib=require("zlib");
const gzip=util.promisify(zlib.gzip);
const fs=require("fs");
const tbuf=fs.readFileSync("test.bin");

const start=Date.now();
Promise.all([
	gzip(tbuf),gzip(tbuf),gzip(tbuf),gzip(tbuf),gzip(tbuf),
	gzip(tbuf),gzip(tbuf),gzip(tbuf),gzip(tbuf),gzip(tbuf),
	gzip(tbuf),gzip(tbuf),gzip(tbuf),gzip(tbuf),gzip(tbuf),
]).then(()=>console.log(`${Date.now()-start}ms, ${process.argv[2]}thread`));