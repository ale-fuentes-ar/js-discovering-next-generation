const hiUser = function(name){
    process.stdout.write(`hello human ${name}\n`);
};

const privateGretting = function(name) {
    process.stdout.write('It this a private function');
};

export default hiUser;