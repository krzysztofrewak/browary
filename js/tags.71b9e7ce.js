(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tags"],{"04d1":function(e,t,r){var n=r("342f"),i=n.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},"1b6d":function(e,t,r){"use strict";r.r(t);r("b0c0");var n=r("7a23");function i(e,t,r,i,c,a){var o=Object(n["z"])("page-header"),u=Object(n["z"])("sorting-header"),l=Object(n["z"])("list");return Object(n["t"])(),Object(n["f"])("div",null,[Object(n["i"])(o,{title:"Tagi",header:"Z przynajmniej dwoma odwiedzonymi browarami"}),Object(n["i"])(u,{entries:i.tags,left:[{label:"tag",method:i.sortByName}],right:[{label:"liczba",method:i.sortByBreweries}]},null,8,["entries","left","right"]),Object(n["i"])(l,{entries:i.tags,name:function(e){return e.name},route:function(e){return{name:"tag",params:{slug:e.slug}}},labels:[function(t){return e.inflectBrewery(t.breweries)}]},null,8,["entries","name","route","labels"])])}r("4e82"),r("07ac");var c=r("6c02"),a=r("597a"),o=r("b444"),u=r("2326"),l=r("0f38"),s={components:{SortingHeader:o["a"],List:u["a"],PageHeader:a["a"]},setup:function(){var e=Object(c["d"])(),t=Object(n["w"])([]),r=function(e){e.sort((function(e,t){return e.name.localeCompare(t.name)}))},i=function(e){e.sort((function(e,t){return t.breweries>e.breweries}))};return Object(n["q"])((function(){l["a"].fetch(e,"tags",(function(e){t.value=Object.values(e)}))})),{tags:t,sortByName:r,sortByBreweries:i}}},f=r("d959"),d=r.n(f);const b=d()(s,[["render",i]]);t["default"]=b},"4e82":function(e,t,r){"use strict";var n=r("23e7"),i=r("1c0b"),c=r("7b0b"),a=r("50c4"),o=r("d039"),u=r("addb"),l=r("a640"),s=r("04d1"),f=r("d998"),d=r("2d00"),b=r("512c"),h=[],v=h.sort,g=o((function(){h.sort(void 0)})),j=o((function(){h.sort(null)})),p=l("sort"),O=!o((function(){if(d)return d<70;if(!(s&&s>3)){if(f)return!0;if(b)return b<603;var e,t,r,n,i="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)h.push({k:t+n,v:r})}for(h.sort((function(e,t){return t.v-e.v})),n=0;n<h.length;n++)t=h[n].k.charAt(0),i.charAt(i.length-1)!==t&&(i+=t);return"DGBEFHACIJK"!==i}})),m=g||!j||!p||!O,w=function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:String(t)>String(r)?1:-1}};n({target:"Array",proto:!0,forced:m},{sort:function(e){void 0!==e&&i(e);var t=c(this);if(O)return void 0===e?v.call(t):v.call(t,e);var r,n,o=[],l=a(t.length);for(n=0;n<l;n++)n in t&&o.push(t[n]);o=u(o,w(e)),r=o.length,n=0;while(n<r)t[n]=o[n++];while(n<l)delete t[n++];return t}})},"512c":function(e,t,r){var n=r("342f"),i=n.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},addb:function(e,t){var r=Math.floor,n=function(e,t){var a=e.length,o=r(a/2);return a<8?i(e,t):c(n(e.slice(0,o),t),n(e.slice(o),t),t)},i=function(e,t){var r,n,i=e.length,c=1;while(c<i){n=c,r=e[c];while(n&&t(e[n-1],r)>0)e[n]=e[--n];n!==c++&&(e[n]=r)}return e},c=function(e,t,r){var n=e.length,i=t.length,c=0,a=0,o=[];while(c<n||a<i)c<n&&a<i?o.push(r(e[c],t[a])<=0?e[c++]:t[a++]):o.push(c<n?e[c++]:t[a++]);return o};e.exports=n},b444:function(e,t,r){"use strict";r("d3b7"),r("ddb0");var n=r("7a23"),i={class:"px-4 pb-2 w-full flex text-gray-500 text-xs"},c={class:"divide-x divide-gray-200"},a={class:"divide-x divide-gray-200 w-full text-right"};function o(e,t,r,o,u,l){return Object(n["t"])(),Object(n["f"])("div",i,[Object(n["i"])("div",c,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(r.left,(function(e){return Object(n["t"])(),Object(n["f"])("div",{class:"inline cursor-pointer mr-2 pl-2",onClick:function(t){return e.method(r.entries)},key:e.label},Object(n["C"])(e.label),9,["onClick"])})),128))]),Object(n["i"])("div",a,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(r.right,(function(e){return Object(n["t"])(),Object(n["f"])("div",{class:"inline cursor-pointer mr-2 pl-2",onClick:function(t){return e.method(r.entries)},key:e.label},Object(n["C"])(e.label),9,["onClick"])})),128))])])}var u={props:{entries:Object,left:Array,right:Array},computed:{}},l=r("d959"),s=r.n(l);const f=s()(u,[["render",o]]);t["a"]=f},d998:function(e,t,r){var n=r("342f");e.exports=/MSIE|Trident/.test(n)}}]);
//# sourceMappingURL=tags.71b9e7ce.js.map