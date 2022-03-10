
let clear = document.getElementById('btn2');
var binary = document.getElementById('binary');
var decimal = document.getElementById('decimal');
var octal = document.getElementById('octal');
var hexa = document.getElementById('hexa');
var warn = document.getElementById('warn');
var circle = document.getElementById('circle'); 


//Functions to calculate binary, octal and hexa based on the decimal number
function B(b)
{
    const array = [];
    for(var i=0; b> 0;i++)
    {
       array[i] = parseInt(b%2);
       b = parseInt(b/2);
    }
    array.reverse();

    binary.value = array.join(" ");
}

function O(o)
{
    const array2 = [];
    for(var k=0; o>0;k++)
    {
       array2[k] = parseInt(o%8);
       o = parseInt(o/8);
    }

    array2.reverse();
    octal.value = array2.join(" ");

}
function H(h)
{

    const array3 = [];
    for( j=0; h>0;j++)
    {
       array3[j] = parseInt(h%16);
       h= parseInt(h/16);
    }
  
    for(var j=array3.length-1; j>=0;j--)
    {
        
      if(array3[j] == 10)
      {
           array3[j] = "A";
      }
      else if(array3[j] == 11)
      {
           array3[j] = "B";
      }
      else if(array3[j] == 12)
      {
           array3[j] = "C";
      }
      else if(array3[j] == 13)
      {
           array3[j] = "D";
      }
      else if(array3[j] == 14)
      {
           array3[j] = "E";
      }
      else if(array3[j] == 15)
      {
           array3[j] = "F";
      }
     
       
    }

    array3.reverse();
    hexa.value = array3.join(" ");
}


//process decimal
function process()
{ 
  x= parseInt(document.getElementById('decimal').value);
   
  if(decimal.value!="")
     {
        if( decimal.value == 0)
        {
            
            binary.value =0;
            octal.value =0;
            hexa.value =0;
        }

        else{
         H(x);
         O(x);
         B(x);
        
        }}

    else if( decimal.value == "")
        {
            binary.value  = "";
            octal.value = "";
            hexa.value ="";
        }
  
}

//process binary
function process2()
{
    
    y = parseInt(document.getElementById('binary').value);

    if(binary.value!="")
     {

         DNum = 0;
        if(binary.value == 0)
        {
            decimal.value =0;
            octal.value =0;
            hexa.value=0;
        }

        else{
         for(var i=0; y!=0;i++)
        {
            rem = parseInt(y%10);
            y= parseInt(y/10);
            DNum+=rem*Math.pow(2, i);
    
        }
        O(DNum);
        H(DNum);
     
        decimal.value = DNum;}
       
    }

    else if(binary.value == "")
    {
        decimal.value = "";
        octal.value="";
        hexa.value ="";
    }

}

//process octal
function process3()
{
    a= parseInt(document.getElementById('octal').value);

    if(octal.value!="")
     {
         DNum = 0;
         if(octal.value == 0)
         {
             decimal.value =0;
             binary.value =0;
             hexa.value=0;
         }
      
        else{

         for(var i=0; a!=0;i++)
        {
            rem = parseInt(a%10);
            a= parseInt(a/10);
            DNum+=rem*Math.pow(8, i);
           
        }
        decimal.value = DNum;
        B(DNum);
        H(DNum);
    }
}
    else if(octal.value == "")
    {
        decimal.value = "";
        binary.value="";
        hexa.value="";
    }
}

//process hexa
function process4()
{
    b= parseInt(document.getElementById('hexa').value);

    if(hexa.value!="")
     {
         DNum = 0;
         if(hexa.value == 0)
         {
             decimal.value =0;
             octal.value =0;
             binary.value=0;
         }
        else{
         for(var i=0; b!=0;i++)
        {
            rem2 = parseInt(b%10);
            b = parseInt(b/10);
            DNum+=rem2*Math.pow(16, i);
           
        }
        decimal.value = DNum;
        B(DNum);
        O(DNum);
    }
     }
    else if(hexa.value == "")
    {
        decimal.value = "";
        binary.value="";
        octal.value="";
    }
}

//clear button function
function clearText()
{

        warn.innerHTML = "";
        binary.value = "";
        decimal.value ="";
        octal.value ="";
        hexa.value ="";
        document.getElementById('circle').style.animation = "animate 2s";

}

//adding event listeners using the on input event

decimal.addEventListener('input', process);
binary.addEventListener('input', process2);
octal.addEventListener('input', process3);
hexa.addEventListener('input', process4);
clear.addEventListener('click', clearText);
