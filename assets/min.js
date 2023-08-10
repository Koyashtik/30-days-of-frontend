var x=10;
var y=20;
var z=30;
var a=5;

// if(x>y){
//     document.write("x is smaller");
// }
// else{
//     document.write("x is greater");
// }

// if(x>y && x>y && x>z){
//     document.write("x is greatest");
// }
// else if(y>z && y>x && y>a){
//     document.write("y is greatet");
// }
// else if(z>x && z>y && z>a){
//     document.write("z is greatest");
// }
// else{
//     document.write("a is great");
// }

// if(x<y){
//     if(y>a && y>z){
//         document.write("y is greatest");
//     }
//     else if(z>a && z>y){
//         document.write("z is greatest");
//     }
//     else{
//         document.write("a is greater");
//     }
// }
// else{
//     document.write("x is the greatest");
// }

var d;
switch(new Date().getDay()){
    case 0:
        d="sun";
        break;
    case 1:
        d="mon";
        break;
    case 2:
        d="tues";
        break;
    case 3:
        d="wed";
        break;
    case 4:
        d="thurs";
        break;
    case 5:
        d="fri";
        break;
    case 6:
        d="sat";
        break;
}
document.write(d);
document.write("<br>");
document.write(new Date().getFullYear());
document.write("<br>" + new Date().getMonth());
document.write("<br>");

var i=1;
while(i<=10){
    document.write("<br>"+ i);
    i++;
}
document.write("<br>");

var a=1;
do{
    document.write("<br>" + a);
    a++;
}
while(a<=5);
document.write("<br>");

for(var b=1; b<=8; b++){
    document.write("<br>"+ b);  
}