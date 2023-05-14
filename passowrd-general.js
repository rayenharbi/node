var generator=require('generate-password');
var password=generator.generate({
    length:12,
    numbers:true,
    symbols: true,
    uppercase: true, 
    lowercase:true,

});
console.log(password);