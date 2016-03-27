/**
 * Created by Administrator on 2015/12/20 0020.
 */
$(function() {
    $(".wxqhb").hover(function() {
        $(".wxhb").fadeIn(600);
    },function() {
        $(".wxhb").hide();
    })
    $(".Header-topBar-drop").hover(function() {
        $(".Header-topBar-dropdown").show();
        $(".Header-topBar-drop").css("backgroundColor","#f5f5f5");
        $(".Header-topBar-drop img").attr("src","images/sj_r2_c2_x.jpg");
    },function() {
        $(".Header-topBar-dropdown").hide();
        $(".Header-topBar-drop").css("backgroundColor","#fff");
        $(".Header-topBar-drop img").attr("src","images/sj_r2_c2.jpg");
    })
    $(window).scroll(function() {
        var scrollTop = $(document).scrollTop();
        //console.log($(".Footer").offset().top);
        //console.log(scrollTop);
        if(scrollTop > 10070) {
            $(".ftmap").animate({left: 688},500);
        }
       /* else {
            $(".ftmap").animate({left: 0},500);
        }*/
    });
    var text = document.getElementById("Header_search_input");
    text.onclick = function() {
        if(text.value == "PRADA/普拉达") {
            text.value = "";
            text.style.color = "#333"
        }
    }
    text.onblur = function() {
        if(text.value == "") {
            text.value = "PRADA/普拉达";
            text.style.color = "#999";
        }
    }
    // 二级下拉菜单
    $(".dropdown-con>ul>li:odd").css({
        "background":"#392F6B",
        "border": "1px solid #392F6B",
        "border-right": "0"
    });
    $(".dropdown-con>ul>li:even").css({
        "background":"#463B7F",
        "border": "1px solid #463B7F",
        "border-right": "0"
    });
    // 鼠标移到title出现下拉菜单
    var lisLen =  $(".dropdown-con ul li.con-list").length;
    $(".Header-dropdown").hover(function(){
        $(".dropdown-con").children().children().show();

    }  ,function(){
        $(".dropdown-con > ul > li").hide();
//
    });

    $(".dropdown-con > ul > li").hover(function () {
        $(this).addClass("current");
        $(this).find(".con-right").show();
    }, function () {
        $(this).removeClass("current");
        $(this).find(".con-right").hide();
    });

    for(var i=0; i<7; i++){
        $(".product-list1 ul").append($(".product-list1 ul li:eq(0)").clone());
    }
    for(var i=0; i<2; i++){
        $(".product-list2").append($(".product-list2 dl:eq(0)").clone());
    }
    for(var i=1; i<8; i++){
        $(".pinPaiCon-ban").append($(".pinPaiCon-ban li:eq(0)").clone());
    }
    //楼梯js模块
    $(window).scroll(function () {
        var windowTop=$(window).scrollTop();
        if(windowTop >= 400){
            $(".bodyfix").show();
        }else{
            $(".bodyfix").hide();
        }
    });
    $(".bodyfix ul li").click(function () {
        var index = $(this).index();
        console.log(index);
        if( index == 3){
            $("html,body").animate({
                scrollTop: 0
            },500);
        }
        else  {
            var titletop = $(".miaodian").eq(index+1).offset().top;
            $("html,body").animate({
                scrollTop: titletop
            },500);
        }


    });
    //图片缓动变大
    $(".pinPaiCon-ban-img").hover(function(){
        $(this).animate({
            width : "242.4px",
            height: "247.45px"
        },300)
    },function(){
        $(this).animate({
            width : "240px",
            height: "245px"
        },300)
    });
    $(".product-list2 dl dt img").hover(function(){
        $(this).animate({
            width : "494px",
            height: "263px"
        },300)
    },function(){
        $(this).animate({
            width : "491px",
            height: "262px"
        },300)
    });

    // 鼠标移到爆款出来产品展示
    $(".mmz").hover(function(){
        $(".showUp ul").show();
    },function(){
        $(".showUp ul").hide();
    })
    // 鼠标移到爆款出来产品展示
    $(".baokuan").hover(function(){
        $(".pro-show").stop().show(1000);
    },function(){
        $(".pro-show").stop().hide(1000);
    });

     $(".arro span").mouseenter(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var index = $(this).index();
        $(".top-img ul li").eq(index).fadeIn().siblings().fadeOut();

    });

})

