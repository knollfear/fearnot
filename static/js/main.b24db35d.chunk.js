(this.webpackJsonpfearnot=this.webpackJsonpfearnot||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},16:function(e,t,n){e.exports=n.p+"static/media/logo.9b1b5ea4.svg"},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(4),o=n.n(c),i=(n(15),n(16),n(17),n(5)),u=n(6),l=n(1),s=n(9),f=n(8),d=function(){return localStorage.getItem("FN_HIGHSCORE")||0},m=function(e){var t;t=Math.max(e,d()),localStorage.setItem("FN_HIGHSCORE",t)},v=function(e){var t=e.rule,n=e.activeCard,r=e.isNot,c=e.score,o=e.prevScore,i=d();return a.a.createElement("div",{className:"footer"},a.a.createElement("div",null,t.text(n,r)),a.a.createElement("div",null,"Current Score: ",c),o&&a.a.createElement("div",null,"Previous Score: ",o),i>0&&a.a.createElement("div",null,"High Score: ",i))},h=[{text:function(e,t){return"Click on ".concat(t?"not":""," ").concat(e.txt)},rule:function(e,t){return e.txt===t.txt},cardRender:function(e){return N(e)}},{text:function(e,t){return"Click on ".concat(t?"not":""," ").concat(e.preferredName||e.firstName)},rule:function(e,t){return(e.preferredName||e.firstName)===(t.preferredName||t.firstName)},cardRender:function(e){return N(e)}},{text:function(e,t){return p(e,t)},rule:function(e,t){return(e.preferredName||e.firstName)===(t.preferredName||t.firstName)},cardRender:function(e){return E(e)}},{text:function(e,t){return"Click on ".concat(t?"not":""," last name of ").concat(e.lastName)},rule:function(e,t){return e.lastName===t.lastName},cardRender:function(e){return N(e)}},{text:function(e,t){return"Click on ".concat(t?"not":""," ").concat(e.division)},rule:function(e,t){return e.division===t.division},cardRender:function(e){return N(e)}},{text:function(e,t){return"Click on ".concat(t?"not":""," ").concat(e.jobTitle)},rule:function(e,t){return e.jobTitle===t.jobTitle},cardRender:function(e){return N(e)}},{text:function(e,t){return"".concat(t?"Not first":"First"," alphabetically by last name")},rule:function(e,t,n){var r=n.map((function(e){return e.lastName}));return r.sort(),e.lastName===r[0]},cardRender:function(e){return N(e)}}],p=function(e,t){return a.a.createElement("div",null,"Click on ",t?"not":"",a.a.createElement("img",{src:"/fearnot/"+e.photoUrl,alt:e.displayName}))},N=function(e){return a.a.createElement("img",{src:"/fearnot/"+e.photoUrl,alt:e.displayName})},E=function(e){return a.a.createElement("button",null,e.txt)},g=h,k=n(2),C=n.n(k),S=n(7),b=function(){var e=Object(S.a)(C.a.mark((function e(t){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/fearnot/fearless.json");case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.cards);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=e.cards,n=e.clickHandler,r=e.rule;return t.map((function(e,t){return a.a.createElement("span",{onClick:function(){return n(e)},key:t},r.cardRender(e))}))};function R(e){for(var t,n,r=e.length;r;)n=Math.floor(Math.random()*r--),t=e[r],e[r]=e[n],e[n]=t}var M=function(e){Object(s.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).clickHandler=function(e){var t=r.state.currentRule.rule(e,r.state.activeCard,r.state.activeCards);r.state.isNot&&(t=!t);var n=0;t&&(n=r.state.score+1),r.changeRule(n)},r.changeRule=function(e){0===e&&r.newGame();var t=Math.min(g.length,Math.floor(e/5)),n=g[Math.floor(Math.random()*t)],a=r.state.cards;R(a);var c=a[0],o=a.slice(0,Math.floor(e/4)+4);R(o);var i=Math.floor(10*Math.random())%2===0;console.log(i),r.setState({score:e,currentRule:n,possibleCards:a,activeCard:c,activeCards:o,isNot:i})},r.newGame=function(){var e=r.state.score;m(e),function(){var e=localStorage.getItem("FN_NUM_GAMES")||"0";e=isNaN(e)?1:parseInt(e,10)+1,localStorage.setItem("FN_NUM_GAMES",e)}(),r.setState({prevScore:e,endGame:!0})},r.clickHandler=r.clickHandler.bind(Object(l.a)(r)),r.state={selectedSource:"fearless",currentRule:g[0],isNot:!1,score:0},r}return Object(u.a)(n,[{key:"setupGame",value:function(){var e=this;b(this.state.source).then((function(t){R(t),e.setState({cards:t,activeCard:t[0],activeCards:t.slice(0,4)})}))}},{key:"componentDidMount",value:function(){this.setupGame()}},{key:"render",value:function(){var e=this;return this.state.cards?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"header"},"Fear Not!"),this.state.endGame?a.a.createElement("div",null,a.a.createElement("div",null,"Great Job.  You scored: ",this.state.prevScore),a.a.createElement("button",{onClick:function(){e.setState({endGame:!1})}},"New Game?")):a.a.createElement(a.a.Fragment,null,a.a.createElement(x,{cards:this.state.activeCards,clickHandler:this.clickHandler,rule:this.state.currentRule}),a.a.createElement(v,{rule:this.state.currentRule,isNot:this.state.isNot,activeCard:this.state.activeCard,score:this.state.score,prevScore:this.state.prevScore}))):a.a.createElement("div",null,"Loading")}}]),n}(a.a.Component);var w=function(){return a.a.createElement(M,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.b24db35d.chunk.js.map