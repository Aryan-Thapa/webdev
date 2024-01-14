// Dom Manipulation lec-71

document.querySelector(".container").innerText
// 'Hey I am a box\nHey I am a box'
document.querySelector(".container").outerHTML
// '<div class="container">\n        <div class="box">\n            Hey I am a box\n        </div>\n        <div class="box">\n            Hey I am a box\n        </div>\n    </div>'
document.querySelector(".container").tagName
// 'DIV'
document.querySelector(".box").nodeName
// 'DIV'
document.querySelector(".container").text
undefined
document.querySelector(".container").textContent
// '\n        \n            Hey I am a box\n        \n        \n            Hey I am a box\n   

// changing the inner html of box container
document.querySelector(".box").innerHTML="Hey I am Aryan"

document.querySelector(".box").hasAttribute("style")
// false
document.querySelector(".container").hasAttribute("style")
// true
document.querySelector(".container").getAttribute("style")
// 'display: flex;'
document.querySelector(".container").setAttribute("style","display:inline")
// undefined
document.querySelector(".container").attributes
// NamedNodeMap {0: style, 1: class, style: style, class: class, length: 2}
document.querySelector(".container").removeAttribute("style")
// undefined
document.designMode="on"
// 'on'
document.querySelector(".container").classList
//DOMTokenList ['container', value: 'container']
document.querySelector(".container").className
//'container'



