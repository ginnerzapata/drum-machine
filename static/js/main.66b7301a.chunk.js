(this["webpackJsonpdrum-player"]=this["webpackJsonpdrum-player"]||[]).push([[0],{10:function(e,r,t){},11:function(e,r,t){"use strict";t.r(r);var c=t(1),s=t.n(c),a=t(3),n=t.n(a),i=t(4),o=t.p+"static/media/skull.b0083f04.svg",d=t(0),m=function(){return Object(d.jsx)("header",{children:Object(d.jsxs)("div",{className:"logo",children:[Object(d.jsx)("img",{src:o,alt:"logo"}),Object(d.jsxs)("p",{children:["drum",Object(d.jsx)("br",{}),"machine"]})]})})},u=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],p=function(e){var r=e.item,t=Object(c.useRef)(),s=Object(c.useRef)(),a=function(){t.current.pause(),t.current.currentTime=0,t.current.play(),s.current.classList.toggle("active"),setTimeout((function(){s.current.classList.toggle("active")}),200)},n=function(e){e.key.toUpperCase()===r.keyTrigger&&a()};return Object(c.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[]),Object(d.jsxs)("div",{id:r.id,ref:s,className:"box",onClick:a,onKeyDown:n,children:[r.keyTrigger,Object(d.jsx)("audio",{ref:t,src:r.url})]})};var l=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{}),Object(d.jsx)("div",{className:"drum-machine",children:u.map((function(e){return Object(d.jsx)(p,{item:Object(i.a)({},e)},e.id)}))}),Object(d.jsx)("p",{children:"designed & coded with love by ginner zapata"})]})};t(10);n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.66b7301a.chunk.js.map