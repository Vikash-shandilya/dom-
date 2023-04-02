// console.log('hello dom')
// console.log(document);
// console.log(document.URL);

// document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.title);
// console.log(document.forms);


// var ll=document.getElementById("header-title");
// var header=document.getElementById('main-header')
// ll.style.borderBottom='solid 2px #000'

// var bold=document.getElementsByClassName('title')
// bold[0].style.fontWeight='bold';
// // bold[0].style.color='green'

// let gbc=document.getElementsByClassName('list-group-item')
// console.log(gbc);

// gbc[2].style.backgroundColor='green'

// gbc[0].style.fontWeight='bold'
// gbc[1].style.fontWeight='bold'
// gbc[2].style.fontWeight='bold'
// gbc[3].style.fontWeight='bold'

// let abc=document.getElementsByClassName('list-group-item')
// console.log(abc);

// for (let index = 0; index < abc.length; index++) {
//     abc[index].style.fontWeight='bold'
    
// }


// //by using tag name 

// let bcd=document.getElementsByTagName('li')

// bcd[0].style.backgroundColor='orange';

//queryselector

let abc=document.querySelector('.list-group-item:nth-child(2)')
abc.style.backgroundColor='green';
console.log(abc);

let bcd=document.querySelector('.list-group-item:nth-child(2)')
bcd.style.display='none';

//queryselectorall

let cde=document.querySelectorAll('.list-group-item')
cde[1].style.color='green';

let efg=document.querySelectorAll('.list-group-item:nth-child(odd)')
console.log(efg);

for (let index = 0; index < efg.length; index++) {
    efg[index].style.backgroundColor='green'
    
}
