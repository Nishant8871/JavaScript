
const result = document.getElementById('result')
function display(oper)
{
  
  result.value+=oper
}

function calculation()
{
    result.value=eval(result.value)

}

function cleara()
  {
    result.value='';
  }