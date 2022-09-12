const target = 'abd#1234';

const reg = /[^A-Za-z0-9]/gi;

const reg2 = (/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi);   

console.log(target.replace(reg,'')); //abd1234