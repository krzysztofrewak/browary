(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tags"],{"04d1":function(e,t,r){var n=r("342f"),i=n.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},"1b6d":function(e,t,r){"use strict";r.r(t);r("b0c0");var n=r("7a23");function i(e,t,r,i,a,c){var o=Object(n["D"])("page-header"),u=Object(n["D"])("sorting-header"),s=Object(n["D"])("list");return Object(n["x"])(),Object(n["h"])("div",null,[Object(n["k"])(o,{title:"Tagi",header:"Z przynajmniej dwoma odwiedzonymi browarami"}),Object(n["k"])(u,{entries:i.tags,left:[{label:"tag",method:i.sortByName}],right:[{label:"liczba",method:i.sortByBreweries}]},null,8,["entries","left","right"]),Object(n["k"])(s,{entries:i.tags,name:function(e){return e.name},route:function(e){return{name:"tag",params:{slug:e.slug}}},labels:[function(t){return e.inflectBrewery(t.breweries)}]},null,8,["entries","name","route","labels"])])}r("4e82"),r("07ac");var a=r("6c02"),c=r("597a"),o=r("b444"),u=r("2326"),s=r("0f38"),l={components:{SortingHeader:o["a"],List:u["a"],PageHeader:c["a"]},setup:function(){var e=Object(a["d"])(),t=Object(n["A"])([]),r=function(e){e.sort((function(e,t){return e.name.localeCompare(t.name)}))},i=function(e){e.sort((function(e,t){return t.breweries>e.breweries}))};return Object(n["u"])((function(){s["a"].fetch(e,"tags",(function(e){t.value=Object.values(e)}))})),{tags:t,sortByName:r,sortByBreweries:i}}},d=r("6b0d"),f=r.n(d);const b=f()(l,[["render",i]]);t["default"]=b},"4e82":function(e,t,r){"use strict";var n=r("23e7"),i=r("e330"),a=r("59ed"),c=r("7b0b"),o=r("07fa"),u=r("577e"),s=r("d039"),l=r("addb"),d=r("a640"),f=r("04d1"),b=r("d998"),h=r("2d00"),v=r("512c"),g=[],j=i(g.sort),p=i(g.push),O=s((function(){g.sort(void 0)})),m=s((function(){g.sort(null)})),w=d("sort"),x=!s((function(){if(h)return h<70;if(!(f&&f>3)){if(b)return!0;if(v)return v<603;var e,t,r,n,i="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)g.push({k:t+n,v:r})}for(g.sort((function(e,t){return t.v-e.v})),n=0;n<g.length;n++)t=g[n].k.charAt(0),i.charAt(i.length-1)!==t&&(i+=t);return"DGBEFHACIJK"!==i}})),k=O||!m||!w||!x,y=function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:u(t)>u(r)?1:-1}};n({target:"Array",proto:!0,forced:k},{sort:function(e){void 0!==e&&a(e);var t=c(this);if(x)return void 0===e?j(t):j(t,e);var r,n,i=[],u=o(t);for(n=0;n<u;n++)n in t&&p(i,t[n]);l(i,y(e)),r=i.length,n=0;while(n<r)t[n]=i[n++];while(n<u)delete t[n++];return t}})},"512c":function(e,t,r){var n=r("342f"),i=n.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},addb:function(e,t,r){var n=r("4dae"),i=Math.floor,a=function(e,t){var r=e.length,u=i(r/2);return r<8?c(e,t):o(e,a(n(e,0,u),t),a(n(e,u),t),t)},c=function(e,t){var r,n,i=e.length,a=1;while(a<i){n=a,r=e[a];while(n&&t(e[n-1],r)>0)e[n]=e[--n];n!==a++&&(e[n]=r)}return e},o=function(e,t,r,n){var i=t.length,a=r.length,c=0,o=0;while(c<i||o<a)e[c+o]=c<i&&o<a?n(t[c],r[o])<=0?t[c++]:r[o++]:c<i?t[c++]:r[o++];return e};e.exports=a},b444:function(e,t,r){"use strict";r("d3b7"),r("ddb0");var n=r("7a23"),i={class:"px-4 pb-2 w-full flex text-gray-500 text-xs"},a={class:"divide-x divide-gray-200"},c=["onClick"],o={class:"divide-x divide-gray-200 w-full text-right"},u=["onClick"];function s(e,t,r,s,l,d){return Object(n["x"])(),Object(n["h"])("div",i,[Object(n["i"])("div",a,[(Object(n["x"])(!0),Object(n["h"])(n["a"],null,Object(n["B"])(r.left,(function(e){return Object(n["x"])(),Object(n["h"])("div",{class:"inline cursor-pointer mr-2 pl-2",onClick:function(t){return e.method(r.entries)},key:e.label},Object(n["G"])(e.label),9,c)})),128))]),Object(n["i"])("div",o,[(Object(n["x"])(!0),Object(n["h"])(n["a"],null,Object(n["B"])(r.right,(function(e){return Object(n["x"])(),Object(n["h"])("div",{class:"inline cursor-pointer mr-2 pl-2",onClick:function(t){return e.method(r.entries)},key:e.label},Object(n["G"])(e.label),9,u)})),128))])])}var l={props:{entries:Object,left:Array,right:Array},computed:{}},d=r("6b0d"),f=r.n(d);const b=f()(l,[["render",s]]);t["a"]=b},d998:function(e,t,r){var n=r("342f");e.exports=/MSIE|Trident/.test(n)}}]);
//# sourceMappingURL=tags.a8f04c64.js.map