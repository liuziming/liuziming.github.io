/*下拉菜单对象*/
function Dropdown(data){
   this.data = data;
   this.dom = $('<div></div>');
};

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
};

/*产品对象*/
function  Product(data,container) {
  this.data = data;
  this.container = container;
}

Product.prototype = {
  bindDOM:function(){
    var str = '';
    str += '<div class="product">';
    str += '<div class="ad">';
    str += '</div>';
    str += '<img src='+ this.data.src +' alt="">';
    str += '<div class="tit">'+this.data.tit+'</div>';
    str += '<div class="instruction">'+this.data.inst+'</div>';
    str += '<p class="price">'+this.data.price+'</p>';
    str += '<div class="bot">';
    str += '</div>';
    str += '</div>';
    this.container.append(str);
  },
  bindEvents:function(){
    var that = this;
    that.container.find(".product").on({mouseenter:function(){
      $(this).addClass('current').siblings().removeClass('current');
    },mouseleave:function(){
      $(this).removeClass('current');
    }});
  },
  init:function(){
    this.bindDOM();
    this.bindEvents();
  }
}