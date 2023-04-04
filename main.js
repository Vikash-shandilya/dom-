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

// let abc=document.querySelector('.list-group-item:nth-child(2)')
// abc.style.backgroundColor='green';
// console.log(abc);

// let bcd=document.querySelector('.list-group-item:nth-child(2)')
// bcd.style.display='none';

// //queryselectorall

// let cde=document.querySelectorAll('.list-group-item')
// cde[1].style.color='green';

// let efg=document.querySelectorAll('.list-group-item:nth-child(odd)')
// console.log(efg);

// for (let index = 0; index < efg.length; index++) {
//     efg[index].style.backgroundColor='green'
    
// }

// parentelement
// let itemselect=document.querySelector('#items')
// console.log(itemselect);
// itemselect.parentNode.style.backgroundColor='green'
// //last element child

// console.log(itemselect.lastElementChild)
// itemselect.lastElementChild.textContent='newitem4'
// //lastchild

// console.log(itemselect.lastChild);
// // this is not a good practise to use last child we should 
// //use children instead
// //create child
// // there is nothing callled create child its create elememnt

// //firstchild this is also not a very good practise
// console.log(itemselect.firstChild);

// //nextsibling and next element sibling

// let sibling=document.querySelectorAll('.list-group-item')
// console.log(sibling[0]);
// console.log(sibling[0].nextSibling);

// console.log(sibling[0].nextElementSibling.textContent);

// //previous sibling and previous element sibling

// console.log(sibling[4].previousSibling.textContent);
// console.log(sibling[3].previousElementSibling.textContent);

// //createelement

// let newdiv=document.createElement('div')

// //add class
// newdiv.className='hii'
// //add id
// newdiv.id='hello'
// newdiv.setAttribute('title','checking')

// //create textnode
// let newdivtext=document.createTextNode('hello world')

// //appendchild

// newdiv.appendChild(newdivtext)

// //append that newdiv before h1

// let container=document.querySelector('header .container')
// let h1=document.querySelector('header h1')

// container.insertBefore(newdiv,h1)
// newdiv.style.color='orange'

// //add hello world before item1

// let newdiv1=document.createElement('div')

// let h2=document.createTextNode('hello world')
// newdiv1.className='hello world'

// newdiv1.append(h2)
// let container1=document.querySelector('#items')
// let appendelement=document.querySelector('.item-group-item')
// let newlistgroupitem=container1.children[0]
// console.log(newlistgroupitem);
// container1.insertBefore(newdiv1,newlistgroupitem)

//on clicking delete button we should remove the new li tag

let deletebtn=document.getElementsByClassName("btn btn-danger btn-sm float-right delete")
console.log(deletebtn);

for (let i= 0; i<deletebtn.length; i++) {
    deletebtn[i].addEventListener('click',deleteitem)
    
    
}
function deleteitem(e)
{
    if(confirm(' are you sure'))
    {
        let itemtoremove=e.target.parentElement;
        let parentelement=e.target.parentElement.parentElement;
        parentelement.removeChild(itemtoremove)
        

    }
    
}

//create the edit button next to delete button 
let listgroup = document.getElementsByClassName("list-group-item");
for (let i = 0; i < listgroup.length; i++) {
    let editbutton = document.createElement('button');
    editbutton.setAttribute('class', 'btn btn-orange btn-sm float-right edit');
    editbutton.textContent = 'Edit';

    listgroup[i].appendChild(editbutton);
    
    
}
















