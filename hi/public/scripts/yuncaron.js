function movetoorder (event){
    location.href='file:///D:/hi/public/views/yuncaron-order.html';
}

function movetogongji (event){
    location.href='file:///D:/hi/public/views/yuncaron-gongji.html';
}

function movetoorderdone (event){
    location.href='file:///D:/hi/public/views/yuncaron-orderdone.html';
}

function movetohome (event){
    location.href='file:///D:/hi/public/views/yuncaron-main.html';
}

function movetoqna (event){
    location.href='file:///D:/hi/public/views/yuncaron-qna.html';
}

let order_button = document.getElementById("order");
order_button.addEventListener('click', function(event){
    alert(1);
});

let gongji_button = document.getElementById("gongji");
gongji_button.addEventListener('click', function(event){
    alert(1);
});

let home_button = document.getElementById("title");
home_button.addEventListener('click', function(event){
    alert(1);
});

let orderdone_button = document.getElementById("order_done");
orderdone_button.addEventListener('click', function(event){
    alert(1);
});