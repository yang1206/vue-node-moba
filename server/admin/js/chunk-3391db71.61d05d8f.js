(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3391db71"],{"057f":function(e,t,r){var a=r("c6b6"),n=r("fc6a"),s=r("241c").f,o=r("4dae"),i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(e){try{return s(e)}catch(t){return o(i)}};e.exports.f=function(e){return i&&"Window"==a(e)?l(e):s(n(e))}},"159b":function(e,t,r){var a=r("da84"),n=r("fdbc"),s=r("785a"),o=r("17c2"),i=r("9112"),l=function(e){if(e&&e.forEach!==o)try{i(e,"forEach",o)}catch(t){e.forEach=o}};for(var c in n)n[c]&&l(a[c]&&a[c].prototype);l(s)},1774:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"英雄")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[r("el-tabs",{attrs:{type:"border-card",value:"basic"}},[r("el-tab-pane",{attrs:{label:"基本信息",name:"basic"}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"称号"}},[r("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"头像"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.upLoadUrl,headers:e.getAuthHeader_mixin(),"show-file-list":!1,"on-success":function(t){return e.$set(e.model,"acatar",t.url)}}},[e.model.avatar?r("img",{staticClass:"avatar",attrs:{src:e.model.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"Banner"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.upLoadUrl,headers:e.getAuthHeader_mixin(),"show-file-list":!1,"on-success":function(t){return e.$set(e.model,"banner",t.url)}}},[e.model.banner?r("img",{staticClass:"avatar",attrs:{src:e.model.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"类型"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),e.model?r("el-form-item",{attrs:{label:"难度"}},[r("el-rate",{staticClass:"rate",staticStyle:{"margin-top":"0.7rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.difficult,callback:function(t){e.$set(e.model.scores,"difficult",t)},expression:"model.scores.difficult"}})],1):e._e(),r("el-form-item",{attrs:{label:"技能"}},[r("el-rate",{staticClass:"rate",staticStyle:{"margin-top":"0.7rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.skills,callback:function(t){e.$set(e.model.scores,"skills",t)},expression:"model.scores.skills"}})],1),r("el-form-item",{attrs:{label:"攻击"}},[r("el-rate",{staticClass:"rate",staticStyle:{"margin-top":"0.7rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.attack,callback:function(t){e.$set(e.model.scores,"attack",t)},expression:"model.scores.attack"}})],1),r("el-form-item",{attrs:{label:"生存"}},[r("el-rate",{staticClass:"rate",staticStyle:{"margin-top":"0.7rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.survive,callback:function(t){e.$set(e.model.scores,"survive",t)},expression:"model.scores.survive"}})],1),r("el-form-item",{attrs:{label:"顺风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.items1,callback:function(t){e.$set(e.model,"items1",t)},expression:"model.items1"}},e._l(e.items,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"逆风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.items2,callback:function(t){e.$set(e.model,"items2",t)},expression:"model.items2"}},e._l(e.items,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"使用技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.usageTips,callback:function(t){e.$set(e.model,"usageTips",t)},expression:"model.usageTips"}})],1),r("el-form-item",{attrs:{label:"对抗技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.battleTips,callback:function(t){e.$set(e.model,"battleTips",t)},expression:"model.battleTips"}})],1),r("el-form-item",{attrs:{label:"团战技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.teamTips,callback:function(t){e.$set(e.model,"teamTips",t)},expression:"model.teamTips"}})],1)],1),r("el-tab-pane",{attrs:{label:"技能",name:"skills"}},[r("el-button",{on:{click:function(t){return e.model.skills.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v("添加技能")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.skills,(function(t,a){return r("el-col",{key:a,attrs:{md:12}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:t.name,callback:function(r){e.$set(t,"name",r)},expression:"item.name"}})],1),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.upLoadUrl,"show-file-list":!1,headers:e.getAuthHeader_mixin(),"on-success":function(r){return e.$set(t,"icon",r.url)}}},[t.icon?r("img",{staticClass:"avatar",attrs:{src:t.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"冷却值"}},[r("el-input",{model:{value:t.delay,callback:function(r){e.$set(t,"delay",r)},expression:"item.delay"}})],1),r("el-form-item",{attrs:{label:"消耗"}},[r("el-input",{model:{value:t.cost,callback:function(r){e.$set(t,"cost",r)},expression:"item.cost"}})],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(r){e.$set(t,"description",r)},expression:"item.description"}})],1),r("el-form-item",{attrs:{label:"小提示"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.tips,callback:function(r){e.$set(t,"tips",r)},expression:"item.tips"}})],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.skills.splice(a,1)}}},[e._v("删除")])],1)],1)})),1)],1),r("el-tab-pane",{attrs:{label:"最佳搭档",name:"partners"}},[r("el-button",{on:{click:function(t){return e.model.partners.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v("添加英雄")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.partners,(function(t,a){return r("el-col",{key:a,attrs:{md:12}},[r("el-form-item",{attrs:{label:"英雄"}},[r("el-select",{attrs:{filterable:""},model:{value:t.hero,callback:function(r){e.$set(t,"hero",r)},expression:"item.hero"}},e._l(e.heroes,(function(e){return r("el-option",{key:e._id,attrs:{value:e._id,label:e.name}})})),1)],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(r){e.$set(t,"description",r)},expression:"item.description"}})],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.partners.splice(a,1)}}},[e._v("删除")])],1)],1)})),1)],1)],1),r("el-form-item",{staticStyle:{"margin-top":"1rem"}},[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},n=[],s=r("5530"),o=r("1da1"),i=(r("96cf"),r("b0c0"),r("4de4"),r("d3b7"),{name:"",components:{},data:function(){return{categories:[],items:[],heroes:[],model:{name:"",avator:"",skills:[],partners:[],scores:{difficult:0}}}},props:{id:{}},methods:{save:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.model.name){t.next=12;break}if(!e.id){t.next=7;break}return t.next=4,e.$http.put("rest/heroes/".concat(e.id),e.model);case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("rest/heroes",e.model);case 9:r=t.sent;case 10:r&&e.$message({type:"success",message:"保存成功"}),e.$router.push("/heroes/list");case 12:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes/".concat(e.id));case 2:r=t.sent,e.model=Object(s["a"])(Object(s["a"])({},e.model),r.data),console.log(e.model);case 5:case"end":return t.stop()}}),t)})))()},fetchCategories:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.categories=r.data.filter((function(e){return!!e.parent&&"英雄分类"===e.parent.name})),console.log(e.categories);case 5:case"end":return t.stop()}}),t)})))()},fetchItems:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/items");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchHeroes:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes");case 2:r=t.sent,e.heroes=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.id&&this.fetch(),this.fetchCategories(),this.fetchItems(),this.fetchHeroes()}}),l=i,c=r("2877"),u=Object(c["a"])(l,a,n,!1,null,"f8ef9156",null);t["default"]=u.exports},"17c2":function(e,t,r){"use strict";var a=r("b727").forEach,n=r("a640"),s=n("forEach");e.exports=s?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},"428f":function(e,t,r){var a=r("da84");e.exports=a},"4dae":function(e,t,r){var a=r("da84"),n=r("23cb"),s=r("07fa"),o=r("8418"),i=a.Array,l=Math.max;e.exports=function(e,t,r){for(var a=s(e),c=n(t,a),u=n(void 0===r?a:r,a),f=i(l(u-c,0)),m=0;c<u;c++,m++)o(f,m,e[c]);return f.length=m,f}},"4de4":function(e,t,r){"use strict";var a=r("23e7"),n=r("b727").filter,s=r("1dde"),o=s("filter");a({target:"Array",proto:!0,forced:!o},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4");function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},"746f":function(e,t,r){var a=r("428f"),n=r("1a2d"),s=r("e538"),o=r("9bf2").f;e.exports=function(e){var t=a.Symbol||(a.Symbol={});n(t,e)||o(t,e,{value:s.f(e)})}},8418:function(e,t,r){"use strict";var a=r("a04b"),n=r("9bf2"),s=r("5c6c");e.exports=function(e,t,r){var o=a(t);o in e?n.f(e,o,s(0,r)):e[o]=r}},a4d3:function(e,t,r){"use strict";var a=r("23e7"),n=r("da84"),s=r("d066"),o=r("2ba4"),i=r("c65b"),l=r("e330"),c=r("c430"),u=r("83ab"),f=r("4930"),m=r("d039"),d=r("1a2d"),p=r("e8b5"),b=r("1626"),v=r("861d"),h=r("3a9b"),g=r("d9b5"),y=r("825a"),w=r("7b0b"),x=r("fc6a"),k=r("a04b"),O=r("577e"),j=r("5c6c"),$=r("7c73"),_=r("df75"),S=r("241c"),P=r("057f"),C=r("7418"),E=r("06cf"),R=r("9bf2"),T=r("37e8"),D=r("d1e7"),A=r("f36a"),H=r("6eeb"),N=r("5692"),J=r("f772"),I=r("d012"),L=r("90e3"),U=r("b622"),z=r("e538"),F=r("746f"),B=r("d44e"),M=r("69f3"),Q=r("b727").forEach,W=J("hidden"),q="Symbol",G="prototype",K=U("toPrimitive"),V=M.set,X=M.getterFor(q),Y=Object[G],Z=n.Symbol,ee=Z&&Z[G],te=n.TypeError,re=n.QObject,ae=s("JSON","stringify"),ne=E.f,se=R.f,oe=P.f,ie=D.f,le=l([].push),ce=N("symbols"),ue=N("op-symbols"),fe=N("string-to-symbol-registry"),me=N("symbol-to-string-registry"),de=N("wks"),pe=!re||!re[G]||!re[G].findChild,be=u&&m((function(){return 7!=$(se({},"a",{get:function(){return se(this,"a",{value:7}).a}})).a}))?function(e,t,r){var a=ne(Y,t);a&&delete Y[t],se(e,t,r),a&&e!==Y&&se(Y,t,a)}:se,ve=function(e,t){var r=ce[e]=$(ee);return V(r,{type:q,tag:e,description:t}),u||(r.description=t),r},he=function(e,t,r){e===Y&&he(ue,t,r),y(e);var a=k(t);return y(r),d(ce,a)?(r.enumerable?(d(e,W)&&e[W][a]&&(e[W][a]=!1),r=$(r,{enumerable:j(0,!1)})):(d(e,W)||se(e,W,j(1,{})),e[W][a]=!0),be(e,a,r)):se(e,a,r)},ge=function(e,t){y(e);var r=x(t),a=_(r).concat(Oe(r));return Q(a,(function(t){u&&!i(we,r,t)||he(e,t,r[t])})),e},ye=function(e,t){return void 0===t?$(e):ge($(e),t)},we=function(e){var t=k(e),r=i(ie,this,t);return!(this===Y&&d(ce,t)&&!d(ue,t))&&(!(r||!d(this,t)||!d(ce,t)||d(this,W)&&this[W][t])||r)},xe=function(e,t){var r=x(e),a=k(t);if(r!==Y||!d(ce,a)||d(ue,a)){var n=ne(r,a);return!n||!d(ce,a)||d(r,W)&&r[W][a]||(n.enumerable=!0),n}},ke=function(e){var t=oe(x(e)),r=[];return Q(t,(function(e){d(ce,e)||d(I,e)||le(r,e)})),r},Oe=function(e){var t=e===Y,r=oe(t?ue:x(e)),a=[];return Q(r,(function(e){!d(ce,e)||t&&!d(Y,e)||le(a,ce[e])})),a};if(f||(Z=function(){if(h(ee,this))throw te("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?O(arguments[0]):void 0,t=L(e),r=function(e){this===Y&&i(r,ue,e),d(this,W)&&d(this[W],t)&&(this[W][t]=!1),be(this,t,j(1,e))};return u&&pe&&be(Y,t,{configurable:!0,set:r}),ve(t,e)},ee=Z[G],H(ee,"toString",(function(){return X(this).tag})),H(Z,"withoutSetter",(function(e){return ve(L(e),e)})),D.f=we,R.f=he,T.f=ge,E.f=xe,S.f=P.f=ke,C.f=Oe,z.f=function(e){return ve(U(e),e)},u&&(se(ee,"description",{configurable:!0,get:function(){return X(this).description}}),c||H(Y,"propertyIsEnumerable",we,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:Z}),Q(_(de),(function(e){F(e)})),a({target:q,stat:!0,forced:!f},{for:function(e){var t=O(e);if(d(fe,t))return fe[t];var r=Z(t);return fe[t]=r,me[r]=t,r},keyFor:function(e){if(!g(e))throw te(e+" is not a symbol");if(d(me,e))return me[e]},useSetter:function(){pe=!0},useSimple:function(){pe=!1}}),a({target:"Object",stat:!0,forced:!f,sham:!u},{create:ye,defineProperty:he,defineProperties:ge,getOwnPropertyDescriptor:xe}),a({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:ke,getOwnPropertySymbols:Oe}),a({target:"Object",stat:!0,forced:m((function(){C.f(1)}))},{getOwnPropertySymbols:function(e){return C.f(w(e))}}),ae){var je=!f||m((function(){var e=Z();return"[null]"!=ae([e])||"{}"!=ae({a:e})||"{}"!=ae(Object(e))}));a({target:"JSON",stat:!0,forced:je},{stringify:function(e,t,r){var a=A(arguments),n=t;if((v(t)||void 0!==e)&&!g(e))return p(t)||(t=function(e,t){if(b(n)&&(t=i(n,this,e,t)),!g(t))return t}),a[1]=t,o(ae,null,a)}})}if(!ee[K]){var $e=ee.valueOf;H(ee,K,(function(e){return i($e,this)}))}B(Z,q),I[W]=!0},a640:function(e,t,r){"use strict";var a=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&a((function(){r.call(null,t||function(){throw 1},1)}))}},b64b:function(e,t,r){var a=r("23e7"),n=r("7b0b"),s=r("df75"),o=r("d039"),i=o((function(){s(1)}));a({target:"Object",stat:!0,forced:i},{keys:function(e){return s(n(e))}})},dbb4:function(e,t,r){var a=r("23e7"),n=r("83ab"),s=r("56ef"),o=r("fc6a"),i=r("06cf"),l=r("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(e){var t,r,a=o(e),n=i.f,c=s(a),u={},f=0;while(c.length>f)r=n(a,t=c[f++]),void 0!==r&&l(u,t,r);return u}})},e439:function(e,t,r){var a=r("23e7"),n=r("d039"),s=r("fc6a"),o=r("06cf").f,i=r("83ab"),l=n((function(){o(1)})),c=!i||l;a({target:"Object",stat:!0,forced:c,sham:!i},{getOwnPropertyDescriptor:function(e,t){return o(s(e),t)}})},e538:function(e,t,r){var a=r("b622");t.f=a}}]);
//# sourceMappingURL=chunk-3391db71.61d05d8f.js.map