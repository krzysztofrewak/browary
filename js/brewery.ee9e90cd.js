(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["brewery"],{d8af:function(e,t,r){"use strict";r.r(t);r("b0c0");var c=r("7a23"),n={key:0},a=Object(c["i"])("i",{class:"external link icon"},null,-1),l=Object(c["i"])("hr",{class:"pt-4"},null,-1),b={class:"flex flex-col items-center justify-center w-32 text-center text-2xl leading-tight"},i=Object(c["i"])("span",{class:"opacity-75 absolute text-4xl"}," / ",-1),o=Object(c["i"])("hr",{class:"py-4"},null,-1),u={key:0},s={class:"px-8 pb-8 text-sm"},j=Object(c["i"])("hr",{class:"py-4"},null,-1),O={class:"px-4 flex flex-wrap"},f=Object(c["i"])("i",{class:"hashtag icon"},null,-1);function d(e,t,r,d,y,m){var w=Object(c["z"])("page-header"),p=Object(c["z"])("router-link"),g=Object(c["z"])("infobox-item"),h=Object(c["z"])("infobox");return d.brewery.name?(Object(c["t"])(),Object(c["f"])("div",n,[Object(c["i"])(w,{title:d.brewery.name},null,8,["title"]),Object(c["i"])(h,null,{general:Object(c["H"])((function(){return[Object(c["i"])(p,{to:{name:"country",params:{slug:d.brewery.location.country.slug}}},{default:Object(c["H"])((function(){return[Object(c["i"])("i",{class:["shadow-lg giant flat flag",d.brewery.location.country.symbol]},null,2)]})),_:1},8,["to"])]})),list:Object(c["H"])((function(){return[Object(c["i"])(g,{label:"państwo"},{default:Object(c["H"])((function(){return[Object(c["i"])(p,{to:{name:"country",params:{slug:d.brewery.location.country.slug}}},{default:Object(c["H"])((function(){return[Object(c["h"])(Object(c["C"])(d.brewery.location.country.name),1)]})),_:1},8,["to"])]})),_:1}),Object(c["i"])(g,{label:"miasto"},{default:Object(c["H"])((function(){return[Object(c["i"])(p,{to:{name:"city",params:{slug:d.brewery.location.city.slug}}},{default:Object(c["H"])((function(){return[Object(c["h"])(Object(c["C"])(d.brewery.location.city.name),1)]})),_:1},8,["to"])]})),_:1}),Object(c["i"])(g,{label:"adres",value:d.brewery.location.address},null,8,["value"]),Object(c["i"])(g,{label:"GPS"},{default:Object(c["H"])((function(){return[Object(c["i"])("a",{href:m.getGoogleMapsUrl(d.brewery.location.coordinates),target:"_blank"},[a,Object(c["h"])(" "+Object(c["C"])(d.brewery.location.coordinates[1])+", "+Object(c["C"])(d.brewery.location.coordinates[0]),1)],8,["href"])]})),_:1})]})),_:1}),l,Object(c["i"])(h,null,{general:Object(c["H"])((function(){return[Object(c["i"])("div",b,[Object(c["i"])(p,{to:{name:"calendar.month",params:{year:d.brewery.date.year,month:d.brewery.date.month}},class:"z-10 mt-2 mr-12 bg-gray-100 p-1 rounded-md shadow"},{default:Object(c["H"])((function(){return[Object(c["h"])(Object(c["C"])(d.brewery.date.month),1)]})),_:1},8,["to"]),Object(c["i"])(p,{to:{name:"calendar.year",params:{year:d.brewery.date.year}},class:"z-10 -mt-4 ml-12 bg-gray-100 p-1 rounded-md shadow"},{default:Object(c["H"])((function(){return[Object(c["h"])(Object(c["C"])(d.brewery.date.year.substr(2)),1)]})),_:1},8,["to"]),i])]})),list:Object(c["H"])((function(){return[Object(c["i"])(g,{label:"odwiedzony browar",value:"#"+d.brewery.id},null,8,["value"]),Object(c["i"])(g,{label:"data",value:d.brewery.date.label},null,8,["value"]),Object(c["i"])(g,{label:"wycieczka"},{default:Object(c["H"])((function(){return[Object(c["i"])(p,{to:{name:"trip",params:{slug:d.brewery.trip.slug}}},{default:Object(c["H"])((function(){return[Object(c["h"])(Object(c["C"])(d.brewery.trip.name),1)]})),_:1},8,["to"])]})),_:1})]})),_:1}),o,d.brewery.note?(Object(c["t"])(),Object(c["f"])("div",u,[Object(c["i"])("p",s,Object(c["C"])(d.brewery.note),1),j])):Object(c["g"])("",!0),Object(c["i"])("div",O,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(d.brewery.tags,(function(e){return Object(c["t"])(),Object(c["f"])(p,{to:{name:"tag",params:{slug:e.slug}},class:"py-1 px-2 m-0.5 items-center rounded-md text-sm bg-gray-100 shadow",key:e.slug},{default:Object(c["H"])((function(){return[f,Object(c["h"])(" "+Object(c["C"])(e.name),1)]})),_:2},1032,["to"])})),128))])])):Object(c["g"])("",!0)}var y=r("1da1"),m=(r("96cf"),r("07ac"),r("6c02")),w=r("5502"),p=r("597a"),g=r("0f38"),h={class:"flex items-center justify-center p-4 mb-4"},x={class:"w-32 text-center"},v={class:"flex-1 text-sm divide-y divide-gray-100 px-4"};function H(e,t){return Object(c["t"])(),Object(c["f"])("div",h,[Object(c["i"])("div",x,[Object(c["y"])(e.$slots,"general")]),Object(c["i"])("div",v,[Object(c["y"])(e.$slots,"list")])])}const _={};_.render=H;var k=_,C={class:"flex items-center justify-center py-1"},z={class:"text-gray-500 mr-3"},G={class:"flex-1 text-right"},I={key:0};function S(e,t,r,n,a,l){return Object(c["t"])(),Object(c["f"])("div",C,[Object(c["i"])("span",z,Object(c["C"])(r.label),1),Object(c["i"])("span",G,[r.value?(Object(c["t"])(),Object(c["f"])("span",I,Object(c["C"])(r.value),1)):Object(c["y"])(e.$slots,"default",{key:1})])])}var $={props:{label:String,value:String}};$.render=S;var J=$,M={components:{InfoboxItem:J,Infobox:k,PageHeader:p["a"]},setup:function(){var e=Object(m["c"])(),t=Object(m["d"])(),r=Object(w["b"])(),n=Object(c["w"])({}),a=function(){var c=Object(y["a"])(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.next=2,g["a"].fetch(t,"breweries/"+e.params.slug,(function(e){e.tags=Object.values(e.tags),n.value=e,r.commit("selectBrewery",e)}));case 2:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return Object(c["q"])((function(){return a()})),Object(c["F"])((function(){return e.params.slug}),(function(){"brewery"===e.name&&a()})),{brewery:n}},methods:{getGoogleMapsUrl:function(e){return"https://www.google.com/maps/search/"+e[1]+","+e[0]}}};M.render=d;t["default"]=M}}]);
//# sourceMappingURL=brewery.ee9e90cd.js.map