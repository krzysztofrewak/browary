(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["statistics"],{1148:function(e,t,c){"use strict";var a=c("a691"),r=c("1d80");e.exports=function(e){var t=String(r(this)),c="",l=a(e);if(l<0||l==1/0)throw RangeError("Wrong number of repetitions");for(;l>0;(l>>>=1)&&(t+=t))1&l&&(c+=t);return c}},3181:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),r={class:"statistics"},l=Object(a["i"])("hr",{class:"my-4"},null,-1),s=Object(a["i"])("hr",{class:"mt-12 my-4"},null,-1),n=Object(a["i"])("hr",{class:"mt-8 my-4"},null,-1);function i(e,t,c,i,u,o){var b=Object(a["z"])("page-header"),j=Object(a["z"])("counter"),O=Object(a["z"])("counters"),f=Object(a["z"])("extremes"),d=Object(a["z"])("chart");return Object(a["t"])(),Object(a["f"])("div",r,[Object(a["i"])(b,{title:"Liczniki",header:"Ogólne podsumowanie danych"}),Object(a["i"])(O,null,{default:Object(a["H"])((function(){return[Object(a["i"])(j,{value:i.counters.breweries,label:e.inflectBrewery(i.counters.breweries,!1)},null,8,["value","label"]),Object(a["i"])(j,{value:i.counters.countries,label:e.inflectCountry(i.counters.countries,!1)},null,8,["value","label"]),Object(a["i"])(j,{value:i.counters.tags,label:e.inflectTag(i.counters.tags,!1)},null,8,["value","label"]),Object(a["i"])(j,{value:i.counters.trips,label:e.inflectCity(i.counters.trips,!1)},null,8,["value","label"]),Object(a["i"])(j,{value:i.counters.cities,label:e.inflectTrip(i.counters.cities,!1)},null,8,["value","label"])]})),_:1}),l,Object(a["i"])(f,{extremes:i.extremes},null,8,["extremes"]),s,Object(a["i"])(d,{values:i.weekdays,title:"Zwiedzanie a dni tygodnia",subtitle:"Dni tygodnia z największą liczbą odwiedzonych browarów"},null,8,["values"]),n,Object(a["i"])(d,{values:i.months,title:"Zwiedzanie a miesiące",subtitle:"Miesiące z największą liczbą odwiedzonych browarów"},null,8,["values"])])}var u=c("6c02"),o=c("0f38"),b=(c("b0c0"),{class:"extremes"}),j={class:"compass relative mt-8"},O={class:"w-full absolute text-xs"},f={key:0,class:"absolute top-0 right-0 w-1/2 -mt-4 p-4 pl-24 mr-10 bg-gray-100"},d=Object(a["i"])("div",{class:"opacity-75 py-1"},"północ:",-1),v={key:1,class:"absolute top-0 right-0 w-1/2 mt-34 p-4 px-12 text-right"},m=Object(a["i"])("div",{class:"opacity-75 py-1"},"wschód:",-1),x={key:2,class:"absolute top-0 left-0 w-1/2 mt-34 ml-10 p-4 pr-24 bg-gray-100 text-right"},g=Object(a["i"])("div",{class:"opacity-75 py-1"},"południe:",-1),p={key:3,class:"absolute top-0 left-0 w-1/2 px-12"},y=Object(a["i"])("div",{class:"opacity-75 py-1"},"zachód:",-1);function w(e,t,c,r,l,s){var n=Object(a["z"])("page-header"),i=Object(a["z"])("router-link"),u=Object(a["z"])("arrows-expand-icon");return Object(a["t"])(),Object(a["f"])("div",b,[Object(a["i"])(n,{title:"Róża wiatrów",header:"Najbardziej wysunięte w każdym kierunku browary"}),Object(a["i"])("div",j,[Object(a["i"])("div",O,[c.extremes.north?(Object(a["t"])(),Object(a["f"])("div",f,[d,Object(a["i"])("i",{class:["flat flag mr-1",c.extremes.north.location.country.symbol]},null,2),Object(a["i"])(i,{to:{name:"brewery",params:{slug:c.extremes.north.slug}}},{default:Object(a["H"])((function(){return[Object(a["h"])(Object(a["C"])(c.extremes.north.name),1)]})),_:1},8,["to"])])):Object(a["g"])("",!0),c.extremes.east?(Object(a["t"])(),Object(a["f"])("div",v,[m,Object(a["i"])("i",{class:["flat flag mr-1",c.extremes.east.location.country.symbol]},null,2),Object(a["i"])(i,{to:{name:"brewery",params:{slug:c.extremes.east.slug}}},{default:Object(a["H"])((function(){return[Object(a["h"])(Object(a["C"])(c.extremes.east.name),1)]})),_:1},8,["to"])])):Object(a["g"])("",!0),c.extremes.south?(Object(a["t"])(),Object(a["f"])("div",x,[g,Object(a["i"])("i",{class:["flat flag mr-1",c.extremes.south.location.country.symbol]},null,2),Object(a["i"])(i,{to:{name:"brewery",params:{slug:c.extremes.south.slug}}},{default:Object(a["H"])((function(){return[Object(a["h"])(Object(a["C"])(c.extremes.south.name),1)]})),_:1},8,["to"])])):Object(a["g"])("",!0),c.extremes.west?(Object(a["t"])(),Object(a["f"])("div",p,[y,Object(a["i"])("i",{class:["flat flag mr-1",c.extremes.west.location.country.symbol]},null,2),Object(a["i"])(i,{to:{name:"brewery",params:{slug:c.extremes.west.slug}}},{default:Object(a["H"])((function(){return[Object(a["h"])(Object(a["C"])(c.extremes.west.name),1)]})),_:1},8,["to"])])):Object(a["g"])("",!0)]),Object(a["i"])(u,{class:"mx-auto w-48 text-gray-300 transform rotate-45"})])])}var h=c("597a"),z=c("9510"),k={components:{PageHeader:h["a"],ArrowsExpandIcon:z["a"]},props:{extremes:Object}},C=c("d959"),F=c.n(C);const H=F()(k,[["render",w]]);var S=H,E=(c("d3b7"),c("ddb0"),c("b680"),{class:"w-full chart"}),N={key:0,class:"flex w-full px-8"},_={class:"text-gray-800 text-center text-xs"},I={class:"text-gray-500 text-center text-xs"},P={class:"m-1 p-1 mt-0 bg-gray-400 text-gray-800 text-center text-xs"};function R(e,t,c,r,l,s){var n=Object(a["z"])("page-header");return Object(a["t"])(),Object(a["f"])("div",E,[Object(a["i"])(n,{title:c.title,header:c.subtitle},null,8,["title","header"]),r.max>0?(Object(a["t"])(),Object(a["f"])("div",N,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(c.values,(function(e){return Object(a["t"])(),Object(a["f"])("div",{class:"flex-1 flex flex-col justify-end",key:e.label},[Object(a["i"])("div",_,Object(a["C"])(e.value),1),Object(a["i"])("div",I,Object(a["C"])((100*e.value/r.sum).toFixed(1))+"% ",1),Object(a["i"])("div",{class:"m-1 p-1 mb-0 bg-gray-200 hover:bg-gray-300 text-gray-800 text-center text-xs",style:"height: "+e.value*r.height/r.max+"px"},null,4),Object(a["i"])("div",P,Object(a["C"])(e.label),1)])})),128))])):Object(a["g"])("",!0)])}var T=c("b85c"),A={components:{PageHeader:h["a"]},props:{values:Array,title:String,subtitle:String},setup:function(e){var t=Object(a["w"])(150),c=Object(a["w"])(0),r=Object(a["w"])(0);return Object(a["F"])((function(){return e.values.length}),(function(){var t,a=Object(T["a"])(e.values);try{for(a.s();!(t=a.n()).done;){var l=t.value;l.value>=c.value&&(c.value=l.value),r.value+=l.value}}catch(s){a.e(s)}finally{a.f()}})),{height:t,max:c,sum:r}}};const J=F()(A,[["render",R]]);var M=J,Z=c("7a2a"),$=c("91b2"),q={components:{PageHeader:h["a"],Counter:$["a"],Counters:Z["a"],Chart:M,Extremes:S},setup:function(){var e=Object(u["d"])(),t=Object(a["w"])({}),c=Object(a["w"])({}),r=Object(a["w"])({}),l=Object(a["w"])({});return Object(a["q"])((function(){o["a"].fetch(e,"statistics",(function(e){t.value=e.extremes,c.value=e.months,r.value=e.weekdays,l.value=e.counters}))})),{extremes:t,weekdays:r,months:c,counters:l}}};const B=F()(q,[["render",i]]);t["default"]=B},"408a":function(e,t,c){var a=c("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=a(e))throw TypeError("Incorrect invocation");return+e}},"7a2a":function(e,t,c){"use strict";var a=c("7a23"),r={class:"px-4 my-4 text-center grid grid-cols-3 md:flex gap-4"};function l(e,t){return Object(a["t"])(),Object(a["f"])("div",r,[Object(a["y"])(e.$slots,"default")])}var s=c("d959"),n=c.n(s);const i={},u=n()(i,[["render",l]]);t["a"]=u},"91b2":function(e,t,c){"use strict";var a=c("7a23"),r={class:"flex-1 flex flex-col"},l={class:"text-3xl py-1 px-3"},s={key:0},n={class:"px-3 text-sm lowercase leading-tight text-gray-500"};function i(e,t,c,i,u,o){return Object(a["t"])(),Object(a["f"])("div",r,[Object(a["i"])("div",l,[c.value?(Object(a["t"])(),Object(a["f"])("span",s,Object(a["C"])(c.value),1)):Object(a["y"])(e.$slots,"default",{key:1})]),Object(a["i"])("div",n,Object(a["C"])(c.label),1)])}var u={props:{label:String,value:String}},o=c("d959"),b=c.n(o);const j=b()(u,[["render",i]]);t["a"]=j},b680:function(e,t,c){"use strict";var a=c("23e7"),r=c("a691"),l=c("408a"),s=c("1148"),n=c("d039"),i=1..toFixed,u=Math.floor,o=function(e,t,c){return 0===t?c:t%2===1?o(e,t-1,c*e):o(e*e,t/2,c)},b=function(e){var t=0,c=e;while(c>=4096)t+=12,c/=4096;while(c>=2)t+=1,c/=2;return t},j=function(e,t,c){var a=-1,r=c;while(++a<6)r+=t*e[a],e[a]=r%1e7,r=u(r/1e7)},O=function(e,t){var c=6,a=0;while(--c>=0)a+=e[c],e[c]=u(a/t),a=a%t*1e7},f=function(e){var t=6,c="";while(--t>=0)if(""!==c||0===t||0!==e[t]){var a=String(e[t]);c=""===c?a:c+s.call("0",7-a.length)+a}return c},d=i&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n((function(){i.call({})}));a({target:"Number",proto:!0,forced:d},{toFixed:function(e){var t,c,a,n,i=l(this),u=r(e),d=[0,0,0,0,0,0],v="",m="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return String(i);if(i<0&&(v="-",i=-i),i>1e-21)if(t=b(i*o(2,69,1))-69,c=t<0?i*o(2,-t,1):i/o(2,t,1),c*=4503599627370496,t=52-t,t>0){j(d,0,c),a=u;while(a>=7)j(d,1e7,0),a-=7;j(d,o(10,a,1),0),a=t-1;while(a>=23)O(d,1<<23),a-=23;O(d,1<<a),j(d,1,1),O(d,2),m=f(d)}else j(d,0,c),j(d,1<<-t,0),m=f(d)+s.call("0",u);return u>0?(n=m.length,m=v+(n<=u?"0."+s.call("0",u-n)+m:m.slice(0,n-u)+"."+m.slice(n-u))):m=v+m,m}})}}]);
//# sourceMappingURL=statistics.134f3987.js.map