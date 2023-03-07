const words = ['The', 'OnePiece', 'is', 'real'];

const join=words.join('-');
console.log(join);

//.split change a array
const title='The OnePiece is real';
const getUrl=title.split(' ').join('-').toLowerCase();

console.log(getUrl);