document.querySelector('.bx').addEventListener('click',() => {
    document.querySelector('.nav').classList.toggle('show');
    document.querySelector('.bx').classList.toggle('bx-x');
})

function switchpic(index) {
    const p = document.getElementById('box_list');
    switch (index) {
        case 1:
          p.innerHTML =
          '<img src="./img/boxpro.jpg" alt="">';
          break;
        case 2:
          p.innerHTML =
          '<img src="./img/box1.jpg" alt="">';
          break;
        case 3:
          p.innerHTML =
          '<img src="./img/box2.jpg" alt="">';
          break;
        case 4:
          p.innerHTML =
          '<img src="./img/box3.jpg" alt="">';
          break;
        case 5:
          p.innerHTML =
          '<img src="./img/box4.jpg" alt="">';
          break;
        case 6:
          p.innerHTML =
          '<img src="./img/box5.jpg" alt="">';
          break;
        case 7:
          p.innerHTML =
          '<img src="./img/box6.jpg" alt="">';
          break;
          
    }
} 

document.querySelector('.butwo').addEventListener('click',() => {
    document.querySelector('.cart-items').innerHTML=
    '';
})

document.querySelector('.aa').addEventListener('click',() => {
    document.querySelector('.cart-items').innerHTML=
    '<div class="cart-item"><img src="./img/boxpro.jpg" alt=""><div class="item-details"><span class="name">彌月禮盒</span><span class="price">$170</span></div></div>';
})

document.querySelector('.ab').addEventListener('click',() => {
  document.querySelector('.cart-items').innerHTML=
  '<div class="cart-item"><img src="./img/oil_rice.jpg" alt=""><div class="item-details"><span class="name">手工油飯</span><span class="price">$70</span></div></div>';
})

document.querySelector('.ac').addEventListener('click',() => {
  document.querySelector('.cart-items').innerHTML=
  '<div class="cart-item"><img src="./img/ve_oil_rice.jpg" alt=""><div class="item-details"><span class="name">手工素油飯</span><span class="price">$70</span></div></div>';
})

document.querySelector('.ad').addEventListener('click',() => {
  document.querySelector('.cart-items').innerHTML=
  '<div class="cart-item"><img src="./img/sweet_rice.jpg" alt=""><div class="item-details"><span class="name">手工甜米糕</span><span class="price">$70</span></div></div>';
})

document.querySelector('.ae').addEventListener('click',() => {
  document.querySelector('.cart-items').innerHTML=
  '<div class="cart-item"><img src="./img/fish_ball_soup.jpg" alt=""><div class="item-details"><span class="name">魚丸湯</span><span class="price">$30</span></div></div>';
})