(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["calendar"],{"00cc":function(e,t,a){"use strict";var c=a("7a23"),r={class:"flex flex-grow items-center justify-between px-1"},l={key:0,class:"opacity-50"},s={key:0,class:"text-gray-500 text-xs text-center"};function n(e,t,a,n,b,i){var o=Object(c["z"])("router-link");return Object(c["t"])(),Object(c["f"])("div",r,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(a.row,(function(e){return Object(c["t"])(),Object(c["f"])(o,{key:e.slug,to:{name:"calendar.month",params:{year:a.year,month:e.slug}}},{default:Object(c["H"])((function(){return[Object(c["i"])("div",{class:["w-6 h-6 border text-xs flex items-center justify-center",i.calculateBackgroundColor(e.value,e.slug)]},[e.value?(Object(c["t"])(),Object(c["f"])("span",l,Object(c["C"])(e.value),1)):Object(c["g"])("",!0)],2),a.showMonths?(Object(c["t"])(),Object(c["f"])("div",s,Object(c["C"])(e.slug),1)):Object(c["g"])("",!0)]})),_:2},1032,["to"])})),128))])}a("a9e3");var b={props:{row:Array,maxValue:Number,year:String,showMonths:{type:Boolean,default:!1}},methods:{calculateBackgroundColor:function(e,t){if(parseInt(this.year)>=(new Date).getFullYear()&&parseInt(t)>(new Date).getMonth()+1)return"bg-white";if(e===this.maxValue)return"bg-gray-900 text-white";for(var a=[{threshold:.85,class:"bg-gray-800 text-white"},{threshold:.66,class:"bg-gray-700 text-white"},{threshold:.5,class:"bg-gray-600 text-white"},{threshold:.33,class:"bg-gray-500"},{threshold:.15,class:"bg-gray-400"}],c=0,r=a;c<r.length;c++){var l=r[c];if(e>=this.maxValue*l.threshold)return l.class}return e>=1?"bg-gray-300":"bg-gray-100"}}},i=a("d959"),o=a.n(i);t["a"]=o()(b,[["render",n]])},c96c:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),r={class:"calendar"},l={class:"px-4"},s=Object(c["i"])("hr",{class:"my-4"},null,-1),n={class:"m-4"},b={class:"w-full text-xs leading-loose divide-y divide-gray-100 text-left"},i=Object(c["i"])("thead",null,[Object(c["i"])("tr",{class:"py-2"},[Object(c["i"])("th",{class:"w-1/6"},"rok"),Object(c["i"])("th",{class:"w-1/6 font-normal"},"browarów"),Object(c["i"])("th",{class:"w-1/6 font-normal"},"państw"),Object(c["i"])("th",{class:"w-1/6 font-normal"},"wycieczek"),Object(c["i"])("th",{class:"w-1/6 font-normal"},"miast")])],-1),o={class:"divide-y divide-gray-100"};function u(e,t,a,u,j,O){var d=Object(c["z"])("page-header"),f=Object(c["z"])("router-link"),y=Object(c["z"])("year-row");return Object(c["t"])(),Object(c["f"])("div",r,[Object(c["i"])(d,{title:"Kalendarz",header:"Im ciemniej, tym więcej"}),Object(c["i"])("div",l,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(u.years,(function(e){return Object(c["t"])(),Object(c["f"])("div",{class:"flex items-center justify-between p-1",key:e.label},[Object(c["i"])(f,{to:{name:"calendar.year",params:{year:e.label}},class:"pr-3 text-gray-500 text-xs"},{default:Object(c["H"])((function(){return[Object(c["h"])(Object(c["C"])(e.label),1)]})),_:2},1032,["to"]),Object(c["i"])(y,{row:e.items,"max-value":u.maxValue,year:e.label},null,8,["row","max-value","year"])])})),128))]),s,Object(c["i"])(d,{title:"Podsumowanie",header:"Zaliczone browary, państwa, wycieczki i miasta"}),Object(c["i"])("div",n,[Object(c["i"])("table",b,[i,Object(c["i"])("tbody",o,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(u.years,(function(e){return Object(c["t"])(),Object(c["f"])("tr",{key:e.label,class:"odd:bg-gray-50"},[Object(c["i"])("td",null,[Object(c["i"])(f,{to:{name:"calendar.year",params:{year:e.label}}},{default:Object(c["H"])((function(){return[Object(c["h"])(Object(c["C"])(e.label),1)]})),_:2},1032,["to"])]),Object(c["i"])("td",null,Object(c["C"])(e.counters.breweries),1),Object(c["i"])("td",null,Object(c["C"])(e.counters.countries),1),Object(c["i"])("td",null,Object(c["C"])(e.counters.trips),1),Object(c["i"])("td",null,Object(c["C"])(e.counters.cities),1)])})),128))])])])])}var j=a("597a"),O=a("00cc"),d=a("6c02"),f=a("0f38"),y={components:{YearRow:O["a"],PageHeader:j["a"]},setup:function(){var e=Object(d["d"])(),t=Object(c["w"])(0),a=Object(c["w"])([]),r=Object(c["w"])("year");return Object(c["q"])((function(){f["a"].fetch(e,"calendar",(function(e){t.value=e.maxValue,a.value=e.groups.reverse()}))})),{years:a,maxValue:t,tableOrder:r}},methods:{reorder:function(e){this.tableOrder=e}}},h=a("d959"),w=a.n(h);t["default"]=w()(y,[["render",u]])}}]);
//# sourceMappingURL=calendar.fed026e2.js.map