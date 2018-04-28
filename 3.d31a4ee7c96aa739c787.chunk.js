webpackJsonp([3],{"89i0":function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Injectable <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> HttpClient <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common/http\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Observable <span class="token punctuation" >}</span> from <span class="token string" >\'rxjs/Observable\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> forkJoin <span class="token punctuation" >}</span> from <span class="token string" >\'rxjs/observable/forkJoin\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Injectable</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >UserService</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >constructor</span><span class="token punctuation" >(</span><span class="token keyword" >private</span> http<span class="token punctuation" >:</span> HttpClient<span class="token punctuation" >)</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span>\n\n  <span class="token function" >getUserData</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >:</span> Observable<span class="token operator" >&lt;</span><span class="token keyword" >any</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token function" >forkJoin</span><span class="token punctuation" >(</span><span class="token punctuation" >[</span><span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >getUser</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >getFields</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >]</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n\n  <span class="token function" >getUser</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>http<span class="token punctuation" >.</span><span class="token keyword" >get</span><span class="token operator" >&lt;</span><span class="token punctuation" >{</span> firstName<span class="token punctuation" >:</span> <span class="token keyword" >string</span><span class="token punctuation" >,</span> lastName<span class="token punctuation" >:</span> <span class="token keyword" >string</span> <span class="token punctuation" >}</span><span class="token operator" >></span><span class="token punctuation" >(</span><span class="token string" >\'assets/json-powered/user.json\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n\n  <span class="token function" >getFields</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>http<span class="token punctuation" >.</span><span class="token keyword" >get</span><span class="token operator" >&lt;</span>FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token operator" >></span><span class="token punctuation" >(</span><span class="token string" >\'assets/json-powered/user-form.json\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},BSWA:function(n,s){n.exports='<span class="token punctuation" >{</span>\n  <span class="token string" >"firstName"</span><span class="token punctuation" >:</span> <span class="token string" >"Joan"</span><span class="token punctuation" >,</span>\n  <span class="token string" >"lastName"</span><span class="token punctuation" >:</span> <span class="token string" >"of Arc"</span>\n<span class="token punctuation" >}</span>\n'},J5mH:function(n,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=a("WT6e"),p=a("7DMc"),o=a("ItHS"),e=a("SALZ"),c=function(){function n(n){this.http=n}return n.prototype.getUserData=function(){return Object(e.a)([this.getUser(),this.getFields()])},n.prototype.getUser=function(){return this.http.get("assets/json-powered/user.json")},n.prototype.getFields=function(){return this.http.get("assets/json-powered/user-form.json")},n}(),l=function(){function n(n){var s=this;this.userService=n,this.form=new p.FormGroup({}),this.options={},this.userService.getUserData().subscribe(function(n){var a=n[1];s.model=n[0],s.fields=a})}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),u={examples:[{title:"JSON powered",description:"\n              This is an example of powering a form strictly by JSON. The common use case for this\n              would be to persist the form configuration in the database and then send the configuration\n              up to power the form. Notice that you can still use most features like <code>expressionProperties</code>\n              and <code>validators</code> even in a string form.\n            ",component:l,files:[{file:"app.component.html",content:a("OdyS"),filecontent:a("dQpZ")},{file:"app.component.ts",content:a("cwit"),filecontent:a("rZsp")},{file:"user.service.ts",content:a("89i0"),filecontent:a("U8Xu")},{file:"user.json",content:a("BSWA"),filecontent:a("SGmp")},{file:"user-form.json",content:a("kOVQ"),filecontent:a("qBlq")},{file:"app.module.ts",content:a("XW7k"),filecontent:a("fe2W")}]}]},i=function(){},r=a("INQx"),k=a("cPG/"),m=a("OGTa"),d=a("z4JO"),f=a("WhiG"),g=a("XPYZ"),y=a("CoID"),b=a("QMRz"),v=a("SSjb"),h=a("tGRr"),w=a("qwng"),F=a("UFNd"),C=a("PV5Z"),O=a("dI39"),N=a("S3hu"),x=a("UJsg"),M=a("OiLZ"),S=a("cIfd"),U=a("njCa"),j=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,12,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var p=!0,o=n.component;return"submit"===s&&(p=!1!==t["\u0275nov"](n,2).onSubmit(a)&&p),"reset"===s&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===s&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275bf"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[p.ControlContainer],null,null),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275eld"](6,0,null,null,5,"formly-form",[],null,null,null,N.b,N.a)),t["\u0275did"](7,966656,null,0,x.a,[M.a,S.a,U.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,x.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](9,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"])),(n()(),t["\u0275ted"](-1,0,["\n  "])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.model,a.form,a.fields,a.options)},function(n,s){n(s,0,0,t["\u0275nov"](s,4).ngClassUntouched,t["\u0275nov"](s,4).ngClassTouched,t["\u0275nov"](s,4).ngClassPristine,t["\u0275nov"](s,4).ngClassDirty,t["\u0275nov"](s,4).ngClassValid,t["\u0275nov"](s,4).ngClassInvalid,t["\u0275nov"](s,4).ngClassPending)})}var A=t["\u0275ccf"]("formly-app-example",l,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,D,j)),t["\u0275did"](1,49152,null,0,l,[c],null,null)],null,null)},{},{},[]),T=a("Xjw4"),R=a("9Sd6"),G=a("XHgV"),E=a("1T37"),J=a("+j5Y"),I=a("U/+3"),P=a("Mcof"),W=a("7u3n"),Z=a("6sdf"),B=a("z7Rf"),H=a("OE0E"),L=a("iLnc"),X=a("ApVT"),V=a("bkcK"),q=a("Uo70"),Q=a("6GVX"),z=a("gsbp"),K=a("EPl/"),Y=a("kJ/S"),_=a("j06o"),$=a("ZuzD"),nn=a("sqmn"),sn=a("255V"),an=a("ixPN"),tn=a("rK2e"),pn=function(){},on=a("bfOx"),en=a("fCQL"),cn=a("ByAW"),ln=a("9N4v"),un=a("ykPx"),rn=a("nwY2"),kn=a("TqLH"),mn=a("R2dV"),dn=a("JkuO"),fn=a("BILt"),gn=a("H69Y"),yn=a("j/TD"),bn=a("daWb"),vn=a("Dm6n"),hn=a("8F5j"),wn=a("WIBo"),Fn=a("MjWI");a.d(s,"ConfigModuleNgFactory",function(){return Cn});var Cn=t["\u0275cmf"](i,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,k.a,m.a,d.a,f.a,g.a,y.a,b.a,v.a,h.a,w.a,F.a,C.a,O.a,A]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,T.NgLocalization,T.NgLocaleLocalization,[t.LOCALE_ID,[2,T["\u0275a"]]]),t["\u0275mpd"](6144,R.b,null,[T.DOCUMENT]),t["\u0275mpd"](4608,R.c,R.c,[[2,R.b]]),t["\u0275mpd"](4608,G.a,G.a,[]),t["\u0275mpd"](5120,E.d,E.b,[[3,E.d],t.NgZone,G.a]),t["\u0275mpd"](5120,E.g,E.f,[[3,E.g],G.a,t.NgZone]),t["\u0275mpd"](4608,J.i,J.i,[E.d,E.g,t.NgZone,T.DOCUMENT]),t["\u0275mpd"](5120,J.e,J.j,[[3,J.e],T.DOCUMENT]),t["\u0275mpd"](4608,J.h,J.h,[E.g,T.DOCUMENT]),t["\u0275mpd"](5120,J.f,J.m,[[3,J.f],T.DOCUMENT]),t["\u0275mpd"](4608,J.c,J.c,[J.i,J.e,t.ComponentFactoryResolver,J.h,J.f,t.ApplicationRef,t.Injector,t.NgZone,T.DOCUMENT]),t["\u0275mpd"](5120,J.k,J.l,[J.c]),t["\u0275mpd"](4608,I.k,I.k,[G.a]),t["\u0275mpd"](4608,I.j,I.j,[I.k,t.NgZone,T.DOCUMENT]),t["\u0275mpd"](136192,I.d,I.b,[[3,I.d],T.DOCUMENT]),t["\u0275mpd"](5120,I.n,I.m,[[3,I.n],[2,I.l],T.DOCUMENT]),t["\u0275mpd"](5120,I.i,I.g,[[3,I.i],t.NgZone,G.a]),t["\u0275mpd"](4608,P.d,P.d,[G.a]),t["\u0275mpd"](135680,P.a,P.a,[P.d,t.NgZone]),t["\u0275mpd"](5120,W.b,W.c,[J.c]),t["\u0275mpd"](4608,Z.b,Z.b,[]),t["\u0275mpd"](4608,o.k,o.k,[]),t["\u0275mpd"](6144,o.i,null,[o.k]),t["\u0275mpd"](4608,o.g,o.g,[o.i]),t["\u0275mpd"](6144,o.b,null,[o.g]),t["\u0275mpd"](4608,o.f,o.j,[o.b,t.Injector]),t["\u0275mpd"](4608,o.c,o.c,[o.f]),t["\u0275mpd"](5120,B.d,B.a,[[3,B.d],[2,o.c],H.c,[2,T.DOCUMENT]]),t["\u0275mpd"](4608,L.a,L.a,[]),t["\u0275mpd"](4608,X.a,X.a,[]),t["\u0275mpd"](4608,o.h,o.n,[T.DOCUMENT,t.PLATFORM_ID,o.l]),t["\u0275mpd"](4608,o.o,o.o,[o.h,o.m]),t["\u0275mpd"](5120,o.a,function(n){return[n]},[o.o]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275i"],p["\u0275i"],[]),t["\u0275mpd"](4608,U.b,U.b,[U.a]),t["\u0275mpd"](4608,S.a,S.a,[]),t["\u0275mpd"](4608,M.a,M.a,[U.b,S.a]),t["\u0275mpd"](4608,c,c,[o.c]),t["\u0275mpd"](512,T.CommonModule,T.CommonModule,[]),t["\u0275mpd"](512,R.a,R.a,[]),t["\u0275mpd"](512,V.g,V.g,[]),t["\u0275mpd"](512,G.b,G.b,[]),t["\u0275mpd"](512,E.c,E.c,[]),t["\u0275mpd"](512,J.g,J.g,[]),t["\u0275mpd"](256,q.f,!0,[]),t["\u0275mpd"](512,q.n,q.n,[[2,q.f]]),t["\u0275mpd"](512,I.a,I.a,[]),t["\u0275mpd"](512,P.c,P.c,[]),t["\u0275mpd"](512,W.e,W.e,[]),t["\u0275mpd"](512,q.x,q.x,[]),t["\u0275mpd"](512,Z.c,Z.c,[]),t["\u0275mpd"](512,Q.i,Q.i,[]),t["\u0275mpd"](512,B.c,B.c,[]),t["\u0275mpd"](512,z.c,z.c,[]),t["\u0275mpd"](512,K.b,K.b,[]),t["\u0275mpd"](512,Y.h,Y.h,[]),t["\u0275mpd"](512,_.b,_.b,[]),t["\u0275mpd"](512,q.o,q.o,[]),t["\u0275mpd"](512,q.v,q.v,[]),t["\u0275mpd"](512,$.b,$.b,[]),t["\u0275mpd"](512,nn.c,nn.c,[]),t["\u0275mpd"](512,sn.a,sn.a,[]),t["\u0275mpd"](512,o.e,o.e,[]),t["\u0275mpd"](512,o.d,o.d,[]),t["\u0275mpd"](512,p["\u0275ba"],p["\u0275ba"],[]),t["\u0275mpd"](512,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](512,an.a,an.a,[]),t["\u0275mpd"](512,tn.a,tn.a,[]),t["\u0275mpd"](512,pn,pn,[]),t["\u0275mpd"](512,on.r,on.r,[[2,on.w],[2,on.o]]),t["\u0275mpd"](512,i,i,[]),t["\u0275mpd"](256,W.a,{showDelay:0,hideDelay:0,touchendHideDelay:1500},[]),t["\u0275mpd"](256,Y.a,!1,[]),t["\u0275mpd"](256,o.l,"XSRF-TOKEN",[]),t["\u0275mpd"](256,o.m,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,U.a,function(){return[{types:[{name:"formly-group",component:en.a}]},{types:[{name:"input",component:cn.a,wrappers:["fieldset","label"]},{name:"checkbox",component:ln.a,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:un.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:rn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:kn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:mn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:dn.a},{name:"description",component:fn.a},{name:"validation-message",component:gn.a},{name:"fieldset",component:yn.a},{name:"addons",component:bn.a}],manipulators:[{class:vn.a,method:"run"},{class:hn.a,method:"run"},{class:wn.a,method:"run"}]},{types:[{name:"formly-group",component:en.a}]},{}]},[]),t["\u0275mpd"](1024,on.m,function(){return[[{path:"",component:Fn.a,data:u}]]},[])])})},OdyS:function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},SGmp:function(n,s){n.exports='{\n  "firstName": "Joan",\n  "lastName": "of Arc"\n}\n'},U8Xu:function(n,s){n.exports="import { Injectable } from '@angular/core';\nimport { HttpClient } from '@angular/common/http';\nimport { Observable } from 'rxjs/Observable';\nimport { forkJoin } from 'rxjs/observable/forkJoin';\nimport { FormlyFieldConfig } from '@ngx-formly/core';\n\n@Injectable()\nexport class UserService {\n  constructor(private http: HttpClient) {}\n\n  getUserData(): Observable<any> {\n    return forkJoin([this.getUser(), this.getFields()]);\n  }\n\n  getUser() {\n    return this.http.get<{ firstName: string, lastName: string }>('assets/json-powered/user.json');\n  }\n\n  getFields() {\n    return this.http.get<FormlyFieldConfig[]>('assets/json-powered/user-form.json');\n  }\n}\n"},XW7k:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> HttpClientModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common/http\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> UserService <span class="token punctuation" >}</span> from <span class="token string" >\'./user.service\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    HttpClientModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  providers<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>UserService<span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},cwit:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> UserService <span class="token punctuation" >}</span> from <span class="token string" >\'./user.service\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  model<span class="token punctuation" >;</span>\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token keyword" >constructor</span><span class="token punctuation" >(</span><span class="token keyword" >private</span> userService<span class="token punctuation" >:</span> UserService<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>userService<span class="token punctuation" >.</span><span class="token function" >getUserData</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span><span class="token function" >subscribe</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span><span class="token punctuation" >[</span>model<span class="token punctuation" >,</span> fields<span class="token punctuation" >]</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span>model <span class="token operator" >=</span> model<span class="token punctuation" >;</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span>fields <span class="token operator" >=</span> fields<span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span>valid<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},dQpZ:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  </formly-form>\n</form>\n'},fe2W:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { HttpClientModule } from '@angular/common/http';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n\nimport { UserService } from './user.service';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    HttpClientModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n  providers: [UserService],\n})\nexport class AppModule { }\n"},kOVQ:function(n,s){n.exports='<span class="token punctuation" >[</span>\n  <span class="token punctuation" >{</span>\n    <span class="token string" >"key"</span><span class="token punctuation" >:</span> <span class="token string" >"firstName"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"type"</span><span class="token punctuation" >:</span> <span class="token string" >"input"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"templateOptions"</span><span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n      <span class="token string" >"label"</span><span class="token punctuation" >:</span> <span class="token string" >"First Name"</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span>\n    <span class="token string" >"key"</span><span class="token punctuation" >:</span> <span class="token string" >"lastName"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"type"</span><span class="token punctuation" >:</span> <span class="token string" >"input"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"templateOptions"</span><span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n      <span class="token string" >"label"</span><span class="token punctuation" >:</span> <span class="token string" >"Last Name"</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span>\n    <span class="token string" >"key"</span><span class="token punctuation" >:</span> <span class="token string" >"mac"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"type"</span><span class="token punctuation" >:</span> <span class="token string" >"input"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"templateOptions"</span><span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n      <span class="token string" >"label"</span><span class="token punctuation" >:</span> <span class="token string" >"Mac Address"</span><span class="token punctuation" >,</span>\n      <span class="token string" >"pattern"</span><span class="token punctuation" >:</span> <span class="token string" >"([0-9A-F]{2}[:-]){5}([0-9A-F]{2})"</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span>\n    <span class="token string" >"key"</span><span class="token punctuation" >:</span> <span class="token string" >"color"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"type"</span><span class="token punctuation" >:</span> <span class="token string" >"radio"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"templateOptions"</span><span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n      <span class="token string" >"label"</span><span class="token punctuation" >:</span> <span class="token string" >"Color Preference (try this out)"</span><span class="token punctuation" >,</span>\n      <span class="token string" >"options"</span><span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span>\n          <span class="token string" >"label"</span><span class="token punctuation" >:</span> <span class="token string" >"No Preference"</span><span class="token punctuation" >,</span>\n          <span class="token string" >"value"</span><span class="token punctuation" >:</span> <span class="token keyword" >null</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span>\n          <span class="token string" >"label"</span><span class="token punctuation" >:</span> <span class="token string" >"Green"</span><span class="token punctuation" >,</span>\n          <span class="token string" >"value"</span><span class="token punctuation" >:</span> <span class="token string" >"green"</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span>\n          <span class="token string" >"label"</span><span class="token punctuation" >:</span> <span class="token string" >"Blue"</span><span class="token punctuation" >,</span>\n          <span class="token string" >"value"</span><span class="token punctuation" >:</span> <span class="token string" >"blue"</span>\n        <span class="token punctuation" >}</span>\n      <span class="token punctuation" >]</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span>\n    <span class="token string" >"key"</span><span class="token punctuation" >:</span> <span class="token string" >"reason"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"type"</span><span class="token punctuation" >:</span> <span class="token string" >"textarea"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"templateOptions"</span><span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n      <span class="token string" >"label"</span><span class="token punctuation" >:</span> <span class="token string" >"Why?"</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token string" >"expressionProperties"</span><span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n      <span class="token string" >"templateOptions.label"</span><span class="token punctuation" >:</span> <span class="token string" >"\'Why did you choose \' + model.color + \'?\'"</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token string" >"hideExpression"</span><span class="token punctuation" >:</span> <span class="token string" >"!model.color"</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >]</span>\n'},qBlq:function(n,s){n.exports='[\n  {\n    "key": "firstName",\n    "type": "input",\n    "templateOptions": {\n      "label": "First Name"\n    }\n  },\n  {\n    "key": "lastName",\n    "type": "input",\n    "templateOptions": {\n      "label": "Last Name"\n    }\n  },\n  {\n    "key": "mac",\n    "type": "input",\n    "templateOptions": {\n      "label": "Mac Address",\n      "pattern": "([0-9A-F]{2}[:-]){5}([0-9A-F]{2})"\n    }\n  },\n  {\n    "key": "color",\n    "type": "radio",\n    "templateOptions": {\n      "label": "Color Preference (try this out)",\n      "options": [\n        {\n          "label": "No Preference",\n          "value": null\n        },\n        {\n          "label": "Green",\n          "value": "green"\n        },\n        {\n          "label": "Blue",\n          "value": "blue"\n        }\n      ]\n    }\n  },\n  {\n    "key": "reason",\n    "type": "textarea",\n    "templateOptions": {\n      "label": "Why?"\n    },\n    "expressionProperties": {\n      "templateOptions.label": "\'Why did you choose \' + model.color + \'?\'"\n    },\n    "hideExpression": "!model.color"\n  }\n]\n'},rZsp:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\nimport { UserService } from './user.service';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  options: FormlyFormOptions = {};\n\n  model;\n  fields: FormlyFieldConfig[];\n\n  constructor(private userService: UserService) {\n    this.userService.getUserData().subscribe(([model, fields]) => {\n      this.model = model;\n      this.fields = fields;\n    });\n  }\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"}});