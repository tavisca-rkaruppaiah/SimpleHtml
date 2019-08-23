//visible particluar divs
function visibleSomePages(visibleid, hidepartone, hideparttwo, buttonid, otherb, otherbut )
{
    document.getElementById(visibleid).style.display='block';
    document.getElementById(buttonid).style.backgroundColor =  "rgb(255, 204, 93)";
    document.getElementById(otherb).style.backgroundColor =  "#f1f1f1";
    document.getElementById(otherbut).style.backgroundColor =  "#f1f1f1";
    document.getElementById(hidepartone).style.display='none';
    document.getElementById(hideparttwo).style.display='none';
}

function redirectPages(url)
{
    location.replace(url);
}
// ARRAY FOR HEADER.
var arrHead = new Array();
var tags = [];
arrHead = ['', 'ItemName', ''];      // SIMPLY ADD OR REMOVE VALUES IN THE ARRAY FOR TABLE HEADERS.
   
// FIRST CREATE A TABLE STRUCTURE BY ADDING A FEW HEADERS AND
// ADD THE TABLE TO YOUR WEB PAGE.
function createTable() 
{
    autocomplete(document.getElementById("item"), tags);
    var itemTable = document.createElement('table');
    itemTable.setAttribute('id', 'itemTable');            // SET THE TABLE ID.
   
    var tr = itemTable.insertRow(-1);
   
    for (var h = 0; h < arrHead.length; h++) 
    {
        var th = document.createElement('th');          // TABLE HEADER.
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }
   
    var div = document.getElementById('cont');
    div.appendChild(itemTable);    // ADD THE TABLE TO YOUR WEB PAGE.
}
var count = 0;
// ADD A NEW ROW TO THE TABLE.s
function addRow() 
{
    var itemTab = document.getElementById('itemTable');
    let getItem = document.getElementById('item').value;

    if(getItem.length == 0)
    {
        alert('Added element using JSONPlaceholder');
        jsonPlace();
        return false;
    }

    var rowCnt = itemTab.rows.length;        // GET TABLE ROW COUNT.
    var tr = itemTab.insertRow(rowCnt);      // TABLE ROW.
    tr = itemTab.insertRow(rowCnt);

    for (var c = 0; c < arrHead.length; c++) 
    {
        var td = document.createElement('td');          // TABLE DEFINITION.
        td = tr.insertCell(c);

        if (c == 0) 
        {    // FIRST COLUMN.
            // ADD A BUTTON.
            var buttonDel = document.createElement('input');

            // SET INPUT ATTRIBUTE.
            buttonDel.setAttribute('type', 'button');
            buttonDel.setAttribute('value', 'Del');
            buttonDel.setAttribute('id', 'delete');

            // ADD THE BUTTON's 'onclick' EVENT.
            buttonDel.setAttribute('onclick', 'removeRow(this)');

            td.appendChild(buttonDel);
        }
        else if(c == 2)
        {
            var buttonEdit = document.createElement('input');

            // SET INPUT ATTRIBUTE.
            buttonEdit.setAttribute('type', 'button');
            buttonEdit.setAttribute('value', 'Edit');
            buttonEdit.setAttribute('id', 'edit');

            // ADD THE BUTTON's 'onclick' EVENT.
            buttonEdit.setAttribute('onclick', 'editRow(this)');

            td.appendChild(buttonEdit);
        }
        else 
        {
            // CREATE AND ADD TEXTBOX IN EACH CELL.
            var ele = document.createElement('p');
            ele.setAttribute('id', 'item'+count);
            ele.innerHTML = getItem;
            td.appendChild(ele);
            tags.push(getItem);
            count++;
            //submit();
        }
    }
    document.getElementById('item').value = "";

}

// DELETE TABLE ROW.
function removeRow(oButton) 
{
    let itemTab = document.getElementById('itemTable');
    itemTab.deleteRow(oButton.parentNode.parentNode.rowIndex);  
    console.log(oButton.parentElement.nextElementSibling.childNodes[0].innerHTML);     // BUTTON -> TD -> TR.
    let removeElement = oButton.parentElement.nextElementSibling.childNodes[0].innerHTML;
    tags = arrayRemove(tags, removeElement);
    console.log(tags);
}

function arrayRemove(arr, value) {

  return arr.filter(function(ele){
      return ele != value;
  });

}

//Edit Table Row

function editRow(oButton)
{
    let itemTab = document.getElementById('itemTable');
    itemTab.rows.item(oButton.parentNode.parentNode.rowIndex).cells[1].childNodes[0].innerHTML;
    console.log(itemTab.rows.item(oButton.parentNode.parentNode.rowIndex).cells[1].childNodes[0].innerHTML);
    console.log(oButton.parentNode.parentNode.rowIndex);  
    let tempButton = itemTab.rows.item(oButton.parentNode.parentNode.rowIndex).cells[2].childNodes[0].value;
    console.log(tempButton);
    console.log(oButton.parentElement.previousElementSibling);
    let ele=oButton.parentElement.previousElementSibling;
    console.log(ele.childNodes[0]);
    let input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","getdata");
    console.log(ele.textContent);
    input.setAttribute('value', ele.textContent);
    ele.replaceChild(input,ele.childNodes[0]);

    var prev=oButton.parentElement;
    console.log(prev);
    var savebutton=document.createElement("input");
    savebutton.setAttribute('type','button');
    savebutton.setAttribute('value', 'Save');
    savebutton.setAttribute("onclick","saveNewValue(this)");
    prev.replaceChild(savebutton,prev.childNodes[0]);


}

