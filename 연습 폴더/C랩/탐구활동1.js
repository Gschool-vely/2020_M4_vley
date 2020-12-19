var data = [
    {"title":"배움의 원칙", "content":"거꾸로캠퍼스가 실현하는", "plus":"자세히보기->"}

]
data [0] ["content"]

for (var index in data) {
    var bb = document.createElement('div')
    bb.classList.add('titlehtml')
    bb.innerText = data[index] ["title"]
    box1.appendChild(bb)
}

for (var index in data) {
    var bb = document.createElement('div')
    bb.classList.add('contenthtml')
    bb.innerText = data[index] ["content"]
    box1.appendChild(bb)
}

for (var index in data) {
    var bb = document.createElement('div')
    bb.classList.add('plushtml')
    bb.innerText = data[index] ["plus"]
    box1.appendChild(bb)
}