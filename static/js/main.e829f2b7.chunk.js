(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),a=n(2),i=n(3),r=n(5),l=n(4),s=n(1),u=n.n(s),m=n(0),d=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={date:new Date},e.timerId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({date:new Date}),console.log(e.state.date.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=e.clockName;t!==this.props.clockName&&console.log("Renamed from ".concat(t," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:this.props.clockName})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:this.state.date.toLocaleTimeString()})]})}}]),n}(u.a.Component);n(13);function h(){var e=Math.random().toString().slice(2,6);return"Clock-".concat(e)}var k=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={hasClock:!0,clockName:h()},e.timerIdT=0,e.handleDocumentClick=function(){e.setState({hasClock:!0})},e.handleDocumentContextMenu=function(t){t.preventDefault(),e.setState({hasClock:!1}),console.clear()},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerIdT=window.setInterval((function(){e.setState({clockName:h()})}),3300),document.addEventListener("contextmenu",this.handleDocumentContextMenu),document.addEventListener("click",this.handleDocumentClick)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerIdT),document.removeEventListener("contextmenu",this.handleDocumentContextMenu),document.removeEventListener("click",this.handleDocumentClick)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(m.jsx)(d,{clockName:this.state.clockName})]})}}]),n}(s.Component);o.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e829f2b7.chunk.js.map