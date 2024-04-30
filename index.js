let button = document.getElementById("butn");

function generateColor(){
    let r =Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let color = "rgb("+r+","+g+","+b+")";
    return color;
}

function generateTable(){
    let table1 = document.getElementById("table1");
    let table2 = document.getElementById("table2");
    let table3 = document.getElementById("table3");
    let input1 = document.getElementById("input-1");
    let input2 = document.getElementById("input-2");
    let arr = input1.value.split("#").map(Number);
    let brr = input2.value.split("#").map(Number);
    // console.log(arr);console.log(brr);
    let a=arr[0], b=arr[1], c=arr[2], x=brr[0], y=brr[1], z=brr[2];
    let mat1=[],mat2=[];
    for(var i=0;i<a;i++){
        mat1[i]=[];
    }
    for(var i=0;i<x;i++){
        mat2[i]=[];
    }
    table1.innerHTML = "";
    for(var i=0;i<a;i++){
        var n = c;
        n = n*(i+1);
        let row = document.createElement("tr");
        for(var j=0;j<b;j++){
            let cell = document.createElement("td");
            cell.innerHTML = `${n}`;
            mat1[i][j]=n;
            row.appendChild(cell);
            n+=(i+1);
        }
        table1.appendChild(row);
    }

    table2.innerHTML = "";
    for(var i=0;i<x;i++){
        var n = z;
        n*=(i+1);
        let row = document.createElement("tr");
        for(var j=0;j<y;j++){
            let cell = document.createElement("td");
            cell.innerHTML = `${n}`;
            mat2[i][j]=n;
            row.appendChild(cell);
            n+=(i+1);
        }
        table2.appendChild(row);
    }

    table3.innerHTML = "";
    for(var i=0;i<a;i++){
        let row = document.createElement("tr");

    }
}

button.addEventListener("click",()=>{
    generateTable();
});