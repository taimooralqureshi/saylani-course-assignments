// // chap#1 Q#1
// alert("Welcome to JS Land");

// // chap#1 Q#2
// alert("Error! Please enter a valid password.");

// // chap#1 Q#3
// alert("Welcome to JS Land...\nHappy code!");

// // chap#1 Q#4,5,6
// alert("Welcome to JS Land...");

// alert("Happy code!");

// // =======================================================================
// //                             Chapter # 2
// // =======================================================================

// // Chap # 2 Q#1
// var username;

// // Chap # 2 Q#2
// var myName = "Taimoor Qureshi";

// // Chap # 2 Q#3
// var message = "Hello, world!";

// alert(message)

// // Chap # 2 Q#4
// var student = {
//     name: 'john doe',
//     age: 15,
//     status: 'certified Mobile Application Development'
// }

// alert(student.name);
// alert(student.age);
// alert(student.status);


// // Chap # 2 Q#5
// var str = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(str);


// // Chap # 2 Q#6
// var email = "taimooralqureshi@gmail.com";
// alert('My email address is '+ email);

// // Chap # 2 Q#7
// var book = "A smarter way to learn JS"
// alert("I'm trying to learn from the book "+ book);

// // Chap # 2 Q#8
// var webContent = "<p>Yah! I can write HTML content through JavaScript!</p>";
// document.write(webContent);

// // Chap # 2 Q#9
// var str = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(str);


// // =======================================================================
// //                             Chapter # 3
// // =======================================================================

// // Chap # 3 Q#1
// var age = 20;
// alert("I'm "+age+ " years old");

// // Chap # 3 Q#2
// var visit = 0;
// alert("you have visited this site " + ++visit + "times");

// // Chap # 3 Q#3
// var birthYear =  2000
// document.write("my year of birth " + birthYear);
// document.write("\nData type of declared variable is "+ typeof(birthYear));

// // Chap # 3 Q#4
// var record = {
//     site : "www.xyzClothing.com",
//     visitName: "John doe",
//     quanity: 5,
//     product: "T-shirt(s)"
// }
// document.write(record.visitName+ "ordered "+ record.quanity +" "+ record.product + " on " + record.site + " store");

// // =======================================================================
// //                             Chapter # 4
// // =======================================================================

// // Q#1
// var greet,count, foo;

// // Q#2
// var var1, $var, _var, var_1, var_$;
// var 1var, var, @var, var-1,+var;


// // Q#3
// document.write("<b>Rules for naming JS variables</b>");
// document.write("<br>Variable names can only contain numbers, $, and _ . For example: myVar, $my_var");
// document.write('<br>Variables must begin with a letter, $ or \
// _ . For example $name, _name or name');
// document.write("<br>Variable names are case sensitive");
// document.write("<br>Variable names should not be JS Keywords")

// // =======================================================================
// //                             Chapter # 5
// // =======================================================================

// // Q#1
// var n1 = prompt("enter your first number");
// var n2 =  prompt("enter your second number");

// // Q#2
// var add = Number(n1)+Number(n2);
// var sub = n1-n2;
// var mul = n1*n2;
// var div = n1/n2;
// var mod = n1%n2; 
// document.write(`sum of ${n1} and ${n2} is ${add}`);
// document.write(`<br>subraction of ${n2} from ${n1} is ${sub}`);
// document.write(`<br>multiplication of ${n1} and ${n2} is ${mul}`);
// document.write(`<br>division of ${n2} by ${n1} is ${div}`);
// document.write(`<br>mod of ${n1} by ${n2} is ${mod}`);

// //  Q#3
// var n;
// document.write(`value after variable declaration is ${n}`);
// n = 5;
// document.write(`<br>Intial value ${n}`);
// document.write(`<br>value of increment is ${++n}`);
// document.write(`<br>value after addition is ${n = Number(n)+7}`);
// document.write(`<br>value after decrement ${--n}`);
// document.write(`<br>The remainder is ${Number(n)%3}`);


// // Q# 4
// var ticket = 600;
// var n = 5;
// document.write(`total cost of buying ${n} ticket(s) is ${n*ticket} pkrs`);


// // Q# 5
// var table = 5;
// for (var i=1; i<=10; i++)
// {
//   document.write(`${table} X ${i} = ${table*i}<br>`);
// }

// // Q# 6
// var C = 25, F = 70;
// document.write(`${C}'C is ${C*9/5+32}'F`);
// document.write(`<br>${F}'F is ${(F-32)*5/9}'C`)

// // Q#7
// var item1_p =499, item1_q= 4;
// var item2_p =700, item2_q= 2;
// var charge = 100;
// document.write(`Price of item 1 is ${item1_p}<br>`);
// document.write(`Quantity of item 1 is ${item1_q}<br>`);
// document.write(`Price of item 2 is ${item2_p}<br>`);
// document.write(`Quantity of item 2 is ${item2_q}<br>`);
// document.write(`Shipping Charges is ${charge}<br><br>`);
// document.write(`Total cost of order is ${item1_p*item1_q+item2_p*item2_q+charge}`)

// // Q#8
// var tm = 980;
// var om = 804;
// document.write("Total marks "+ tm);
// document.write("<br>Obtained marks "+ om);
// document.write("<br>Percentage: "+ om/tm +"%");

// document.write('<h1>Ch# 5 / Q# 9</h1>')
// document.write(`total currency in PKR: ${10*104.8+25*28}`)

// document.write('<h1>Ch# 5 / Q# 10</h1>')
// var result = (5+5)*10/2




// =======================================================================
//                             Chapter # 6-9
// =======================================================================

