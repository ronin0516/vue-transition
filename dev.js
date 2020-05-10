
// const env = require("./env.dev");
const {exec} = require("child_process");
let apiMap = require('./api.config');

const argv = process.argv[2];
console.log("输入的指令", argv);

apiMap[argv] && (process.env.VUE_APP_API_BASE = apiMap[argv]);

(function(){
    let _process =  exec(`vue-cli-service serve`, {detached: true}, function(error, stdout, stderr) {
        if(error) {
            console.log("build - error" , error)
            return
        }
        console.log("build - stdout", stdout)
        console.log("build - stderr", stderr);

    })

    _process.stdout.pipe(process.stdout)
    _process.stderr.pipe(process.stderr)
})()