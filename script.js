const pswd1 = document.querySelector("#psswd");
const pswd2 = document.querySelector("#conf-passwd");

function chkPsswd()
{
    let pswd1_val = pswd1.value;
    let pswd2_val = pswd2.value;
    if(!pswd1_val && !pswd2_val)
    {
        pswd1.className='';
        pswd2.className='';
    }
    else if(pswd1_val!==pswd2_val)
    {
        pswd2.className="error"
        pswd1.className='';
    }
    else
    {
        pswd1.className="match";
        pswd2.className="match";
    }
}

pswd1.addEventListener("input",()=>{
    chkPsswd();
})
pswd2.addEventListener("input",()=>{
    chkPsswd();
})