(function(e){function t(t){for(var r,o,c=t[0],s=t[1],l=t[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i=[];function o(e){return c.p+"js/"+({404:"404",about:"about",brewery:"brewery",calendar:"calendar",cities:"cities",city:"city",countries:"countries",country:"country",month:"month",statistics:"statistics",tag:"tag",tags:"tags",trip:"trip",trips:"trips",year:"year"}[e]||e)+"."+{404:"7e20ad90",about:"49cca7ca",brewery:"ee9e90cd",calendar:"783ee4f2",cities:"1c2d4335",city:"ee4df460",countries:"210a1c24",country:"ee83c324",month:"f1678698",statistics:"6a5ff1d9",tag:"f2cdb69e",tags:"21db4f98",trip:"0227d157",trips:"8edc8303",year:"ca4c92c6"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=o(e);var l=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}a[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=l;i.push(["93b7","chunk-vendors"]),n()})({"0a78":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AIXEwUDDBF3pAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAB3UlEQVRIx+2UP6jaUBTGz40lKS08cHUJ6PJcxNXBQWldCk5dHJzbzn2rhgxSwUEh8AanDFW71KkQXoeighUchBaFlkqiiIUovFtjCVGSezp1rAbt6G/+vvNx/twLcOHChQtHIX6FpVLpWhCEawAA27YnxWLxhx/fg2MCSZIeRiKRZiwWexIKhR4DACwWi60oine6rr+SZfn+rBZbrdZH27aRMYaO46DjOMgYQ8uyWLPZvJMk6dHJxRVFuVmv1x5jDNvtNuZyOczn86hpGiIiGoaxr1arL04OaDQaH1zXxdlsholEAjmOQ0IIptNpNAwDd7sdqqr6TpIk7l81uEMBgiAECSFAKQVd14ExBogI0+kUKKUQCASA5/mrQ7s8GLDZbL65rgvhcBiy2SwIggA8z0MmkwFRFMG2bdxut99lWd6fdEWmadYnk8nzeDx+VSgUIJlMAiEEUqkUBINBGA6H95TS92ddkaqqby3LYoiInuchYwwREVerlVev128Pzf/oiAAAlsvl606n89V1XeA4Dggh4HkeDAaDL6ZpvpFlmZ393CuVyrN+v7/620Gv1/tZLpef/tc/RVGUm/F4/Hs0Gv2q1Wov/foCfoWapn2ORqP7+Xz+iVJ62+120Y/vDy5WAQY8j8cHAAAAAElFTkSuQmCC"},"0f38":function(e,t,n){"use strict";n("d3b7"),n("25f0");t["a"]={fetch:function(e){function t(t,n,r){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t,n){return fetch("/api/"+t+".json?"+Date.now()).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(){e.push({name:"404"})}))}))}},"13ea":function(e,t,n){"use strict";n("d8fb")},2326:function(e,t,n){"use strict";n("d3b7"),n("ddb0"),n("5377"),n("b0c0");var r=n("7a23"),a={key:0,class:"px-4 divide-y divide-gray-100"},i={key:0,class:"flex justify-center items-center mx-2"},o={key:0,class:"flags whitespace-nowrap -mr-2"},c={class:"mx-2 w-full text-xs flex items-center"},s={class:"text-gray-900 flex-1"},l={key:0,class:"text-gray-500"},u={key:1,class:"text-gray-500"},d={class:"text-gray-500 text-right"};function f(e,t,n,f,m,b){var p=Object(r["z"])("router-link");return n.entries?(Object(r["t"])(),Object(r["f"])("ul",a,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(n.entries,(function(e,t){return Object(r["t"])(),Object(r["f"])(p,{to:n.route(e),key:t,class:["trip flex hover:bg-gray-100",b.paddingClass]},{default:Object(r["H"])((function(){return[n.flag||n.flags?(Object(r["t"])(),Object(r["f"])("div",i,[n.flags?(Object(r["t"])(),Object(r["f"])("div",o,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(n.flags(e),(function(e){return Object(r["t"])(),Object(r["f"])("span",{class:"ml-1",key:e.slug},[Object(r["i"])("i",{class:["flat flag shadow",e.symbol]},null,2)])})),128))])):Object(r["g"])("",!0),n.flag?(Object(r["t"])(),Object(r["f"])("i",{key:1,class:["large flat flag shadow-lg",n.flag(e)]},null,2)):Object(r["g"])("",!0)])):Object(r["g"])("",!0),Object(r["i"])("div",c,[Object(r["i"])("div",s,[Object(r["h"])(Object(r["C"])(n.name(e))+" ",1),n.additional&&n.additional(e)?(Object(r["t"])(),Object(r["f"])("span",l,"| "+Object(r["C"])(n.additional(e)),1)):Object(r["g"])("",!0),n.alt?(Object(r["t"])(),Object(r["f"])("div",u,Object(r["C"])(n.alt(e)),1)):Object(r["g"])("",!0)]),Object(r["i"])("div",d,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(n.labels,(function(t,n){return Object(r["t"])(),Object(r["f"])("div",{key:n},Object(r["C"])(t(e)),1)})),128))])])]})),_:2},1032,["to","class"])})),128))])):Object(r["g"])("",!0)}n("a9e3");var m={props:{entries:Array,route:Function,name:Function,additional:Function,alt:Function,flag:Function,flags:Function,labels:{type:Array,default:function(){return[]}},customCover:Boolean,padding:{type:Number,default:2}},computed:{paddingClass:function(){return"py-"+this.padding}}};m.render=f;t["a"]=m},3857:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AIXEjoXT9fj0gAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAB4ElEQVRIx7WVvYsTURTFf9E1YTL4AQsbiahgmoFgiBDCpowWFvY2NgqCECurNKmChYX4J5hKxWrdTb2BsMtCmgVt1cEUaywULPIhmeRdm1Hi23mzMyEeuMUMc86597537yQ4GVngFrAJXAbWgJ/Ae2AXOAQUS+AM8Bg4AsQQU+ANcCWu+Drwys9MIsRn4HaczF9HFF6MI+B6FIOHwFwXSCaTks/npVQqSSaTMZkcAGfDxDeALzqxUqlIt9sVz/NEKSWDwUDq9bpYlhVkcj/M4K5OKBQK0u/3RYdSSprNZpDBDnAqSDwBvNAJrVZLTBiPx+I4jn4RPgHn/ojqTpnFh3Q6TbVaNZZrWRblcjkRcAPPmwz++VhEUCp8hkTE1I1jBuIf8F9MJhM6nY5RfDgc0uv19NffgB8mzk1gtthTx3GU67rH+u95njQajaBBfBlWcQrY00nFYnHebrfVaDSS2WwmrutKrVZTqVRKN1D+3grFHeBX0CBls9lpLpeb2rY9NwzaO+B0lFWxtcSq+A7ko+6jGz4hjsHTuBv1EeBFFN8DLizzP3gbQfyrX/FSuAR8OMHggT6gcbHpZykBV/IZK8I9fQCBbcBmhXiycOj7wEVWjDXgOfARuMp/gg1ci0P4DduAVBeXx8Y7AAAAAElFTkSuQmCC"},"597a":function(e,t,n){"use strict";var r=n("7a23"),a={key:0,class:"relative h-40 sm:h-56"},i={class:"mt-6 pb-2 px-4 sm:flex sm:items-end sm:px-6"},o={class:"sm:flex-1"},c={class:"flex items-center"},s={class:"text-xl text-gray-900 sm:text-2xl"},l={class:"text-sm text-gray-500"},u=Object(r["i"])("hr",{class:"my-4"},null,-1);function d(e,t,n,d,f,m){return Object(r["t"])(),Object(r["f"])("div",null,[n.cover?(Object(r["t"])(),Object(r["f"])("div",a,[Object(r["i"])("img",{class:"absolute h-full w-full object-cover",src:n.cover,alt:n.title},null,8,["src","alt"])])):Object(r["g"])("",!0),Object(r["i"])("div",i,[Object(r["i"])("div",o,[Object(r["i"])("div",null,[Object(r["i"])("div",c,[Object(r["i"])("h3",s,Object(r["C"])(n.title),1)]),Object(r["i"])("p",l,Object(r["C"])(n.header),1)])])]),u])}var f={props:{title:String,header:String,cover:String}};f.render=d;t["a"]=f},"7acb":function(e,t,n){},"93b7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("7acb");var r=n("7a23"),a=(n("3ca3"),n("ddb0"),n("6c02"));function i(e,t,n,a,i,o){var c=Object(r["z"])("page-header"),s=Object(r["z"])("breweries");return Object(r["t"])(),Object(r["f"])("div",null,[Object(r["i"])(c,{title:"Odwiedzone browary",header:o.subtitle},null,8,["header"]),Object(r["i"])(s,{breweries:a.breweries},null,8,["breweries"])])}var o=n("1da1"),c=(n("96cf"),n("07ac"),n("5502")),s=n("aac5"),l=n("597a"),u=n("0f38"),d={components:{Breweries:s["a"],PageHeader:l["a"]},computed:{subtitle:function(){if(this.$store.getters.counters){var e=this.$store.getters.counters.breweries,t=this.$store.getters.counters.countries;return this.inflectBrewery(e)+" w "+this.inflectCountries(t)}return"..."}},setup:function(){var e=Object(a["d"])(),t=Object(c["b"])(),n=Object(r["w"])([]),i=function(){var r=Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u["a"].fetch(e,"breweries",(function(e){t.commit("resetMap"),n.value=Object.values(e)}));case 2:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return Object(r["q"])((function(){return i()})),{breweries:n}}};d.render=i;var f=d,m=[{path:"/",name:"home",component:f,meta:{section:"home"}},{path:"/browar/:slug",name:"brewery",component:function(){return n.e("brewery").then(n.bind(null,"d8af"))},meta:{section:"home"}},{path:"/kalendarz",name:"calendar",component:function(){return n.e("calendar").then(n.bind(null,"c96c"))},meta:{section:"calendar"}},{path:"/kalendarz/:year",name:"calendar.year",component:function(){return n.e("year").then(n.bind(null,"1465"))},meta:{section:"calendar"}},{path:"/kalendarz/:year/:month",name:"calendar.month",component:function(){return n.e("month").then(n.bind(null,"f1d0"))},meta:{section:"calendar"}},{path:"/informacje",name:"about",component:function(){return n.e("about").then(n.bind(null,"07c4"))},meta:{section:"about"}},{path:"/panstwa",name:"countries",component:function(){return n.e("countries").then(n.bind(null,"e791"))},meta:{section:"countries"}},{path:"/panstwa/:slug",name:"country",component:function(){return n.e("country").then(n.bind(null,"cebd"))},meta:{section:"countries"}},{path:"/miasta",name:"cities",component:function(){return n.e("cities").then(n.bind(null,"74a8"))},meta:{section:"cities"}},{path:"/miasta/:slug",name:"city",component:function(){return n.e("city").then(n.bind(null,"4096"))},meta:{section:"cities"}},{path:"/wycieczki",name:"trips",component:function(){return n.e("trips").then(n.bind(null,"a9b4"))},meta:{section:"trips"}},{path:"/wycieczki/:slug",name:"trip",component:function(){return n.e("trip").then(n.bind(null,"3067"))},meta:{section:"trips"}},{path:"/tagi",name:"tags",component:function(){return n.e("tags").then(n.bind(null,"1b6d"))},meta:{section:"tags"}},{path:"/tagi/:slug",name:"tag",component:function(){return n.e("tag").then(n.bind(null,"c4a2"))},meta:{section:"tags"}},{path:"/statystyki",name:"statistics",component:function(){return n.e("statistics").then(n.bind(null,"3181"))},meta:{section:"statistics"}},{path:"/404",name:"404",component:function(){return n.e("404").then(n.bind(null,"69c0"))},meta:{section:"error"}}],b=Object(a["a"])({history:Object(a["b"])("/"),routes:m}),p=b,h=(n("4de4"),{mapFilters:{id:null,center:null,bounds:null,filter:{key:null,value:null}},ghosts:!0,counters:null,defaultBounds:null}),g={mapFilters:function(e){return e.mapFilters},mapFilterCenter:function(e){return e.mapFilters.center},mapFilterBounds:function(e){return e.mapFilters.bounds},mapFilterValue:function(e){return e.mapFilters.filter},counters:function(e){return e.counters},ghosts:function(e){return e.ghosts},defaultBounds:function(e){return e.defaultBounds}},v={setCounters:function(e,t){e.counters=t},setMapDefaultExtremes:function(e,t){e.defaultBounds=[[t.west,t.south],[t.east,t.north]]},resetMap:function(e){e.mapFilters.id=Math.random(),e.mapFilters.center=null,e.mapFilters.bounds=e.defaultBounds,e.mapFilters.filter.key=null,e.mapFilters.filter.value=null},selectBrewery:function(e,t){e.mapFilters.center=t.location.coordinates,e.mapFilters.bounds=null,e.mapFilters.filter.key=null,e.mapFilters.filter.value=null},setFilter:function(e,t){e.mapFilters.center=null,e.mapFilters.bounds=[[t.item.extremes.west,t.item.extremes.south],[t.item.extremes.east,t.item.extremes.north]],e.mapFilters.filter.key=t.type,e.mapFilters.filter.value=t.item.slug},toggleGhosts:function(e){e.ghosts=!e.ghosts}},j=Object(c["a"])({state:h,getters:g,mutations:v}),y={class:"h-screen flex bg-gray-50 overflow-hidden"},w={class:"flex-1 min-w-0 flex flex-col overflow-hidden"},O={class:"absolute top-0 right-0 z-20 lg:hidden"},A=Object(r["i"])("span",{class:"sr-only"},"Open sidebar",-1),x={class:"flex-1 flex overflow-hidden"},k={class:"flex-1 flex flex-col-reverse lg:flex-row lg:overflow-hidden"},z={class:" flex-1 h-1/2 lg:h-full lg:flex-none block order-first z-10 shadow-lg"},F={class:"h-full relative flex flex-col w-full lg:w-120 bg-white overflow-hidden overflow-y-auto"},C=Object(r["i"])("div",{class:"w-full"}," ",-1);function B(e,t,n,a,i,o){var c=Object(r["z"])("mobile-width-sidebar"),s=Object(r["z"])("full-width-sidebar"),l=Object(r["z"])("menu-icon"),u=Object(r["z"])("brewmap"),d=Object(r["z"])("router-view");return Object(r["t"])(),Object(r["f"])("div",y,[Object(r["i"])(c,{navigation:a.navigation,"mobile-menu-open":a.mobileMenuOpen,onHide:t[1]||(t[1]=function(e){return a.mobileMenuOpen=!1})},null,8,["navigation","mobile-menu-open"]),Object(r["i"])(s,{navigation:a.navigation},null,8,["navigation"]),Object(r["i"])("div",w,[Object(r["i"])("div",O,[Object(r["i"])("button",{type:"button",class:"m-3 h-12 w-12 inline-flex items-center justify-center bg-gray-700 hover:bg-gray-800 rounded-md text-white",onClick:t[2]||(t[2]=function(e){return a.mobileMenuOpen=!0})},[A,Object(r["i"])(l,{class:"h-6 w-6","aria-hidden":"true"})])]),Object(r["i"])("main",x,[Object(r["i"])("div",k,[Object(r["i"])(u,{class:"flex-1 h-1/2 lg:flex-auto lg:flex-grow lg:h-full"}),Object(r["i"])("div",z,[Object(r["i"])("div",F,[Object(r["i"])(d),C])])])])])])}var M=n("9510"),T={key:0,class:"flex justify-center items-center w-full h-full bg-gray-300 text-gray-400"},S=Object(r["i"])("div",{id:"map",class:"w-full h-full"},null,-1);function I(e,t,n,a,i,o){var c=Object(r["z"])("location-marker-icon");return Object(r["t"])(),Object(r["f"])("div",null,[i.loading?(Object(r["t"])(),Object(r["f"])("div",T,[Object(r["i"])(c,{class:"h-36 w-36 animate-pulse","aria-hidden":"true"})])):Object(r["g"])("",!0),S])}n("d81d");var E=n("e192"),V=n.n(E);function H(e){return e[0][0]===e[1][0]&&e[0][1]===e[1][1]}var R={methods:{adjustMap:function(){var e=this.$store.getters.mapFilterBounds,t=this.$store.getters.mapFilterCenter,n=this.$store.getters.mapFilterValue,r=window.innerWidth>1024?120:30;if(this.setFilters(n),e)return H(e)?void this.jumpToPoint(e[0]):void this.map.fitBounds(e,{padding:r,duration:0});t&&(this.setFilters({key:"slug",value:this.$route.params.slug}),this.jumpToPoint(t))},setFilters:function(e){e&&e.key&&e.value?"tag"===e.key?(this.map.setFilter("breweries",["has","tag_"+e.value]),this.map.setFilter("ghosts",["!has","tag_"+e.value])):(this.map.setFilter("breweries",["==",e.key,e.value]),this.map.setFilter("ghosts",["!=",e.key,e.value])):this.resetMarkers()},jumpToPoint:function(e){this.map.jumpTo({center:e,zoom:13,essential:!0})},resetMarkers:function(){this.map.setFilter("breweries",null),this.map.setFilter("ghosts",["==","key","value"])}},watch:{"$store.getters.mapFilters":{deep:!0,handler:function(){this.map.isStyleLoaded()&&this.adjustMap()}},"$store.getters.ghosts":function(e){e?this.setFilters(this.$store.getters.mapFilterValue):this.resetMarkers()}}},D=n("d4ec"),U=n("bee2"),L=(n("159b"),function(){function e(t){var n=t.id,r=t.controls,a=void 0===r?[]:r;Object(D["a"])(this,e),this.id=n,this.controls=a}return Object(U["a"])(e,[{key:"onAdd",value:function(){var e=this;return this.container=document.createElement("div"),this.container.id=this.id,this.container.className="mapboxgl-ctrl-group mapboxgl-ctrl",this.controls.forEach((function(t){var n=document.createElement("i");n.className=t.icon;var r=document.createElement("button");r.title=t.title,r.onclick=t.eventHandler,r.appendChild(n),e.container.appendChild(r)})),this.container}},{key:"onRemove",value:function(){this.container.parentNode.removeChild(this.container),this.map=void 0}}]),e}()),P={methods:{addControls:function(){var e=this,t=new L({id:"map-controls",controls:[{title:"Przywróć główny widok",icon:"home icon",eventHandler:function(){e.$store.commit("resetMap")}},{title:"Przełącz markery",icon:"marker icon",eventHandler:function(){e.$store.commit("toggleGhosts")}},{title:"Przeładuj widok",icon:"refresh icon",eventHandler:function(){location.reload()}}]});this.map.addControl(t,"top-left"),this.map.addControl(new V.a.NavigationControl,"top-left"),this.map.addControl(new V.a.ScaleControl,"bottom-left")}}},Q=n("b85c");n("b0c0");function W(e,t,n){return{id:t,type:"symbol",source:{type:"geojson",data:e},layout:{"icon-image":n,"icon-allow-overlap":!0,"icon-ignore-placement":!0,"icon-anchor":"bottom"}}}var Y=[{name:"ghosts",icon:"ghost",offset:[8,-8]},{name:"breweries",icon:"marker",offset:[12,-16]}],N={methods:{buildMarkers:function(){var e=this;this.map.on("load",Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.map.loadImage(n("3857"),(function(t,n){t&&console.log("Image not loaded."),e.map.addImage("marker",n)}));case 2:return t.next=4,e.map.loadImage(n("0a78"),(function(t,n){t&&console.log("Image not loaded."),e.map.addImage("ghost",n)}));case 4:return t.next=6,fetch("/api/map.json?cache="+(new Date).getTime()).then((function(e){return e.json()})).then((function(t){var n,r=Object(Q["a"])(Y);try{for(r.s();!(n=r.n()).done;){var a=n.value;e.map.addLayer(W(t,a.name,a.icon)),e.buildPopups(a),e.linkMarkers(a.name)}}catch(i){r.e(i)}finally{r.f()}e.adjustMap(),e.loading=!1}));case 6:case"end":return t.stop()}}),t)}))))},linkMarkers:function(e){var t=this;this.map.on("click",e,(function(e){var n=e.features[0].properties.slug;t.$router.push({name:"brewery",params:{slug:n}})}))}}},X=(n("fb6a"),{methods:{buildPopups:function(e){var t=this,n=new V.a.Popup({closeButton:!1,closeOnClick:!1,anchor:"left",maxWidth:"none",offset:e.offset,className:"map-marker-popup text-gray-700"});this.map.on("mousemove",e.name,(function(e){var r=e.features[0].properties.label,a="<i class='flat "+e.features[0].properties.symbol+" flag'></i>",i=e.features[0].geometry.coordinates.slice();while(Math.abs(e.lngLat.lng-i[0])>180)i[0]+=e.lngLat.lng>i[0]?360:-360;n.setLngLat(i).setHTML(a+" "+r).addTo(t.map)})),this.map.on("mouseleave",e.name,(function(){n.remove()}))}}}),J=(n("a4d3"),n("e01a"),n("ac1f"),n("1276"),n("a15b"),n("a434"),n("caad"),n("2532"),n("3666")),Z=n.n(J),G=n("885b"),q=n.n(G);function K(e){return _.apply(this,arguments)}function _(){return _=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i,o,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],e.next=3,fetch("/api/search.json");case 3:return r=e.sent,e.next=6,r.json();case 6:a=e.sent,i=Object(Q["a"])(a);try{for(i.s();!(o=i.n()).done;)c=o.value,c.searchable.includes(Z()(t))&&(s=[],s.custom=!0,s.place_name=c.name,s.description=c.description,s.symbol=c.symbol,s.center=c.center,s.slug=c.slug,n.push(s))}catch(l){i.e(l)}finally{i.f()}return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}var $={methods:{addSearch:function(){var e=this,t=new q.a({accessToken:V.a.accessToken,marker:!1,mapboxgl:this.map,types:"country,region,district,place",externalGeocoder:K,zoom:12,flyTo:!1,render:function(e){var t="",n="",r="";if(!0===e.custom)t=e.place_name,n=e.description,r='<i class="flat flag '+e.symbol+'"></i> ';else{var a=e.place_name.split(",");t=a[0],n=a.splice(1,a.length).join(",")}return'<div class="mapboxgl-ctrl-geocoder--suggestion"><div class="mapboxgl-ctrl-geocoder--suggestion-title">'+t+'</div><div class="mapboxgl-ctrl-geocoder--suggestion-address">'+r+n+"</div></div>"}});this.map.addControl(t),t.on("result",(function(n){if(!0===n.result.custom)return e.$router.push({name:"brewery",params:{slug:n.result.slug}}),void t.clear();e.map.fitBounds(n.result.bbox,{linear:!0})}))}}},ee={components:{LocationMarkerIcon:M["f"]},mixins:[R,P,N,X,$],mounted:function(){V.a.accessToken="pk.eyJ1Ijoia3Jld2FrIiwiYSI6ImNrNHZncTg0ejA1dGYzamwyd3BoNTZlM2UifQ.5mWq7YOC0cmuCEk9YxzYZg",this.buildMap()},data:function(){return{loading:!0,map:null,filtered:[]}},methods:{buildMap:function(){this.map=new V.a.Map({container:"map",style:"mapbox://styles/krewak/ckozumagm37x217o2uvvm1cca"}),this.addControls(),this.addSearch(),this.buildMarkers()}}};n("13ea");ee.render=I;var te=ee,ne={class:"relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none"},re={class:"absolute top-0 right-0 -mr-12 pt-4"},ae=Object(r["i"])("span",{class:"sr-only"},"Close sidebar",-1),ie={class:"pt-5 pb-4"},oe={"aria-label":"Sidebar"},ce={class:"px-2 space-y-1"},se=Object(r["i"])("div",{class:"flex-shrink-0 w-14","aria-hidden":"true"},null,-1);function le(e,t,n,a,i,o){var c=Object(r["z"])("dialog-overlay"),s=Object(r["z"])("transition-child"),l=Object(r["z"])("x-icon"),u=Object(r["z"])("router-link"),d=Object(r["z"])("dialog-base"),f=Object(r["z"])("transition-root");return Object(r["t"])(),Object(r["f"])(f,{as:"template",show:n.mobileMenuOpen},{default:Object(r["H"])((function(){return[Object(r["i"])(d,{as:"div",static:"",class:"fixed inset-0 flex z-40 lg:hidden",onClose:t[3]||(t[3]=function(t){return e.$emit("hide")}),open:n.mobileMenuOpen},{default:Object(r["H"])((function(){return[Object(r["i"])(s,{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:Object(r["H"])((function(){return[Object(r["i"])(c,{class:"fixed inset-0 bg-gray-900 bg-opacity-75"})]})),_:1}),Object(r["i"])(s,{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:Object(r["H"])((function(){return[Object(r["i"])("div",ne,[Object(r["i"])(s,{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:Object(r["H"])((function(){return[Object(r["i"])("div",re,[Object(r["i"])("button",{type:"button",class:"ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:t[1]||(t[1]=function(t){return e.$emit("hide")})},[ae,Object(r["i"])(l,{class:"h-6 w-6 text-white","aria-hidden":"true"})])])]})),_:1}),Object(r["i"])("div",ie,[Object(r["i"])("nav",oe,[Object(r["i"])("div",ce,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(n.navigation,(function(n){return Object(r["t"])(),Object(r["f"])(u,{key:n.route,to:{name:n.route},class:"group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900",onClick:t[2]||(t[2]=function(t){return e.$emit("hide")})},{default:Object(r["H"])((function(){return[(Object(r["t"])(),Object(r["f"])(Object(r["A"])(n.icon),{class:"mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"})),Object(r["h"])(" "+Object(r["C"])(n.name),1)]})),_:2},1032,["to"])})),128))])])])])]})),_:1}),se]})),_:1},8,["open"])]})),_:1},8,["show"])}var ue=n("d511"),de={components:{"dialog-base":ue["a"],"dialog-overlay":ue["b"],"transition-child":ue["c"],"transition-root":ue["d"],"x-icon":M["m"]},props:{mobileMenuOpen:Boolean,navigation:Array}};de.render=le;var fe=de,me={class:"hidden lg:flex lg:flex-shrink-0"},be={class:"flex flex-col w-20"},pe={class:"flex flex-col h-0 flex-1 overflow-y-auto bg-gradient-to-r from-black to-gray-900"},he={class:"flex-1 flex flex-col"},ge={"aria-label":"sidebar",class:"py-6 flex flex-col items-center space-y-3"},ve={class:"sr-only"},je={class:"flex-shrink-0 flex pb-3 text-white flex flex-col items-center"},ye={href:"https://github.com/krzysztofrewak/browary",class:"flex items-center p-4 rounded-lg text-yellow-100 hover:bg-yellow-600",title:"Kod źródłowy",target:"_blank"};function we(e,t,n,a,i,o){var c=Object(r["z"])("router-link"),s=Object(r["z"])("code-icon");return Object(r["t"])(),Object(r["f"])("div",me,[Object(r["i"])("div",be,[Object(r["i"])("div",pe,[Object(r["i"])("div",he,[Object(r["i"])("nav",ge,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(n.navigation,(function(t){return Object(r["t"])(),Object(r["f"])(c,{key:t.route,to:{name:t.route},class:["flex items-center p-4 rounded-lg text-yellow-100 hover:bg-gray-700",{"bg-gray-800":e.$route.meta.section===t.section}],title:t.name},{default:Object(r["H"])((function(){return[(Object(r["t"])(),Object(r["f"])(Object(r["A"])(t.icon),{class:"h-6 w-6","aria-hidden":"true"})),Object(r["i"])("span",ve,Object(r["C"])(t.name),1)]})),_:2},1032,["to","class","title"])})),128))])]),Object(r["i"])("div",je,[Object(r["i"])("a",ye,[Object(r["i"])(s,{class:"h-6 w-6","aria-hidden":"true"})])])])])])}var Oe={components:{MenuIcon:M["g"],CodeIcon:M["c"]},props:{navigation:Array}};Oe.render=we;var Ae=Oe,xe=[{name:"Str. główna",route:"home",icon:M["e"],section:"home"},{name:"Kalendarz",route:"calendar",icon:M["b"],section:"calendar"},{name:"Odwiedzone państwa",route:"countries",icon:M["d"],section:"countries"},{name:"Miasta",route:"cities",icon:M["h"],section:"cities"},{name:"Wycieczki",route:"trips",icon:M["l"],section:"trips"},{name:"Tagi browarów",route:"tags",icon:M["k"],section:"tags"},{name:"Statystyki",route:"statistics",icon:M["i"],section:"statistics"},{name:"O nas",route:"about",icon:M["j"],section:"about"}],ke={components:{brewmap:te,FullWidthSidebar:Ae,MobileWidthSidebar:fe,MenuIcon:M["g"]},setup:function(){var e=Object(r["w"])(!1),t=Object(r["w"])(xe);return{navigation:t,mobileMenuOpen:e}}};ke.render=B;var ze=ke;function Fe(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=t[0];return 1===e?r=t[1]:e%100===12||e%100===13||e%100===14?r=t[2]:e%10!==2&&e%10!==3&&e%10!==4||(r=t[3]),n?e+" "+r:r}var Ce={methods:{inflectBrewery:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Fe(e,["browarów","browar","browarów","browary"],t)},inflectCountry:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Fe(e,["państw","państwo","państw","państwa"],t)},inflectTrip:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Fe(e,["wycieczek","wycieczka","wycieczek","wycieczki"],t)},inflectCity:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Fe(e,["miast","miasto","miast","miasta"],t)},inflectTag:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Fe(e,["tagów","tag","tagów","tagi"],t)},inflectCountries:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Fe(e,["państwach","państwie","państwach","państwach"],t)},inflectVisitedBreweries:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Fe(e,["odwiedzonych browarów","odwiedzony browar","odwiedzonych browarów","odwiedzone browary"],t)},inflectVisitedTrips:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Fe(e,["odbytych wycieczek","odbyta wycieczka","odbytych wycieczek","odbyte wycieczki"],t)},inflectVisitedCities:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Fe(e,["zwiedzonych miast","zwiedzone miasto","zwiedzonych miast","zwiedzone miasta"],t)},inflectVisitedCountries:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Fe(e,["odwiedzonych państw","odwiedzone państwo","odwiedzonych państw","odwiedzone państwa"],t)}}},Be=Object(r["e"])(ze).use(j).use(p).mixin(Ce);fetch("/api/general.json?"+Date.now()).then((function(e){return e.json()})).then((function(e){Be.mount("#app"),j.commit("setCounters",e.counters),j.commit("setMapDefaultExtremes",e.extremes),j.commit("resetMap")}))},aac5:function(e,t,n){"use strict";n("b0c0");var r=n("7a23");function a(e,t,n,a,i,o){var c=Object(r["z"])("List");return Object(r["t"])(),Object(r["f"])(c,{entries:n.breweries,name:function(e){return e.name},alt:function(e){return e.location.city.name},flag:function(e){return e.location.country.symbol},route:function(e){return{name:"brewery",params:{slug:e.slug}}},labels:[function(e){return e.date},function(e){return"#"+e.id}]},null,8,["entries","name","alt","flag","route","labels"])}var i=n("2326"),o={components:{List:i["a"]},props:{breweries:Array}};o.render=a;t["a"]=o},d8fb:function(e,t,n){}});
//# sourceMappingURL=application.1627239646857.js.map