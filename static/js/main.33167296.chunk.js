(this.webpackJsonpfearnot=this.webpackJsonpfearnot||[]).push([[0],{11:function(e,t,r){e.exports=r(20)},16:function(e,t,r){},17:function(e,t,r){e.exports=r.p+"static/media/logo.9b1b5ea4.svg"},18:function(e,t,r){},20:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(5),o=r.n(c),i=(r(16),r(17),r(18),r(6)),s=r(7),l=r(1),u=r(10),d=r(9),f=function(){return localStorage.getItem("FN_HIGHSCORE")||0},m=function(e){var t;t=Math.max(e,f()),localStorage.setItem("FN_HIGHSCORE",t)},v=function(e){var t=e.rule,r=e.activeCard,n=e.isNot,c=e.score,o=e.prevScore,i=f();return a.a.createElement("div",{className:"footer"},a.a.createElement("div",null,t.text(r,n)),a.a.createElement("div",null,"Current Score: ",c),o&&a.a.createElement("div",null,"Previous Score: ",o),i>0&&a.a.createElement("div",null,"High Score: ",i))},h=[{text:function(e,t){return"Click on ".concat(t?"not":""," ").concat(e.txt)},rule:function(e,t){return e.txt===t.txt},cardRender:function(e){return p(e)}},{text:function(e,t){return"Click on ".concat(t?"not":""," ").concat(e.preferredName||e.firstName)},rule:function(e,t){return(e.preferredName||e.firstName)===(t.preferredName||t.firstName)},cardRender:function(e){return p(e)}},{text:function(e,t){return N(e,t)},rule:function(e,t){return(e.preferredName||e.firstName)===(t.preferredName||t.firstName)},cardRender:function(e){return C(e)}},{text:function(e,t){return"Click on ".concat(t?"not":""," last name of ").concat(e.lastName)},rule:function(e,t){return e.lastName===t.lastName},cardRender:function(e){return p(e)}},{text:function(e,t){return"Click on ".concat(t?"not":""," ").concat(e.division)},rule:function(e,t){return e.division===t.division},cardRender:function(e){return p(e)}},{text:function(e,t){return"Click on ".concat(t?"not":""," ").concat(e.jobTitle)},rule:function(e,t){return e.jobTitle===t.jobTitle},cardRender:function(e){return p(e)}},{text:function(e,t){return"".concat(t?"Not first":"First"," alphabetically by last name")},rule:function(e,t,r){var n=r.map((function(e){return e.lastName}));return n.sort(),e.lastName===n[0]},cardRender:function(e){return p(e)}}],N=function(e,t){return a.a.createElement("div",null,"Who is ",t?"not":"",a.a.createElement("img",{src:"/fearnot/"+e.photoUrl,alt:e.displayName}))},p=function(e){return a.a.createElement("img",{src:"/fearnot/"+e.photoUrl,alt:e.displayName})},C=function(e){return a.a.createElement("button",null,e.txt)},E=h,g=r(2),b=r.n(g),S=r(8),k=function(){var e=Object(S.a)(b.a.mark((function e(t){var r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/fearnot/fearless.json");case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",n.cards);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=r(3),R=function(e){var t=e.cards,r=e.clickHandler,c=e.rule,o={Name:"txt",Herd:"division",Title:"jobTitle"},i=Object(n.useState)(null),s=Object(x.a)(i,2),l=s[0],u=s[1],d=t.some((function(e){return e.isCorrect}));return t.map((function(e,n){var i="card";return e.isCorrect?i+=" correct":l&&e.txt===l.txt&&(i+=" active"),a.a.createElement("div",{className:i,onClick:function(n){!function(e){d||(u(e),t.length<=6?setTimeout((function(){r(e),u(null)}),2500):(u(null),r(e)))}(e)},key:"AC-".concat(n)},a.a.createElement("span",null,c.cardRender(e),l&&a.a.createElement("ul",null,Object.entries(o).map((function(t){var r=Object(x.a)(t,2),n=r[0],c=r[1];return a.a.createElement("li",null,n,": ",e[c])})))))}))};function j(e){for(var t,r,n=e.length;n;)r=Math.floor(Math.random()*n--),t=e[n],e[n]=e[r],e[r]=t}var M=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this,e)).clickHandler=function(e){var t=n.state.currentRule.rule(e,n.state.activeCard);n.state.isNot&&(t=!t);var r=0;if(t)r=n.state.score+1,n.changeRule(r);else{var a=n.state.activeCards.slice().map((function(e){return console.log(e),e.isCorrect=n.state.currentRule.rule(e,n.state.activeCard),console.log(e.isCorrect),n.state.isNot&&(e.isCorrect=!e.isCorrect),console.log(e.isCorrect),e}));n.setState({score:r,activeCards:a}),n.newGame()}},n.changeRule=function(e){var t=Math.min(E.length,Math.floor(e/5)),r=E[Math.floor(Math.random()*t)],a=n.state.cards;j(a);var c=a[0],o=a.slice(0,Math.floor(e/4)+4);j(o);var i=Math.floor(10*Math.random())%2===0;console.log(i),n.setState({score:e,currentRule:r,possibleCards:a,activeCard:c,activeCards:o,isNot:i})},n.newGame=function(){var e=n.state.score;m(e),function(){var e=localStorage.getItem("FN_NUM_GAMES")||"0";e=isNaN(e)?1:parseInt(e,10)+1,localStorage.setItem("FN_NUM_GAMES",e)}(),n.setState({prevScore:e,endGame:!0})},n.clickHandler=n.clickHandler.bind(Object(l.a)(n)),n.state={selectedSource:"fearless",currentRule:E[0],isNot:!1,score:0},n}return Object(s.a)(r,[{key:"setupGame",value:function(){var e=this;k(this.state.source).then((function(t){j(t),e.setState({cards:t,activeCard:t[0],activeCards:t.slice(0,4)})}))}},{key:"startNewGame",value:function(){var e={endGame:!1,currentRule:E[0],isNot:!1,score:0},t=this.state.cards;j(t),e.card=t,e.activeCard=t[0],e.activeCards=t.slice(0,4),this.setState(e)}},{key:"componentDidMount",value:function(){this.setupGame()}},{key:"render",value:function(){var e=this;return this.state.cards?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"header"},"Fear Not!"),this.state.endGame&&a.a.createElement("div",null,a.a.createElement("div",null,"Great Job.  You scored: ",this.state.prevScore),a.a.createElement("button",{onClick:function(){e.startNewGame()}},"New Game?")),a.a.createElement(R,{cards:this.state.activeCards,clickHandler:this.clickHandler,rule:this.state.currentRule}),a.a.createElement(v,{rule:this.state.currentRule,isNot:this.state.isNot,activeCard:this.state.activeCard,score:this.state.score,prevScore:this.state.prevScore})):a.a.createElement("div",null,"Loading")}}]),r}(a.a.Component);var w=function(){return a.a.createElement(M,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.33167296.chunk.js.map