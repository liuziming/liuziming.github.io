
function animate(obj,json,fn) {
    // 第一参数 动的对象   2  attr  动的那个属性   3   属性值少多少
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var flag = true;  //  用来判断是否停止定时器
        for(var k in json) {
            var leader = 0;
            // 因为透明度是 小数   取值 0~1 之间    第二个  它没有单位
            if(k == "opacity") {
                leader =  Math.round(getStyle(obj,k) * 100) || 100;
            }
            else {
                leader = parseInt(getStyle(obj,k)) || 0;
            }
            var step = (json[k] - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            if( k == "opacity") {
                obj.style.opacity = leader / 100;
                obj.style.filter = "alpha(opacity = "+leader+")";
            }
            // 设置层级
            else if(k == "zIndex") {
                obj.style.zIndex = json[k];
            }
            else {
                obj.style[k] = leader + "px";   // 其他的要单位
            }
            if(leader != json[k]) {  //  只要三个属性有一个没有到达，就取反
                // 这句话要写到 for in 里面   因为有三个属性，所以用 for in 才能遍历
                // 三个都到了 都不执行这句话了
                flag = false;
            }
        }
        if(flag) {
            clearInterval(obj.timer);
            if(fn){   // 如果有函数传递过来  ， 定时器结束了，说明动画结束  可以执行 回调函数
                fn();   // 执行函数  fn + ();
            }
        }
    },30)
}
function getStyle(obj,attr) {
    if(obj.currentStyle) {
        // 如果支持，返回改属性值
        return  obj.currentStyle[attr];
    }
    else
    {
        return window.getComputedStyle(obj,null)[attr];
    }
}
