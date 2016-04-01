function Dropdown(data){
   this.data = data;
   this.dom = $('<div></div>');
}

Dropdown.prototype = {
    bindDOM:function(){
        var str = '';
        str += '<ul class="drop-item">'+ this.data.tit +' <span>></span>';
        str += '<li class="drop-item-list">';
        str += '<div><img src='+this.data.src1 +' alt="">'+this.data.pro1 +' <button>选购</button></div>';
        str += '<div><img src='+this.data.src2 +' alt="">'+this.data.pro2 +' <button>选购</button></div>';
        str += '<div><img src='+this.data.src3 +' alt="">'+this.data.pro3 +' <button>选购</button></div>';
        str += '<div><img src='+this.data.src4 +' alt="">'+this.data.pro4 +' <button>选购</button></div>';
        str += '<div><img src='+this.data.src5 +' alt="">'+this.data.pro5 +' <button>选购</button></div>';
        str += '<div><img src='+this.data.src6 +' alt="">'+this.data.pro6 +' <button>选购</button></div>';
        str += '</li>';
        str += '</ul>';
        var container = $('#slider .dropdown');
        this.dom.html(str).appendTo(container);
    },
    bindEvents:function(){
        var that = this;
        that.dom.on({mouseenter:function(){
            $(this).addClass('is-hover').siblings().removeClass('is-hover');
        },mouseleave:function(){
            $(this).removeClass('is-hover');
        }});
    },
    init:function(){
        this.bindDOM();
        this.bindEvents();
  }
}