// save the new values

function saveNewValue(oButton)
{
    console.log('save new value');
    console.log(oButton.parentElement);
    let ele=oButton.parentElement.previousElementSibling;

    console.log(ele.childNodes[0]);
    console.log(ele.nextElementSibling.childNodes[0]);
    console.log(document.getElementById('getdata').value);
    let eleP = document.createElement('p');
    eleP.setAttribute('id', 'item'+count);
    eleP.innerHTML = document.getElementById('getdata').value;
    ele.replaceChild(eleP, ele.childNodes[0]);
    tags.push(eleP.innerHTML);
    console.log(tags);
    //console.log(document.getElementById('getdata').value);

    var buttonEdit = document.createElement('input');

    // SET INPUT ATTRIBUTE.
    buttonEdit.setAttribute('type', 'button');
    buttonEdit.setAttribute('value', 'Edit');
    buttonEdit.setAttribute('id', 'edit');

    // ADD THE BUTTON's 'onclick' EVENT.
    buttonEdit.setAttribute('onclick', 'editRow(this)');
    ele.nextElementSibling.replaceChild(buttonEdit, ele.nextElementSibling.childNodes[0]);
}


// EXTRACT AND SUBMIT TABLE DATA.
function submit() 
{
    var myTab = document.getElementById('itemTable');
    let valueSearch = document.getElementById('item').value;
    console.log(valueSearch);
    
    var values = new Array();

    // LOOP THROUGH EACH ROW OF THE TABLE.
    for (row = 1; row < myTab.rows.length - 1; row++) 
    {
        for (c = 0; c < myTab.rows[row].cells.length; c++) 
        {   
            // EACH CELL IN A ROW.
            var element = myTab.rows.item(row).cells[c];
            console.log(myTab.rows.item(row).cells[1].childNodes[0]);
            if (element.childNodes[0].innerHTML == valueSearch) 
            {
                   values.push("'" + element.childNodes[0].innerHTML + "'");
                   myTab.rows.item(row).cells[1].childNodes[0].style.color = 'blue';
            }
            else
            {
                element.childNodes[0].style.color = 'black';
            }
        }
    }
    console.log(values);
}

//validate email
function validateEmail(emailField)
{
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) 
    {
        alert('Invalid Email Address');
        return false;
    }

    return true;
}
//login function
function login()
{
    if(validPassword() == true)
    {
        alert('sucessfully logged');
    }
}

function validPassword()
{
    var pass = document.getElementById('pass').value;
    if(pass.length == 0)
    {
        alert('invalid password');
        console.log('false');
        return false;
    }

    return true;
}

function jsonPlace()
{
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => {
          console.log(json.length);

          for(let i =0; i<10;i++)
          {
              addJsonRow(json[i].title);
          }
        });
}

function addJsonRow(data)
{
  var itemTab = document.getElementById('itemTable');
    let getItem = data;
    var rowCnt = itemTab.rows.length;        // GET TABLE ROW COUNT.
    var tr = itemTab.insertRow(rowCnt);      // TABLE ROW.
    tr = itemTab.insertRow(rowCnt);

    for (var c = 0; c < arrHead.length; c++) 
    {
        var td = document.createElement('td');          // TABLE DEFINITION.
        td = tr.insertCell(c);

        if (c == 0) 
        {    // FIRST COLUMN.
            // ADD A BUTTON.
            var buttonDel = document.createElement('input');

            // SET INPUT ATTRIBUTE.
            buttonDel.setAttribute('type', 'button');
            buttonDel.setAttribute('value', 'Del');
            buttonDel.setAttribute('id', 'delete');

            // ADD THE BUTTON's 'onclick' EVENT.
            buttonDel.setAttribute('onclick', 'removeRow(this)');

            td.appendChild(buttonDel);
        }
        else if(c == 2)
        {
            var buttonEdit = document.createElement('input');

            // SET INPUT ATTRIBUTE.
            buttonEdit.setAttribute('type', 'button');
            buttonEdit.setAttribute('value', 'Edit');
            buttonEdit.setAttribute('id', 'edit');

            // ADD THE BUTTON's 'onclick' EVENT.
            buttonEdit.setAttribute('onclick', 'editRow(this)');

            td.appendChild(buttonEdit);
        }
        else 
        {
            // CREATE AND ADD TEXTBOX IN EACH CELL.
            var ele = document.createElement('p');
            ele.innerHTML = getItem;
            td.appendChild(ele);
            tags.push(getItem);
            //submit();
        }
    }
    //document.getElementById('item').value = "";

}




function autocomplete(inp, arr) 
{
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
   /*execute a function presses a key on the keyboard:*/
   inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) 
  {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) 
  {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) 
  {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

   
  
 
