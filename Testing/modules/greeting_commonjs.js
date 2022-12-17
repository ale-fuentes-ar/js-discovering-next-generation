const hiUser = function(name) {
    process.stdout.write(`Hi ${name}\n`);
}

const insideHi = function(name) {
    process.stdout.write(`Hi ${name}, now you're inside module`);
}

exports.hiUser = hiUser;