// document.write('<h1>Ch# 6 / Q# 1</h1>')
// var a = 10;
// document.write(`The value a is ${a}<br>`);
// document.write(`-----------------------------------<br>`);
// document.write(`The value of ++a is: ${++a}<br>`);
// document.write(`Now the value of a is: ${a} <br>`);
// document.write(`The value of a++ is: ${a++}<br>`);
// document.write(`Now the value of a is: ${a} <br>`);
// document.write(`The value of --a is: ${--a}<br>`);
// document.write(`Now the value of a is: ${a} <br>`);
// document.write(`The value of a-- is: ${a--}<br>`);
// document.write(`Now the value of a is: ${a} <br>`);


// document.write('<h1>Ch# 6 / Q# 2</h1>')
// var a = 2,b = 1;
// var result = --a - --b + ++b + b--;
// a=2,b=1
// document.write(`a = ${a}<br>b = ${b}<br>result = ${result}<br>`);
// document.write(`<br>--a = ${--a}<br>`);

// a=2,b=1
// document.write(`--a - --b = ${--a - --b}<br>`);
// document.write(`--a - --b + ++b = ${--a - --b + ++b}<br>`);
// document.write(`--a - --b + ++b + b-- = ${--a - --b + ++b + b--}<br>`);



// document.write('<h1>Ch# 6 / Q# 3</h1>')
// var name = prompt("what is your name?")
// document.write(`Welcome ${name}<br>`);


// document.write('<h1>Ch# 6 / Q# 5</h1>')
// var table = prompt("Enter number print table");
// table = table ? table : 5; 
// for (var i=1; i<=10; i++)
// {
//   document.write(`${table} X ${i} = ${table*i}<br>`);
// }


// document.write('<h1>Ch# 6 / Q# 6</h1>')
// var s1 = prompt("your subject name?")
// var o1 = prompt(`your marks in ${s1}`)

// var s2 = prompt("your subject name?")
// var o2 = prompt(`your marks in ${s2}`)

// var s3 = prompt("your subject name?")
// var o3 = prompt(`your marks in ${s3}`)

// document.write(`<table>
// <tr>
// <td>Subject</td>
// <td>Total Marks</td>
// <td>Obtained Marks</td>
// <td>Percentage</td>
// </tr>

// <tr>
//     <td>${s1}</td>
//     <td>100</td>
//     <td>${o1}</td>
//     <td>${ (Number(o1)/100)*100 }%</td>

// </tr>
// <tr>
//     <td>${s2}</td>
//     <td>100</td>
//     <td>${o2}</td>
//     <td>${ (Number(o2)/100)*100 }%</td>
// </tr>
// <tr>
//     <td>${s3}</td>
//     <td>100</td>
//     <td>${o3}</td>
//     <td>${ (Number(o3)/100)*100 }%</td>

// </tr>

// </table><br>`);



// =======================================================================
//                             Chapter # 9-11
// =======================================================================
// document.write('<h1>Q# 1</h1>')
// var city = prompt('Enter your city!')
// if (city == 'karachi')
//     alert("Welcome to City of Light!")

// document.write('<h1>Q# 2</h1>')
// var gender = prompt("Input your gender!");
// if (gender == 'male')
//     alert(`Welcome, Sir`);
//     alert('Welcome Ma\'am');

// document.write('<h1>Q# 10</h1>')
// var T = prompt("Input temperature");

// if(T > 40)'It is too hot outside.';
// if(T > 30)'The Weather today is Normal.';
// if(T > 20)'Today’s Weather is cool`.';
// if(T > 10)'OMG! Today’s weather is so Cool.';

// document.write('<h1>Q# 11</h1>')
// var n1 = Number(prompt("input number 1"));
// var n1 = Number(prompt("input number 2"));
// var opt = prompt('input operator');

// if(opt == '+')  console.log(n1+n2);
// if(opt == '-')  console.log(n1-n2);
// if(opt == '*')  console.log(n1*n2);
// if(opt == '/')  console.log(n1/n2);
// if(opt == '%')  console.log(n1%n2);

// =======================================================================
//                             Chapter # 11 - 12
// =======================================================================

// document.write('<h1>Q# 1</h1>')
// var char = prompt("input a char!");
// var c = char.charCodeAt()
// if (char <= 90 && char >= 65)
//     document.write(`${c} is upper case alphabet`)
// else if (char <= 122 && char >= 97)
//     document.write(`${c} is lower case alphabet`)
// else    document.write(`${c} is Number`)

 

// document.write('<h1>Q# 2</h1>')
// var city = prompt('Enter your city!')
// if (city == 'karachi')
//     alert("Welcome to City of Light!")

// document.write('<h1>Q# 3</h1>')
// var gender = prompt("Input your gender!");
// if (gender == 'male')
//     alert(`Welcome, Sir`);
//     alert('Welcome Ma\'am');

// document.write('<h1>Q# 4</h1>')
// var T = prompt("Input temperature");

// if(T > 40)'It is too hot outside.';
// if(T > 30)'The Weather today is Normal.';
// if(T > 20)'Today’s Weather is cool`.';
// if(T > 10)'OMG! Today’s weather is so Cool.';

// document.write('<h1>Q# 51</h1>')
// var n1 = Number(prompt("input number 1"));
// var n1 = Number(prompt("input number 2"));
// var opt = prompt('input operator');

// if(opt == '+')  console.log(n1+n2);
// if(opt == '-')  console.log(n1-n2);
// if(opt == '*')  console.log(n1*n2);
// if(opt == '/')  console.log(n1/n2);
// if(opt == '%')  console.log(n1%n2);


