/*弹出层*/
(function layer() {
  var mcanvas = document.getElementById("mcanvas");
  function mrandom (begin, end) {
    return Math.floor(Math.random() * (end - begin)) + begin;
  };
  var Box = function(){
    // 随机生成一个img,然后随机移动,当移动到边界就随机再移动到别的位置
    this.dom = document.createElement('img');
    this.x = 400;
    this.y = 230;
    //物体运用偏移量
    this.vx = mrandom(1,12);
    this.vy =mrandom(1,12);
    this.timeBar = null;
  };
  Box.prototype = {
    add:function() {
      var that = this;
      //默认添加
      that._draw();
      //添加到容器中
      mcanvas.appendChild(this.dom);
      //让物体循环移动,生命周期: 诞生,游离,结束
      that.timeBar = setInterval(function(){
        that._draw();
      }, 33);
    },
    //每次循环重画物体位置
    _draw : function(){
      this.x += this.vx;
      this.y += this.vy;

//        检测是否超标
      //同样校验以后可能会变化,就是可能的变化或者已经知道的变化
      if(this.x > 730){
        //当移动位置超越最大,就将left的值设置为1000
        this.x = 730;
        this.vx *= -1;
      }
      if(this.y > 430){
        this.y = 430;
        //当物体的y值大于边界 则等于边界
        this.vy *= -1;
      }
//        改变物体位置
      this.dom.style.left = this.x + 'px';
      this.dom.style.top = this.y + 'px';
    }
  };
  var first = function(){
    Box.call(this);//拥有 x y vx vy属性
    this.dom.setAttribute('src','images/bird (1).png');
  };
  first.prototype = new Box();
  var second = function(){
    Box.call(this);
    this.dom.setAttribute('src','images/bird (2).png');
  };
  second.prototype = Box.prototype;

  var third = function(){
    Box.call(this);
    this.dom.setAttribute('src','images/bird (3).png');
  };
  third.prototype = new Box();

  var fourth = function(){
    Box.call(this);
    this.dom.setAttribute('src','images/bird (4).png');
  };
  fourth.prototype = Box.prototype;
  var five = function(){
    Box.call(this);
    this.dom.setAttribute('src','images/bird (5).png');
  };
  five.prototype = new Box();
  var AllBox = [Box, first, second, third, fourth, five];

  var ltimer = setInterval(function(){
    var box = new AllBox[mrandom(0,6)]();
    box.add();
  }, 300);
  var num = 5;
  goIndexPage();
  function goIndexPage() {
    num--;
    if(num >= 0) {
      setTimeout(goIndexPage,1000);  // 从新调用自己
    }
    else {
      $("#layer").slideUp();
      clearInterval(ltimer);
    }
    $("#mclose").click(function () {
      $("#layer").slideUp();
      clearInterval(ltimer);
    });
  };
})()
window.onload = function() {
    var arrow = document.getElementById("arrow");  // 三角
    var wrap = document.getElementById("wrap");   // 大盒子
    var slide = document.getElementById("slide");
    var lis = slide.children[0].children;   // 获得所有的li
    var json = [  //  包含了5张图片里面所有的样式
        {   //  1
            width:400,
            top:20,
            left:50,
            opacity:20,
            z:2
        },
        {  // 2
            width:600,
            top:70,
            left:0,
            opacity:80,
            z:3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity:100,
            z:4
        },
        {  // 4
            width:600,
            top:70,
            left:600,
            opacity:80,
            z:3
        },
        {   //5
            width:400,
            top:20,
            left:750,
            opacity:20,
            z:2
        }
    ];
    wrap.onmouseover = function() {   // 鼠标经过显示 三角
        animate(arrow,{opacity:100});
        clearInterval(timer);
    }
    wrap.onmouseout = function() {  // 鼠标离开 隐藏三角
        animate(arrow,{opacity:0});
        timer = setInterval(autoplay,3000);
    }
    move(); // 页面执行也调用一次
    // 两个按钮
    var flag = true;   // 用于函数节流
    var as = arrow.children;   // 2 个 a
    for(var k in as) {
        as[k].onclick = function() {
            // 当俺们点击的时候， 只做一件事情  ---- 交换json
            if(this.className == "prev") {  // 左侧按钮
                //  alert(11);
                if(flag == true) {   // 实现按钮只能点击一次
                    move(true);
                    flag = false;
                }
            }
            else
            {
              /*  当我们点击了 右侧按钮  ：
    把 数组里面的第一个值删掉 ，然后把这个值追加到 数组的最后面。
     json.push(json.shift());*/
                // alert(22);   // 右侧按钮
               if(flag == true) {   // 实现按钮只能点击一次
                   move(false);
                   flag = false;
               }
            }
        }
    }
    var timer = setInterval(autoplay,3000);
    function autoplay(){
        move(true);
        flag = false;
    }
    function move(x) {
        if(x != undefined) {   // 如果没有值传递过来，就应该  不执行 里面的语句直接遍历json
            if(x) {
                // 交换 反向json   左侧
                json.unshift(json.pop())
            }else {
                // 正向 json
                json.push(json.shift());
            }
        }
        // 交换完毕 json 之后，就要 循环执行一次
        for(var i=0;i<json.length;i++) {
            animate(lis[i],{
                width: json[i].width,
                top: json[i].top,
                left: json[i].left,
                opacity: json[i].opacity,
                zIndex: json[i].z
            },function(){ flag = true; })
        }
    }
}