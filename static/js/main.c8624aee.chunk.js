(this["webpackJsonpreact-frontend-dev-portfolio"]=this["webpackJsonpreact-frontend-dev-portfolio"]||[]).push([[0],{34:function(e,t,a){e.exports=a(55)},39:function(e,t,a){},40:function(e,t,a){},43:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(14),c=a.n(r),i=(a(39),a(3)),l=a(4),o=a(6),m=a(5),u=a(24),d=a.n(u),h=(a(40),a(20)),p=a(26),f=a(29),E=a.n(f),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).titles=[],e.state={checked:!1},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(h.a)(e)),e}return Object(l.a)(a,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e=document.body,t="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",t)}},{key:"render",value:function(){var e=this;if(this.props.sharedData){var t=this.props.sharedData.name;this.titles=this.props.sharedData.titles.map((function(e){return[e.toUpperCase(),1500]})).flat()}var a=s.a.memo((function(){return s.a.createElement(p.a,{className:"title-styles",steps:e.titles,loop:50})}),(function(e,t){return!0}));return s.a.createElement("header",{id:"home",style:{height:window.innerHeight-140,display:"block"}},s.a.createElement("div",{className:"row aligner",style:{height:"100%"}},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",null,s.a.createElement("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),s.a.createElement("br",null),s.a.createElement("h1",{className:"mb-0"},s.a.createElement(p.a,{steps:[t],wrapper:"p"})),s.a.createElement("div",{className:"title-container"},s.a.createElement(a,null)),s.a.createElement(E.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#baaa80",onColor:"#353535",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:s.a.createElement("span",{className:"iconify","data-icon":"twemoji:owl","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:s.a.createElement("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"})))))}}]),a}(n.Component),b=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e=this.props.sharedBasicInfo.social.map((function(e){return s.a.createElement("span",{key:e.name,className:"m-4"},s.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{className:e.class})))}));return s.a.createElement("footer",null,s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"social-links"},e),s.a.createElement("div",{className:"copyright py-4 text-center"},s.a.createElement("div",{className:"container"},s.a.createElement("small",null,"Copyright \xa9"," ",this.props.sharedBasicInfo?this.props.sharedBasicInfo.name:"???")))))}}]),a}(n.Component),g=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e="images/"+this.props.sharedBasicInfo.image;if(this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.about,a=this.props.resumeBasicInfo.description_header,n=this.props.resumeBasicInfo.description;return s.a.createElement("section",{id:"about"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{style:{color:"black"}},s.a.createElement("span",null,t)),s.a.createElement("div",{className:"row center mx-auto mb-5"},s.a.createElement("div",{className:"col-md-4 mb-5 center"},s.a.createElement("div",{className:"polaroid"},s.a.createElement("span",{style:{cursor:"auto"}},s.a.createElement("img",{height:"250px",src:e})))),s.a.createElement("div",{className:"col-md-8 center"},s.a.createElement("div",{className:"col-md-10"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"},s.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",s.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",s.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),s.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"}},s.a.createElement("br",null),s.a.createElement("span",{className:"wave"},a," :) "),s.a.createElement("br",null),s.a.createElement("br",null),n)))))))}}]),a}(n.Component),y=(a(43),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.resumePublications&&this.props.sharedBasicInfo)var e=this.props.sharedBasicInfo.section_name.publications,t=this.props.resumePublications.map((function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement("td",null,s.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer"},e.title),s.a.createElement("br",null),s.a.createElement("span",{className:"pub-venue"},e.authors),s.a.createElement("br",null),s.a.createElement("span",{className:"pub-venue"},e.venue)),s.a.createElement("td",{className:"pub-year"},e.year))}));return s.a.createElement("section",{id:"publications"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"row"},s.a.createElement("h1",{className:"section-title",style:{color:"black"}},s.a.createElement("span",null,e))),s.a.createElement("div",{className:"row"},s.a.createElement("table",{className:"pub-table"},s.a.createElement("tbody",null,t)))))}}]),a}(n.Component)),N=a(15),k=(a(28),a(18)),w=(n.Component,a(58)),j=(a(49),a(50),a(51),a(52),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data){this.props.data.technologies;var e=this.props.data.title;console.log(this.props.data);var t=this.props.data.description;console.log(t);var a=this.props.data.url;if(console.log(t),t)var n=t.map((function(e,t){return s.a.createElement("li",{className:"list-inline-item mx-3",key:t},s.a.createElement("span",null,s.a.createElement("div",{className:"text-center"},s.a.createElement("i",{style:{fontSize:"300%"}},s.a.createElement("p",{className:"text-left",style:{fontSize:"30%"}},e)))))}))}return s.a.createElement(w.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),s.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},s.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"col-md-10 mx-auto"},s.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},e,a?s.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"link-href"},s.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})):null),s.a.createElement("div",{className:"col-md-12 text-left"}),s.a.createElement("ul",{className:"list-inline mx-auto"},n))))}}]),a}(n.Component)),x=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={deps:{},detailsModalShow:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;if(this.props.resumeProjects&&this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.projects,a=this.props.resumeProjects.map((function(t){return s.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:t.title,style:{cursor:"pointer"}},s.a.createElement("span",{className:"portfolio-item d-block"},s.a.createElement("div",{className:"foto",onClick:function(){return a=t,void e.setState({detailsModalShow:!0,deps:a});var a}},s.a.createElement("div",null,s.a.createElement("img",{src:t.images[0],alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),s.a.createElement("span",{className:"project-date"},t.startDate),s.a.createElement("br",null),s.a.createElement("p",{className:"project-title-settings mt-3"},t.title)))))}));return s.a.createElement("section",{id:"projects"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title",style:{color:"black"}},s.a.createElement("span",null,t)),s.a.createElement("div",{className:"col-md-12 mx-auto"},s.a.createElement("div",{className:"row mx-auto"},a)),s.a.createElement(j,{show:this.state.detailsModalShow,onHide:function(){return e.setState({detailsModalShow:!1})},data:this.state.deps})))}}]),a}(n.Component),O=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,t=this.props.sharedSkills.icons.map((function(e,t){return s.a.createElement("li",{className:"list-inline-item mx-3",key:t},s.a.createElement("span",null,s.a.createElement("div",{className:"text-center skills-tile"},s.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},s.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},e.name)))))}));return s.a.createElement("section",{id:"skills"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title"},s.a.createElement("span",{className:"text-white"},e))),s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},t))))}}]),a}(n.Component),I=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.resumeEducation&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.education,t=this.props.resumeEducation.map((function(e,t){e.school,e.title;var a=e.location;return s.a.createElement(N.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:s.a.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M113.5 281.2v85.3L256 448l142.5-81.5v-85.3L256 362.7l-142.5-81.5zM256 64L32 192l224 128 183.3-104.7v147.4H480V192L256 64z"})),key:t},s.a.createElement("div",{style:{textAlign:"left",marginBottom:"4px"}},s.a.createElement(k.a,{pill:!0,className:"main-badge mr-2 mb-2",key:t},a)),s.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.school),s.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},e.title))}));return s.a.createElement("section",{id:"resume",className:"pb-5"},s.a.createElement("div",{className:"col-md-12 mx-auto"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title",style:{color:"black"}},s.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},e)))),s.a.createElement("div",{className:"col-md-8 mx-auto"},s.a.createElement(N.VerticalTimeline,null,t,s.a.createElement(N.VerticalTimelineElement,{iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:s.a.createElement("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})}))))}}]),a}(n.Component),B=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).state={foo:"bar",resumeData:{},sharedData:{}},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.loadSharedData(),this.loadResumeFromPath("res_primaryLanguage.json")}},{key:"loadResumeFromPath",value:function(e){d.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"loadSharedData",value:function(){d.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(v,{sharedData:this.state.sharedData.basic_info}),s.a.createElement(g,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),this.state.resumeData.publications?s.a.createElement(y,{resumePublications:this.state.resumeData.publications,sharedBasicInfo:this.state.resumeData.basic_info}):null,s.a.createElement(x,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(I,{resumeEducation:this.state.resumeData.education,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(O,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(b,{sharedBasicInfo:this.state.sharedData.basic_info}))}}]),a}(n.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(54);window.$primaryLanguage="en",window.$secondaryLanguage="pl",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",c.a.render(s.a.createElement(B,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/page",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/page","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.c8624aee.chunk.js.map