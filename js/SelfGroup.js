/*
 * @Author: Administrator
 * @Date:   2016-01-21 23:23:26
 * @Last Modified by:   流年
 * @Last Modified time: 2016-03-27 19:49:10
 */

function SelfGroup(option) {
  this._init(option);
}
SelfGroup.prototype = {
  _init: function(option) {
    this.x = option.x;
    this.y = option.y;
    this.innerRadius = option.innerRadius;
    this.outerRadius = option.outerRadius;
    this.innerFill = option.innerFill;
    this.outerFill = option.outerFill;
    this.outerOpacity = option.outerOpacity;
    this.text = option.text;
    this.fontSize = option.fontSize;
    this.textColor = option.textColor;
  },
  render: function() {
    this.group = new Konva.Group({
      x: this.x,
      y: this.y
    });

    var outerCircle = new Konva.Ring({
      x: 0,
      y: 0,
      innerRadius: this.innerRadius,
      outerRadius: this.outerRadius,
      fill: this.outerFill,
      opacity: this.outerOpacity
    });
    this.group.add(outerCircle);

    var innerCircle = new Konva.Circle({
      x: 0,
      y: 0,
      radius: this.innerRadius,
      fill: this.innerFill
    });
    this.group.add(innerCircle);

    var text = new Konva.Text({
      x: -this.innerRadius,
      y: -this.fontSize / 2,
      width: this.innerRadius * 2,
      fontSize: this.fontSize,
      text: this.text,
      fill: this.textColor,
      align: 'center'
    });
    this.group.add(text);
  },
  addToGroupOrLayer: function(GroupOrLayer) {
    GroupOrLayer.add(this.group);
  }
}
