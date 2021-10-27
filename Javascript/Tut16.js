// ````````````````````````Dom Traversal Properties and Method ````````````````````````
let cont=document.querySelector('.no');
    cont=document.querySelector('.container');

    // console.log(cont);
// childnodes includes text ,newline elements etc
// console.log(cont.childNodes);

// children does not includes text ,newline elements comment etc
// console.log(cont.children);
let container=document.querySelector('div.container');
    // container=container.children;
    // console.log(container.children);
    // console.log(container.children[0].children[0])
    // console.log(container.firstChild);
    // console.log(container.firstElementChild);
    // console.log(container.lastChild);
    // console.log(container.lastElementChild);
    // console.log(container.childNodes);
    // console.log(container.childElementCount);//count of child elements
    
    // to get next sibling
    // console.log(container.firstElementChild.nextSibling);
    // console.log(container.firstElementChild. nextElementSibling.nextElementSibling.nodeName);

    
    
    // let nodeName=cont.childNodes[1].nodeName;

// nodeTypes-->
// 1-element
// 2-Attribute
// 3-TextNode
// 8-comment
// 9-Document
// 10-docType
//     nodeName=cont.childNodes[0].nodeType;
// console.log(nodeName);

            