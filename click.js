namearray = [];

function add(form){
    var str = document.getElementById("name").value;
    namearray.push(str);
    console.log(str);
    document.getElementById("list").innerHTML = namearray;
    
}