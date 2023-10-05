var figlet = require('figlet');

figlet ('Lee Hyo Jun', function(err, data){
    if (err)
    {
        console.log('Something went wrong...');
        console.log(err);
        return;
    }
    console.log(data)
})