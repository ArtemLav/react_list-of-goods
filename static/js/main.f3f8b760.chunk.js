(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{46:function(e,t,n){e.exports=n(55)},51:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),c=n.n(l),s=n(28),i=n(32),u=n(33),o=n(39),m=n(38),f=(n(51),n(80)),h=function(e){var t=e.title,n=e.func;return r.a.createElement(f.a,{variant:"contained",color:"Reset"!==t?"primary":"secondary",onClick:n},t)},v=function(e){var t=e.list;return r.a.createElement("ul",{className:"list"},t.map((function(e){return r.a.createElement("li",{key:e,className:"listItem"},e)})))};v.defaultProps={list:[]};var E=v,g=n(84),d=n(85),p=function(e){var t=e.length,n=e.func;return r.a.createElement(g.a,{className:"select",value:t,onChange:function(e){return n(e.target)}},r.a.createElement(d.a,{value:1},"1"),r.a.createElement(d.a,{value:2},"2"),r.a.createElement(d.a,{value:3},"3"),r.a.createElement(d.a,{value:4},"4"),r.a.createElement(d.a,{value:5},"5"),r.a.createElement(d.a,{value:6},"6"),r.a.createElement(d.a,{value:7},"7"),r.a.createElement(d.a,{value:8},"8"),r.a.createElement(d.a,{value:9},"9"),r.a.createElement(d.a,{value:10},"10"))},y=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={isStartBtnVisible:!0,list:y,wordsLength:1},e.showContent=function(){e.setState({isStartBtnVisible:!1})},e.reverseList=function(){e.setState((function(e){return{list:Object(s.a)(e.list).reverse()}}))},e.sortByAlphabet=function(){e.setState((function(e){return{list:Object(s.a)(e.list).sort((function(e,t){return e.localeCompare(t)}))}}))},e.sortByLength=function(){e.setState((function(e){return{list:Object(s.a)(e.list).sort((function(e,t){return e.length-t.length}))}}))},e.resetOrder=function(){e.setState((function(e){return{list:y,wordsLength:1}}))},e.filterByWordLength=function(t){e.setState((function(e){return{list:y.filter((function(e){return e.length>=t.value})),wordsLength:t.value}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.list,n=e.isStartBtnVisible,a=e.wordsLength,l=this.showContent,c=this.reverseList,s=this.sortByAlphabet,i=this.resetOrder,u=this.sortByLength,o=this.filterByWordLength;return r.a.createElement("div",{className:"App"},n?r.a.createElement(h,{title:"Start",func:l}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(h,{title:"Reverse",func:c}),r.a.createElement(h,{title:"By Alphabet",func:s}),r.a.createElement(h,{title:"By Length",func:u}),r.a.createElement(p,{length:a,func:o}),r.a.createElement(h,{title:"Reset",func:i})),r.a.createElement("div",null,r.a.createElement(E,{list:t}))))}}]),n}(a.Component);c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.f3f8b760.chunk.js.map