const cmd = require(__dirname + '/cmd.js');
module.exports = {
  describeEc2Instances: (env) => {
    let cliRes = cmd.run("aws ec2 describe-instances --filter \"Name=tag:env,Values=${env}\"")
    return JSON.parse(cliRes)
  }
}