(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),o=n(7),i=n.n(o),r=(n(12),n(2)),s=n(3),l=n(5),u=n(4),m=n(0),h=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={time:(new Date).toLocaleTimeString()},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerBreakPoint=setInterval((function(){t.setState({time:(new Date).toLocaleTimeString()}),console.log(t.state.time)}),1e3)}},{key:"componentDidUpdate",value:function(t){var e=this.props.name;t.name!==e&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(e))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerBreakPoint)}},{key:"render",value:function(){var t=this.state.time;return Object(m.jsxs)("p",{children:["Current time: ",t]})}}]),n}(a.a.Component),b=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!0,clockName:0},t.setRandomName=function(){t.setState({clockName:Math.floor(1e3*Math.random())})},t.changeClockVisbility=function(){t.setState((function(t){return{isClockVisible:!t.isClockVisible}}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.isClockVisible,n=t.clockName;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"React clock"}),e&&Object(m.jsx)(h,{name:n}),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{type:"button",onClick:this.changeClockVisbility,children:this.state.isClockVisible?"Hide Clock":"Show Clock"}),Object(m.jsx)("button",{type:"button",onClick:this.setRandomName,children:"Set random name"})]})]})}}]),n}(a.a.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),o(t),i(t)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root")),j()}},[[14,1,2]]]);
//# sourceMappingURL=main.74af7350.chunk.js.map