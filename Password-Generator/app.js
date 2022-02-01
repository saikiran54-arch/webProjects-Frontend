const generatePassword = () =>
{
    let length = 15,
    charSet = "abcdefghijklmnoppqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&",
    retval= "";

    for(let i=0,n=charSet.length;i<length;i++){
        retval += charSet.charAt(Math.floor(Math.random()*n));
    }
    document.getElementById("password").value = retval;
};


const copyPassword = () =>{
    var copypsd = document.getElementById("password");
    copypsd.select();
    document.execCommand("copy");
  } 