(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(3),c=a(4),s=a(7),r=a(5),o=a(8),l=a(0),m=a.n(l),u=a(6),v=(a(15),window.homepageSliderItems),d=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(r.a)(t).call(this))).state={items:[]},e}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({items:v})}},{key:"styleActiveItem",value:function(e){return!0===e?"item active":"item"}},{key:"onHover",value:function(e){var t=Object(n.a)(this.state.items);t[e].active=!0,this.setState({tempItems:t})}},{key:"onExit",value:function(e){var t=Object(n.a)(this.state.items);t[e].active=!1,this.setState({tempItems:t})}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"slider-container"},this.state.items.map((function(t){var a={backgroundImage:"url(".concat(t.imageUrl,")")};return m.a.createElement("div",{key:t.id,className:e.styleActiveItem(t.active),onMouseOver:e.onHover.bind(e,t.id),onMouseOut:e.onExit.bind(e,t.id),style:a},m.a.createElement("div",{className:"title-container"},m.a.createElement("h2",null,t.label)),m.a.createElement("div",{className:"action-container"},m.a.createElement("a",{href:t.urlPath,className:"slider-button"},"View Projects \xbb")))})))}}]),t}(l.Component);Object(u.render)(m.a.createElement(d,null),document.getElementById("homepage-slider"))},15:function(e,t,a){},9:function(e,t,a){e.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.c36ac3e0.chunk.js.map