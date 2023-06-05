
// IF ELSE IF //

// var m1 = prompt("Enter GUJARATI marks:");
// var m2 = prompt("Enter ENGLISH marks:");
// var m3 = prompt("Enter SCIENCE marks:");
// var m4 = prompt("Enter MATHS marks:");

//     a=parseInt(m1);
//     b=parseInt(m2);
//     c=parseInt(m3);
//     d=parseInt(m4);


// var total = a+b+c+d;
//     console.log("TOTAL IS :  "+total+"<br>");

// var per= total/4;
// document.write("Percentage "+per+"<br>");

//     if(per>=80){
//         document.write("You achived Grade A+");
//     }

//     else if(per>70 & pre<80){
//         document.write("You achived Grade A");
//     }

//     else if(per>60 & pre<70){
//         document.write("You achived Grade B+");
//     }

//     else if(per>50 & pre<60){
//         document.write("You achived Grade B");
//     }

//     else if(per>40 & pre<50){
//         document.write("PASS");
//     }

//     else{
//         document.write("FAIL");
//     }



// NESTED IF //

// let a=34, b=40, c=42;

//     if(a>b){
//         if(a>c){
//             document.write("A is max = " +a);
//         }
//         else{
//             document.write("C is max = " +c);
//         }
//     }else{
//         if(b>c){
//             document.write("B is max = " +b);
//         }
//         else{
//             document.write("C is max = " +c);
//         }
//     }


// FIND MAX 4 VALUE //

// let a=3400, b=4000, c=4010, d=4050;

//     if(a>b){
//         if(a>c){

//             if(a>d){
//             document.write("A is max = " +a); 
//             }
//             else{
//             document.write("D is max = " +d);
//             }
//         }
//         else{
//             if(c>d){
//             document.write("C is max = " +c);
//             }
//             else{
//             document.write("D is max = " +d);
//             }
//         }
//     }

//     else{
//         if(b>c){
//             if(b>d){
//                 document.write("B is max = " +b);
//                 }
//                 else{
//                 document.write("D is max = " +d);
//                 }
//         }
//         else{
//             if(c>d){
//             document.write("C is max = " +c);
//             }
//             else{
//             document.write("D is max = " +d);
//             }
//         }
//     }

// SWITCH CASE //

//TASK=1. 1, 2, 3, 4

// a=10;
// b=15;


// document.write("<pre> 1.add\n 2.sub\n 3.mut\n 4.div\n </pre>")
//     let ch=prompt("Enter Your Choice")

//     switch(ch){
//         case '1':
//             c=a+b;
//             document.write("<br> Addition is "+c);
//             break;

//             case '2':
//                 c=a-b;
//                 document.write("\n Subtraction is "+c);
//                 break;

//                 case '3':
//                     c=a*b;
//                     document.write("\n Multiple is "+c);
//                     break;

//                     case '4':
//                         c=a/b;
//                         document.write("\n Division is "+c);
//                         break;

//                         default:
//                             document.write("\n invalid choice");
//     }

//TASK-2. TYPE S TO SUNDAY, M TO MONDAY ETC.

    // document.write("<pre> 1.SUNDAY\n 2.MONDAY\n 3.TUESDAY\n 4.THURSDAY\n 5.FRIDAY\n 6.SATURDAY\n</pre>");
    // let ch=prompt("ENTER A DAY");


    //     switch(ch){

    //         case'1':
    //         document.write("\n 1.SUNDAY");
    //         break;

    //         case'2':
    //         document.write("\n 2.MONDAY");
    //         break;

    //         case'3':
    //         document.write("\n 3.TUSEDAY");
    //         break;

    //         case'4':
    //         document.write("\n 4.THURSDAY");
    //         break;

    //         case'5':
    //         document.write("\n 5.FRIDAY");
    //         break;

    //         case'6':
    //         document.write("\n 6.SATURDAY");
    //         break;

    //         default:
    //         document.write("\n invalid choice");

    //     }


//TASK-3. +, -, *, /.

    a=prompt("Enter a number");
    b=prompt("Enter b number");

    document.write("<pre> +\n -\n *\n /\n</pre>");
    ch=prompt("ENTER SIGN A ANSWER.");

    a=parseInt(a);
    b=parseInt(b);



        switch(ch){

            case'+':
            c=a+b;;
            document.write("\n ADDITION IS " +c);
            break;

            case'-':
            c=a-b;
            document.write("\n SUBSTRACTION IS " +c);
            break;

            case'*':
            c=a*b;
            document.write("\n MULTIPLE IS " +c);
            break;

            case'/':
            c=a/b;
            document.write("\n DIVISION IS " +c);
            break;

            default:
            document.write("\n invalid choice");

        }

