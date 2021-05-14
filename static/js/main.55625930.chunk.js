(this["webpackJsonpreact-recipes"]=this["webpackJsonpreact-recipes"]||[]).push([[0],{40:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(32),r=n.n(c),i=n(2),s=(n(40),n(4)),l=n.n(s),o=n(12),u=n(7),j=n(6),b=(n(42),n(0)),d=function(e){var t=e.submitHandler,n=e.inputValue,a=e.onChangeHandler;return Object(b.jsx)("div",{className:"recipe-search-container",children:Object(b.jsxs)("form",{className:"search-form",onSubmit:t,children:[Object(b.jsx)("input",{className:"search-bar",type:"text",value:n,onChange:a,placeholder:"Find a good recipe!"}),Object(b.jsx)("button",{className:"search-button",type:"submit",disabled:""===n,children:"Search"})]})})},m=(n(44),function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(i.f)(),s=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r.push("/search?userInput=".concat(n));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"home-container",children:Object(b.jsx)("div",{className:"image-container",children:Object(b.jsxs)("div",{className:"inputs-link-container",children:[Object(b.jsx)(d,{inputValue:n,onChangeHandler:function(e){c(e.target.value)},submitHandler:s}),Object(b.jsx)("div",{className:"link-container",children:Object(b.jsx)(j.b,{to:"/search",children:"Advanced Search"})})]})})})}),h=n(22),f=n.n(h),O="6b5e835d093a4825b6f91e07e8970e5d",v="https://api.spoonacular.com/recipes",p=function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(v,"/complexSearch?apiKey=").concat(O),{params:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(v,"/").concat(t,"/information?apiKey=").concat(O,"&includeNutrition=true"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=(n(68),function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(i.g)().pathname.slice(8),s=Object(a.useRef)(null),j=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(r);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){j()}),[]),Object(a.useEffect)((function(){n&&s.current&&(s.current.innerHTML=n.summary)}),[n]);return Object(b.jsxs)("div",{className:"recipe-details-container",children:[Object(b.jsxs)("h1",{children:[null===n||void 0===n?void 0:n.title," "]}),Object(b.jsx)("img",{src:null===n||void 0===n?void 0:n.image}),Object(b.jsxs)("div",{className:"all",children:[Object(b.jsxs)("div",{className:"summary-container",children:[Object(b.jsx)("h2",{children:"SUMMARY"}),Object(b.jsx)("p",{ref:s})]}),Object(b.jsxs)("div",{className:"diet-information",children:[(null===n||void 0===n?void 0:n.vegan)?Object(b.jsx)("i",{className:"far fa-check-circle",children:"Vegan"}):Object(b.jsx)("i",{className:"far fa-times-circle",children:"Vegan"}),Object(b.jsx)("br",{}),(null===n||void 0===n?void 0:n.vegetarian)?Object(b.jsx)("i",{className:"far fa-check-circle",children:"Vegetarian"}):Object(b.jsx)("i",{className:"far fa-times-circle",children:"Vegetarian"}),Object(b.jsx)("br",{}),(null===n||void 0===n?void 0:n.glutenFree)?Object(b.jsx)("i",{className:"far fa-check-circle",children:"GlutenFree"}):Object(b.jsx)("i",{className:"far fa-times-circle",children:"GlutenFree"})]}),Object(b.jsxs)("div",{className:"ingredients-container",children:[Object(b.jsx)("h2",{children:"INGREDIENTS"}),Object(b.jsx)("ul",{children:null===n||void 0===n?void 0:n.extendedIngredients.map((function(e){var t=e.id,n=e.originalString;return Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:n})},t)}))})]}),Object(b.jsxs)("div",{className:"instructions-container",children:[Object(b.jsx)("h2",{children:"INSTRUCTIONS"}),Object(b.jsx)("ul",{children:function(){var e;return null===n||void 0===n||null===(e=n.analyzedInstructions)||void 0===e?void 0:e[0].steps.map((function(e){var t=e.number,n=e.length,a=e.step;return Object(b.jsxs)("li",{children:[Object(b.jsx)("h3",{className:"step-number",children:t}),n&&Object(b.jsx)("h5",{className:"step-duration",children:n.number+n.unit}),Object(b.jsx)("p",{className:"step-description",children:a})]},t)}))}()})]})]})]})}),N=n(17),S=n(11),k=(n(69),function(e){var t=e.id,n=e.title,a=e.image;return Object(b.jsxs)("div",{className:"recipe-container",children:[Object(b.jsx)("img",{src:a,alt:n}),Object(b.jsx)(j.b,{to:"/recipe/".concat(t),className:"recipe-link",children:Object(b.jsx)("h1",{children:n})},t)]})}),y=[{name:"cuisine",title:"Cuisine",options:[{name:"German",value:"German"},{name:"African",value:"African"},{name:"Italian",value:"Italian"},{name:"Latin American",value:"Latin American"}]},{name:"diet",title:"Diet",options:[{name:"Gluten Free",value:"Gluten Free"},{name:"Ketogenic",value:"Ketogenic"},{name:"Vegetarian",value:"Vegetarian"},{name:"Lacto-Vegetarian",value:"Lacto-Vegetarian"},{name:"Ovo-Vegetarian",value:"Ovo-Vegetarian"},{name:"Vegan",value:"Vegan"},{name:"Pescetarian",value:"Pescetarian"},{name:"Paleo",value:"Paleo"},{name:"Primal",value:"Primal"},{name:"Whole30",value:"Whole30"}]},{name:"intolerances",title:"Intolerances",options:[{name:"Dairy",value:"Dairy"},{name:"Egg",value:"Egg"},{name:"Gluten",value:"Gluten"},{name:"Grain",value:"Grain"},{name:"Peanut",value:"Peanut"},{name:"Seafood",value:"Seafood"},{name:"Sesame",value:"Sesame"},{name:"Shellfish",value:"Shellfish"},{name:"Soy",value:"Soy"},{name:"Sulfite",value:"Sulfite"},{name:"Tree Nut",value:"Tree Nut"},{name:"Wheat",value:"Wheat"}]}],w=n(34),C=(n(70),function(e){var t=e.name,n=e.title,c=e.options,r=e.onChange,i=e.selectedFilters,s=Object(a.useState)(!1),l=Object(u.a)(s,2),o=l[0],j=l[1],d=Object(a.useState)([]),m=Object(u.a)(d,2),h=m[0],f=m[1];Object(a.useEffect)((function(){if(i){var e=i.split(", ");f(e)}}),[]);var O=function(e){var n;n=h.includes(e)?h.filter((function(t){return t!==e})):[].concat(Object(w.a)(h),[e]),f(n),r(t,function(e){var t="";return e.forEach((function(n,a){t+=n,e.length-1!==a&&(t+=", ")})),t}(n))},v=function e(){o&&j(!o),document.removeEventListener("click",e)};return Object(b.jsxs)("div",{className:"select-container",onMouseLeave:function(){document.addEventListener("click",v)},children:[Object(b.jsxs)("div",{className:"value-container".concat(o?"-open":""),onClick:function(){return j(!o)},children:[Object(b.jsx)("span",{children:n}),Object(b.jsx)("i",{className:"fas fa-chevron-".concat(o?"up":"down")})]}),o&&Object(b.jsx)("div",{className:"options-container",children:c.map((function(e,t){var n=e.name,a=e.value;return Object(b.jsx)("div",{className:"option-container",onClick:function(){return O(a)},children:Object(b.jsxs)("span",{children:[n,h.includes(a)&&Object(b.jsx)("i",{className:"fas fa-check"})]})},t)}))})]})}),P=(n(71),function(e){var t=e.submitHandler,n=e.inputValue,a=e.onChangeHandler,c=e.onChange,r=e.selectedFilters;return Object(b.jsxs)("div",{className:"advanced-search-container",children:[Object(b.jsx)(d,{inputValue:n,onChangeHandler:a,submitHandler:t}),Object(b.jsx)("div",{className:"filters-container",children:y.map((function(e){var t=e.name,n=e.title,a=e.options;return Object(b.jsx)(C,{name:t,title:n,options:a,onChange:c,selectedFilters:r&&r.name},t)}))})]})}),V=n(35),I=(n(72),function(e){var t=e.number,n=e.offset,a=e.totalResults,c=Object(V.a)(e,["number","offset","totalResults"]),r=0===n?1:Math.floor(n/t)+1,i=Math.floor((a-n)/t);return Object(b.jsxs)("div",{className:"pagination-container",children:[Object(b.jsx)("button",{disabled:1===r,className:"button-hover",onClick:function(){return c.changePage("previous")},children:"Previous"}),1!==r&&Object(b.jsx)("button",{className:"button-hover",onClick:function(){return c.changePage("previous")},children:r-1}),Object(b.jsx)("button",{disabled:!0,className:"current-page pagination-button",children:r}),i>0&&Object(b.jsx)("button",{className:"button-hover",onClick:function(){return c.changePage("next")},children:r+1}),i-1>0&&Object(b.jsx)("p",{className:"p-button",children:"..."}),i-1>0&&Object(b.jsx)("p",{className:"p-button",children:i-1}),Object(b.jsx)("button",{disabled:0===i,className:"button-hover",onClick:function(){return c.changePage("next")},children:"Next"})]})}),F=(n(73),function(){var e=Object(i.g)(),t=new URLSearchParams(e.search).get("userInput"),n=JSON.parse(localStorage.getItem("previousConfig")),c=Object(a.useState)([]),r=Object(u.a)(c,2),s=r[0],j=r[1],d={cuisine:n.cuisine,diet:n.diet,intolerances:n.intolerances},m=Object(a.useState)(d),h=Object(u.a)(m,2),f=h[0],O=h[1],v=Object(a.useState)(t||n.query||""),x=Object(u.a)(v,2),g=x[0],y=x[1],w=Object(a.useState)({query:t||n.query||"",offset:n.offset||0,number:n.number||20}),C=Object(u.a)(w,2),V=C[0],F=C[1],E=Object(a.useState)(),H=Object(u.a)(E,2),G=H[0],R=H[1],L=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(Object(S.a)(Object(S.a)({},V),f));case 2:t=e.sent,j(t.results),n={offset:t.offset,number:t.number,totalResults:t.totalResults},R(n),a=Object(S.a)(Object(S.a)({},V),f),localStorage.setItem("previousConfig",JSON.stringify(a));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){""!==V.query&&L()}),[V,f]);return Object(b.jsx)("div",{className:"search-container",children:Object(b.jsxs)("div",{className:"image-search-container",children:[Object(b.jsx)(P,{inputValue:g,onChangeHandler:function(e){y(e.target.value)},submitHandler:function(e){e.preventDefault(),F(Object(S.a)(Object(S.a)({},V),{},{query:g}))},onChange:function(e,t){var n=Object(S.a)(Object(S.a)({},f),{},Object(N.a)({},e,t));O(n)},selectedFilters:f}),Object(b.jsx)("div",{className:"recipes-list-container",children:s.map((function(e){return Object(b.jsx)(k,{id:e.id,recipe:e,title:e.title,image:e.image},e.id)}))}),G&&Object(b.jsx)(I,{number:G.number,offset:G.offset,totalResults:G.totalResults,changePage:function(e){var t="next"===e?V.offset+V.number:V.offset-V.number,n=Object(S.a)(Object(S.a)({},V),{},{offset:t});F(n)}})]})})}),E=(n(74),function(){var e=Object(i.g)().pathname,t=function(t){return"nav-link".concat(e===t?"-active":"")};return Object(b.jsxs)("div",{className:"navbar-container",children:[Object(b.jsx)(j.b,{to:"/",className:"home-icon",children:Object(b.jsx)("i",{className:"fas fa-utensils fa-2x"})}),Object(b.jsxs)("div",{className:"links-container",children:[Object(b.jsx)(j.b,{to:"/",className:t("/"),children:"Home"}),Object(b.jsx)(j.b,{to:"/search",className:t("/search"),children:"Search"})]}),Object(b.jsxs)("div",{className:"social-media-container-header",children:[Object(b.jsx)("a",{href:"https://github.com/FlorenciaPetrone",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-github-square fa-1x","aria-hidden":"true"})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/florencia-petrone/",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-linkedin fa-1x","aria-hidden":"true"})})]})]})}),H=(n(75),function(){return Object(b.jsxs)("div",{className:"footer-container",children:[Object(b.jsxs)("div",{className:"social-media-container",children:[Object(b.jsx)("a",{href:"https://github.com/FlorenciaPetrone",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-github-square fa-1x","aria-hidden":"true"})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/florencia-petrone/",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-linkedin fa-1x","aria-hidden":"true"})})]}),Object(b.jsx)("p",{children:"\xa9 2021 Florencia Petrone. All rights reserved."})]})}),G=function(){return Object(b.jsxs)("div",{className:"app-container",children:[Object(b.jsx)(E,{}),Object(b.jsx)("div",{className:"body-container",children:Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{exact:!0,path:"/",component:m}),Object(b.jsx)(i.a,{exact:!0,path:"/search",component:F}),Object(b.jsx)(i.a,{exact:!0,path:"/recipe/:id",component:g})]})}),Object(b.jsx)(H,{})]})};r.a.render(Object(b.jsx)(j.a,{basename:"/react-recipes",children:Object(b.jsx)(G,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.55625930.chunk.js.map