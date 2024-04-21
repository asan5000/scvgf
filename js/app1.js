// курсор ff
let lo = document.querySelector('.box_ff-background');
document.addEventListener("mousemove",function (event) {
    let y = event.pageY;
    let x = event.pageX;
    lo.style.top = y + "px"
    lo.style.left = x + "px"
})
// свечение при скроле

let text1 = document.querySelectorAll('.bottum_box-item2-contion');
let box1 = document.querySelector('.box'),
box2 = document.querySelector('.karta-contener'),
box3 = document.querySelector('.ff')
let box_1 = new IntersectionObserver(entries => {
    for(let i of entries){
        if (i.isIntersecting){text1[0].classList.add('bottum_box-item2-contion-text');}
        else{text1[0].classList.remove('bottum_box-item2-contion-text')}
    }});box_1.observe(box1)

    let box_2 = new IntersectionObserver(entries => {
        for(let i of entries){
            if (i.isIntersecting){text1[1].classList.add('bottum_box-item2-contion-text');}
            else{text1[1].classList.remove('bottum_box-item2-contion-text')}
        }});box_2.observe(box2)

        let box_3 = new IntersectionObserver(entries => {
            for(let i of entries){
                if (i.isIntersecting){text1[2].classList.add('bottum_box-item2-contion-text');}
                else{text1[2].classList.remove('bottum_box-item2-contion-text')}
            }});box_3.observe(box3)
// при навитение дежеться 
let w5_item = document.querySelectorAll(".w5-style")
w5_item[3].addEventListener("mouseover",function () {
    w5_item[0].classList.add('w5-item1_1')
    w5_item[1].classList.add('w5-item1_2')
    w5_item[2].classList.add('w5-item1_3')
    w5_item[3].classList.add('w5-item1_4')
    w5_item[5].classList.add('w5-item1_6')
    w5_item[6].classList.add('w5-item1_7')
    w5_item[7].classList.add('w5-item1_8')
    w5_item[9].classList.add('w5-item1_10')
    w5_item[10].classList.add('w5-item1_11')
})
w5_item[6].addEventListener("mouseover",function () {
    w5_item[0].classList.remove('w5-item1_1')
    w5_item[1].classList.remove('w5-item1_2')
    w5_item[2].classList.remove('w5-item1_3')
    w5_item[3].classList.remove('w5-item1_4')
    w5_item[5].classList.remove('w5-item1_6')
    w5_item[6].classList.remove('w5-item1_7')
    w5_item[7].classList.remove('w5-item1_8')
    w5_item[9].classList.remove('w5-item1_10')
    w5_item[10].classList.remove('w5-item1_11')
})