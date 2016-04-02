~function skip() {
  var skip = document.getElementById("skip");
  var demo = document.getElementById("demos");
  var num = 3;
  goIndexPage();
  function goIndexPage() {
    demo.innerHTML = num+"秒后进入小米网</a>";
    num--;
    if(num >= 0) {
      setTimeout(goIndexPage,1000);  // 从新调用自己
    }
    else {
      skip.style.display = "none";
      // window.location.href = "http://liuziming.github.io/xiaomi.html";
      // BOM  js 页面 跳转语法
    }
    demo.onclick = function () {
      skip.style.display = "none";
    }
  };
}();
$(function () {
  $("nav li:first").css("borderTop", "1px dashed #00E3E3");
  $("nav li").append("<ins></ins>");
  var arrColor = ["red", "green", "blue", "pink", "purple", "yellow", "orange", "gray"];
  $("nav li ins").each(function (index, ele) {
    $(ele).css("backgroundColor", arrColor[index]).parent().css("color", arrColor[index]);
  })
  $("nav li").mouseenter(function () {
    $(this).children("ins").stop().animate({left: -40}, 200);
    $("audio").get($(this).index()).load();
    $("audio").get($(this).index()).play();
  });
  $("nav li").mouseleave(function () {
    $(this).children("ins").stop().animate({left: 0}, 200);
  })
  // 检测键盘
  $(window).keydown(function (event) {
    //  alert(event.keyCode);  // 返回当前按键 的unicode编码
    var num = 0;
    if (event.keyCode >= 49 && event.keyCode <= 56) {
      //  1~8 之间
      num = event.keyCode - 49;
      $("nav li").eq(num).trigger("mouseenter");
      setTimeout(function () {
        $("nav li").eq(num).trigger("mouseleave");
      }, 300)
    }
  })

  /*header nav*/
  $(".top-nav a").hover(function () {
    $(this).find("ul").stop().slideDown(200)
  }, function () {
    $(".top-nav .top-product").stop().slideUp(200)
  })

  // dropdown  
  var dropdata = [
    {
      tit: '手机 平板 电话卡',
      src1: 'images/mi5bar80.jpg',
      src2: 'images/4sbar80.jpg',
      src3: 'images/minote.jpg',
      src4: 'images/mi4.jpg',
      src5: 'images/mi4c.jpg',
      src6: 'images/note3.jpg',
      pro1: '小米手机5',
      pro2: '小米手机4s',
      pro3: '小米note',
      pro4: '小米note顶配版',
      pro5: '红米手机3',
      pro6: '红米note3'
    },
    {
      tit: '电视 盒子',
      src1: 'images/4380side.jpg',
      src2: 'images/tv48.jpg',
      src3: 'images/tv3-55.jpg',
      src4: 'images/tv60.jpg',
      src5: 'images/6580side.jpg',
      src6: 'images/tv70.png',
      pro1: '小米电视4',
      pro2: '小米电视4s',
      pro3: '小米电视3',
      pro4: '小米电视 60寸',
      pro5: '小米盒子 65寸',
      pro6: '小米盒子 70寸'
    },
    {
      tit: '路由器 智能硬件',
      src1: 'images/luyouqi-80.jpg',
      src2: 'images/scooter.jpg',
      src3: 'images/dianfanbao-80.jpg',
      src4: 'images/yicamera.jpg',
      src5: 'images/radio80side.jpg',
      src6: 'images/ihealthbluetooth.jpg',
      pro1: '小米路由器',
      pro2: '九号平衡车',
      pro3: '运动相机',
      pro4: '网络收音机',
      pro5: '血压计',
      pro6: '小米净水机'
    },
    {
      tit: '移动电源 插线板',
      src1: 'images/dianyuan.jpg',
      src2: 'images/powerscript.jpg',
      src3: 'images/yidongdianyuan.jpg',
      src4: 'images/huosai.jpg',
      src5: 'images/dianyuanfujian.jpg',
      src6: 'images/hougai.jpg',
      pro1: '小米移动电源',
      pro2: '小米插线板',
      pro3: '品牌移动电源',
      pro4: '移动电源附件',
      pro5: '小米耳机',
      pro6: '蓝牙耳机'
    },
    {
      tit: '耳机 音响',
      src1: 'images/mi5bar80.jpg',
      src2: 'images/4sbar80.jpg',
      src3: 'images/minote.jpg',
      src4: 'images/mi4.jpg',
      src5: 'images/mi4c.jpg',
      src6: 'images/note3.jpg',
      pro1: '小米手机5',
      pro2: '小米手机4s',
      pro3: '小米note',
      pro4: '小米note顶配版',
      pro5: '红米手机3',
      pro6: '红米note3'
    },
    {
      tit: '电池 存储卡',
      src1: 'images/4380side.jpg',
      src2: 'images/tv48.jpg',
      src3: 'images/tv3-55.jpg',
      src4: 'images/tv60.jpg',
      src5: 'images/6580side.jpg',
      src6: 'images/tv70.png',
      pro1: '小米电视4',
      pro2: '小米电视4s',
      pro3: '小米电视3',
      pro4: '小米电视 60寸',
      pro5: '小米盒子 65寸',
      pro6: '小米盒子 70寸'
    },
    {
      tit: '保护套 后盖',
      src1: 'images/luyouqi-80.jpg',
      src2: 'images/scooter.jpg',
      src3: 'images/dianfanbao-80.jpg',
      src4: 'images/yicamera.jpg',
      src5: 'images/radio80side.jpg',
      src6: 'images/ihealthbluetooth.jpg',
      pro1: '小米路由器',
      pro2: '九号平衡车',
      pro3: '运动相机',
      pro4: '网络收音机',
      pro5: '血压计',
      pro6: '小米净水机'
    },
    {
      tit: '贴膜 其他配件',
      src1: 'images/dianyuan.jpg',
      src2: 'images/powerscript.jpg',
      src3: 'images/yidongdianyuan.jpg',
      src4: 'images/huosai.jpg',
      src5: 'images/dianyuanfujian.jpg',
      src6: 'images/hougai.jpg',
      pro1: '小米移动电源',
      pro2: '小米插线板',
      pro3: '品牌移动电源',
      pro4: '移动电源附件',
      pro5: '小米耳机',
      pro6: '蓝牙耳机'
    },
    {
      tit: '米兔 服装',
      src1: 'images/mi5bar80.jpg',
      src2: 'images/4sbar80.jpg',
      src3: 'images/minote.jpg',
      src4: 'images/mi4.jpg',
      src5: 'images/mi4c.jpg',
      src6: 'images/note3.jpg',
      pro1: '小米手机5',
      pro2: '小米手机4s',
      pro3: '小米note',
      pro4: '小米note顶配版',
      pro5: '红米手机3',
      pro6: '红米note3'
    },
    {
      tit: '箱包 其他周边',
      src1: 'images/4380side.jpg',
      src2: 'images/tv48.jpg',
      src3: 'images/tv3-55.jpg',
      src4: 'images/tv60.jpg',
      src5: 'images/6580side.jpg',
      src6: 'images/tv70.png',
      pro1: '小米电视4',
      pro2: '小米电视4s',
      pro3: '小米电视3',
      pro4: '小米电视 60寸',
      pro5: '小米盒子 65寸',
      pro6: '小米盒子 70寸'
    }
  ];

  for (var i = 0, len = dropdata.length; i < len; i++) {
    new Dropdown(dropdata[i]).init();
  }

  /*轮播图*/
  var index = 0;
  $(".banner-index .btn_prev").on('click', function () {
    index--;
    if (index < 0) {
      index = 4
    }
    fadeSlide(".banner-index ul.imgbox li", ".banner-num li", index);
  });
  $(".banner-index .btn_next").on('click', function () {
    index++;
    if (index > 4) {
      index = 0
    }
    fadeSlide(".banner-index .imgbox li", ".banner-num li", index);
  });
  $(".banner-num li").on("click", function () {
    // 保存小圆点索引号到index中
    index = $(this).index();
    fadeSlide(".banner-index .imgbox li", ".banner-num li", index);
  });
  //制作定时器
  var timer = setInterval(autoplay, 3000);

  function autoplay() {
    index++;
    if (index > 4) {
      index = 0
    }
    fadeSlide(".banner-index ul.imgbox li", ".banner-num li", index);
  };
  // 鼠标移出移入开启和清除定时器;|
  $(".banner-index").on("mouseenter", function () {
    clearInterval(timer);
  });
  $(".banner-index").on("mouseleave", function () {
    timer = setInterval(autoplay, 3000);
  });

  // 封装淡入淡出轮播图切换效果
  function fadeSlide(imgName, arrowImg, index) {
    // 切换图片
    $(imgName).fadeOut();
    $(imgName).eq(index).fadeIn();
    // 切换小圆点
    $(arrowImg).removeClass("on");
    $(arrowImg).eq(index).addClass("on");
  };

  /* 明星产品*/
  var stardata = [
    {
      src:'images/mise1.jpg',
      tit:'小米手机4c',
      inst:'米粉节买就送99元意外保',
      price:'1099元起'
    },
    {
      src:'images/mise2.jpg',
      tit:'小米手机4',
      inst:'工艺和手感超乎想象',
      price:'1299元起'
    },
    {
      src:'images/mise3.jpg',
      tit:'小米盒子3增强版',
      inst:'高端4k网络机顶盒',
      price:'399元起'
    },
    {
      src:'images/mise4.jpg',
      tit:'小米活塞耳机基础版',
      inst:'新鲜绽放,5色可选',
      price:'29元'
    },
    {
      src:'images/mise5.jpg',
      tit:'移动电源10000mAh 高配版',
      inst:'支持USB Type-C充放电，双向快充',
      price:'129元'
    },
    {
      src:'images/mise6.jpg',
      tit:'小米路由器mini',
      inst:'主流双频AC智能路由器',
      price:'129元'
    },
    {
      src:'images/mise7.jpg',
      tit:'小米手环 光感版',
      inst:'光感版实时监测心率，科学运动',
      price:'99元'
    },
    {
      src:'images/mise8.jpg',
      tit:'小米插线板',
      inst:'3个USB充电口，米粉节一件包邮',
      price:'49元'
    },
    {
      src:'images/mise9.jpg',
      tit:'小米圈铁耳机',
      inst:'动圈+动铁，双发声单元',
      price:'99元'
    },
    {
      src:'images/mise10.jpg',
      tit:'小米Wifi放大器',
      inst:'小巧轻便，配对简单，随身安装',
      price:'35元'
    },
  ];
  for (var i = 0, len = stardata.length; i < len; i++) {
    new Product(stardata[i]).init();
  }
  
  //
  // var starindex = 0;
  // starindex = $('#mistar .starslider').css('left') < 0 ? 1 : 0;
  // starindex ? $('#mistar .starslider').animate({'left':0},500) : $('#mistar .starslider').animate({'left':-1226},500);
  //   $('#mistar .starslider').animate({'right':'1226'*starindex},500);
  // $("#mistar .left").click(function () {
  //   starindex ++;
  //   if(starindex >1){
  //     starindex = 0;
  //   }
  //   $('#mistar .starslider').animate({'left':'1226'*starindex},500);
  // });
  $("#mistar .left").click(function () {
    $('#mistar .starslider').animate({'left':-1226},500);
  });
  $("#mistar .right").click(function () {
    $('#mistar .starslider').animate({'left':0},500);
  });
  // var startimer = setInterval(function () {
  //   // $('#mistar .starslider').css('left') < 0 ? $('#mistar .starslider').animate({'left':-1226},500) : $('#mistar .starslider').animate({'left':0},500);
  //   if($('#mistar .starslider').css('left') < 0 && flag){
  //     $('#mistar .starslider').animate({'left':0},500);
  //   }
  //   else{
  //     $('#mistar .starslider').animate({'left':-1226},500);
  //   }
  // },1000)
  // var starindex = 0;
  // function startauto() {
  //   starindex++;
  //   if(starindex > 1){
  //     starindex = 0;
  //   }
  //   $('#mistar .starslider').animate({'left':-1226*starindex},500);
  //   setTimeout(function () {
  //     $('#mistar .starslider').animate({'left':0},500);
  //   },1000);
  // }
  // clearInterval(startimer);
  // var startimer = setInterval(function () {
  //   $('#mistar .starslider').animate({'left':-1226},500);
  //   setTimeout(function () {
  //     $('#mistar .starslider').animate({'left':0},500);
  //   },2000);
  // },2000);

});






