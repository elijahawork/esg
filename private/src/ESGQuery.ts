
import Shell from 'node-powershell'
import {exec, execSync} from 'child_process'

export function getESG(ticker: string) {
  const ps = new Shell({
    executionPolicy: 'Bypass',
    noProfile: true
  });
  
  var test : string = '(Invoke-WebRequest -UseBasicParsing -Uri "https://esg-environmental-social-governance-data.p.rapidapi.com/search?q='+ticker+'" \`\n-WebSession $session \`\n-Headers @{\n"x-rapidapi-key"="a5a4fd4b99msh511dd9f83d2666cp16b54cjsna5cae80ba822"\n"x-rapidapi-host"="esg-environmental-social-governance-data.p.rapidapi.com"\n}).Content';
  //console.log(test);
  
  function returnData(data: string) {
    //console.log((JSON.parse(data)[0]).total);
    //console.log(data);
    console.log(data);

    const totalInStruct = 'total' in JSON.parse(data)[0];
    
    if (totalInStruct) 
      return (JSON.parse(data)[0]).total;
    throw new Error(`Invalid data "${data}"`);
    
  }
  
  // var spawn = require("child_process").spawn,child;
  // child = spawn("powershell.exe",[test]);
  // child.stdout.on("data",function(data){
  //       ReturnData(data);
  // });
  // child.stderr.on("data",function(data){
  //     console.log("Powershell Errors: " + data);
  // });
  // child.on("exit",function(){
  //     console.log("Powershell Script finished");
  // });
  // child.stdin.end(); //end input

  
  const child = execSync(test, { 'shell': 'powershell.exe' });
  return returnData(child.toString('utf8'))
}