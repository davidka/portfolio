(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{140:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(4),a=n.n(r),l=n(150),c=(n(148),n(7)),s=n.n(c),u=(n(146),n(142)),f=n.n(u),d=n(149),p=n(144),m=n(141),h=n(143);function g(){var t=f()(["font-size: 30px;"]);return g=function(){return t},t}function b(){var t=f()(["font-size: 30px;"]);return b=function(){return t},t}function v(){var t=f()(["font-size: 40px;"]);return v=function(){return t},t}function x(){var t=f()(["font-size: 40px;"]);return x=function(){return t},t}function y(){var t=f()(["font-size: 40px;"]);return y=function(){return t},t}function w(){var t=f()(["font-size: 50px;"]);return w=function(){return t},t}function _(){var t=f()(["font-size: 60px;"]);return _=function(){return t},t}function C(){var t=f()(["font-size: 70px;"]);return C=function(){return t},t}function z(){var t=f()(["font-size: ",";"]);return z=function(){return t},t}function k(){var t=f()(["font-size: ",";"]);return k=function(){return t},t}function E(){var t=f()(["padding-top: 150px;"]);return E=function(){return t},t}var I=Object(m.c)(h.e).withConfig({displayName:"hero__HeroContainer",componentId:"sc-17z9avy-0"})(["",";flex-direction:column;align-items:flex-start;min-height:100vh;",";div{width:100%;}"],h.g.flexCenter,h.f.tablet(E())),j=m.c.h1.withConfig({displayName:"hero__Hi",componentId:"sc-17z9avy-1"})(["color:",";margin:0 0 20px 3px;font-size:",";font-family:",";font-weight:normal;",";",";"],h.h.colors.green,h.h.fontSizes.medium,h.h.fonts.SourceCodePro,h.f.desktop(k(),h.h.fontSizes.small),h.f.tablet(z(),h.h.fontSizes.smallish)),S=m.c.h2.withConfig({displayName:"hero__Name",componentId:"sc-17z9avy-2"})(["font-size:80px;line-height:1.1;margin:0;",";",";",";",";"],h.f.desktop(C()),h.f.tablet(_()),h.f.phablet(w()),h.f.phone(y())),N=m.c.h3.withConfig({displayName:"hero__Subtitle",componentId:"sc-17z9avy-3"})(["font-size:50px;line-height:1.1;color:",";",";",";",";",";"],h.h.colors.slate,h.f.desktop(x()),h.f.tablet(v()),h.f.phablet(b()),h.f.phone(g())),T=m.c.div.withConfig({displayName:"hero__Blurb",componentId:"sc-17z9avy-4"})(["margin-top:25px;width:50%;max-width:500px;a{",";}"],h.g.inlineLink),A=m.c.a.withConfig({displayName:"hero__EmailLink",componentId:"sc-17z9avy-5"})(["",";font-size:",";margin-top:50px;"],h.g.bigButton,h.h.fontSizes.smallish),O=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this).state={isMounted:!1},e}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;setTimeout(function(){return t.setState({isMounted:!0})},1e3)},n.render=function(){var t=this.props.data,e=this.state.isMounted,n=t[0].node,o=n.frontmatter,r=n.html,a=[function(){return i.a.createElement(j,{style:{transitionDelay:"100ms"}},o.title)},function(){return i.a.createElement(S,{style:{transitionDelay:"200ms"}},o.name,".")},function(){return i.a.createElement(N,{style:{transitionDelay:"300ms"}},o.subtitle)},function(){return i.a.createElement(T,{style:{transitionDelay:"400ms"},dangerouslySetInnerHTML:{__html:r}})},function(){return i.a.createElement("div",{style:{transitionDelay:"500ms"}},i.a.createElement(A,{href:"mailto:"+p.email},"Get In Touch"))}];return i.a.createElement(I,null,i.a.createElement(d.TransitionGroup,null,e&&a.map(function(t,e){return i.a.createElement(d.CSSTransition,{key:e,classNames:"fadeup",timeout:3e3},t)})))},e}(o.Component);O.propTypes={data:a.a.array.isRequired};var H=O,M=n(207),D=n.n(M),L=n(152);function R(){var t=f()(["width: 70%;"]);return R=function(){return t},t}function P(){var t=f()(["margin: 60px auto 0;"]);return P=function(){return t},t}function q(){var t=f()(["width: 100%;"]);return q=function(){return t},t}function G(){var t=f()(["display: block;"]);return G=function(){return t},t}var J=Object(m.c)(h.e).withConfig({displayName:"about__AboutContainer",componentId:"sc-1wexrvx-0"})(["position:relative;"]),W=m.c.div.withConfig({displayName:"about__FlexContainer",componentId:"sc-1wexrvx-1"})(["",";align-items:flex-start;",";"],h.g.flexBetween,h.f.tablet(G())),B=m.c.div.withConfig({displayName:"about__ContentContainer",componentId:"sc-1wexrvx-2"})(["width:60%;max-width:480px;",";a{",";}"],h.f.tablet(q()),h.g.inlineLink),F=m.c.ul.withConfig({displayName:"about__SkillsContainer",componentId:"sc-1wexrvx-3"})(["display:grid;grid-template-columns:repeat(2,minmax(140px,200px));overflow:hidden;margin-top:20px;"]),X=m.c.li.withConfig({displayName:"about__Skill",componentId:"sc-1wexrvx-4"})(["position:relative;margin-bottom:10px;padding-left:20px;font-family:",";font-size:",";color:",";&:before{content:'▹';position:absolute;left:0;color:",";font-size:",";line-height:12px;}"],h.h.fonts.SourceCodePro,h.h.fontSizes.smallish,h.h.colors.slate,h.h.colors.green,h.h.fontSizes.small),Y=m.c.div.withConfig({displayName:"about__PicContainer",componentId:"sc-1wexrvx-5"})(["position:relative;width:40%;max-width:300px;margin-left:60px;",";",";"],h.f.tablet(P()),h.f.phablet(R())),K=Object(m.c)(D.a).withConfig({displayName:"about__Avatar",componentId:"sc-1wexrvx-6"})(["position:relative;mix-blend-mode:multiply;filter:grayscale(100%) contrast(1);border-radius:",";transition:",";"],h.h.borderRadius,h.h.transition),Q=m.c.div.withConfig({displayName:"about__AvatarContainer",componentId:"sc-1wexrvx-7"})(["width:100%;position:relative;border-radius:",";background-color:",";margin-left:-20px;&:hover,&:focus{background:transparent;&:after{top:15px;left:15px;}","{filter:none;mix-blend-mode:normal;}}&:before,&:after{content:'';display:block;position:absolute;width:100%;height:100%;border-radius:",";transition:",";}&:before{top:0;left:0;right:0;bottom:0;background-color:",";mix-blend-mode:screen;}&:after{border:2px solid ",";top:20px;left:20px;z-index:-1;}"],h.h.borderRadius,h.h.colors.green,K,h.h.borderRadius,h.h.transition,h.h.colors.navy,h.h.colors.green),U=function(t){function e(){return t.apply(this,arguments)||this}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){Object(L.a)().reveal(this.about,Object(p.srConfig)())},n.render=function(){var t=this,e=this.props.data[0].node,n=e.frontmatter,o=e.html,r=n.title,a=n.skills,l=n.avatar;return i.a.createElement(J,{id:"about",ref:function(e){return t.about=e}},i.a.createElement(h.b,null,r),i.a.createElement(W,null,i.a.createElement(B,null,i.a.createElement("p",{dangerouslySetInnerHTML:{__html:o}}),i.a.createElement(F,null,a&&a.map(function(t,e){return i.a.createElement(X,{key:e},t)}))),i.a.createElement(Y,null,i.a.createElement(Q,null,i.a.createElement(K,{fluid:l.childImageSharp.fluid,alt:"Avatar"})))))},e}(o.Component);U.propTypes={data:a.a.array.isRequired};var V=U;n(163);function Z(){var t=f()(["padding-left: 0;"]);return Z=function(){return t},t}function $(){var t=f()(["padding-left: 20px;"]);return $=function(){return t},t}function tt(){var t=f()(["\n    width: 100%;\n    max-width: ","px;\n    height: 2px;\n    top: auto;\n    bottom: 0;\n    transform: translateX(\n      ","px\n    );\n  "]);return tt=function(){return t},t}function et(){var t=f()(["\n    ",";\n    padding: 0 15px;\n    text-align: center;\n    border-left: 0;\n    border-bottom: 2px solid ",";\n    /* min-width: 120px; */\n    /* overflow-x: hidden; */\n    /* width: auto; */\n  "]);return et=function(){return t},t}function nt(){var t=f()(["padding: 0 15px 2px;"]);return nt=function(){return t},t}function ot(){var t=f()(["\n    display: flex;\n    margin-bottom: 30px;\n    width: 100%;\n    overflow-x: scroll;\n  "]);return ot=function(){return t},t}function it(){var t=f()(["display: block;"]);return it=function(){return t},t}var rt=Object(m.c)(h.e).withConfig({displayName:"jobs__JobsContainer",componentId:"sc-13kygjg-0"})(["position:relative;"]),at=m.c.div.withConfig({displayName:"jobs__TabsContainer",componentId:"sc-13kygjg-1"})(["display:flex;align-items:flex-start;position:relative;",";"],h.f.thone(it())),lt=m.c.div.withConfig({displayName:"jobs__Tabs",componentId:"sc-13kygjg-2"})(["display:block;position:relative;width:max-content;z-index:3;",";"],h.f.thone(ot())),ct=m.c.button.withConfig({displayName:"jobs__Tab",componentId:"sc-13kygjg-3"})(["",";display:flex;align-items:center;width:100%;background-color:transparent;height:","px;padding:0 20px 2px;transition:",";border-left:2px solid ",";text-align:left;white-space:nowrap;font-family:",";font-size:",";color:",";",";",";&:hover,&:focus{background-color:",";}"],h.g.link,h.h.tabHeight,h.h.transition,h.h.colors.darkGrey,h.h.fonts.SourceCodePro,h.h.fontSizes.smallish,function(t){return t.isActive?h.h.colors.green:h.h.colors.lightGrey},h.f.tablet(nt()),h.f.thone(et(),h.g.flexCenter,h.h.colors.darkGrey),h.h.colors.lightNavy),st=m.c.span.withConfig({displayName:"jobs__Highlighter",componentId:"sc-13kygjg-4"})(["display:block;background:",";width:2px;height:","px;border-radius:",";position:absolute;top:0;left:0;transition:",";transition-delay:0.1s;z-index:10;transform:translateY( ","px );",";"],h.h.colors.green,h.h.tabHeight,h.h.borderRadius,h.h.transition,function(t){return t.activeTabId>0?t.activeTabId*h.h.tabHeight:0},h.f.thone(tt(),h.h.tabWidth,function(t){return t.activeTabId>0?t.activeTabId*h.h.tabWidth:0})),ut=m.c.div.withConfig({displayName:"jobs__ContentContainer",componentId:"sc-13kygjg-5"})(["position:relative;padding-top:14px;padding-left:30px;flex-grow:1;",";",";"],h.f.tablet($()),h.f.thone(Z())),ft=m.c.div.withConfig({displayName:"jobs__TabContent",componentId:"sc-13kygjg-6"})(["top:0;left:0;width:100%;height:auto;opacity:",";z-index:",";position:",";visibility:",";transition:",";transition-duration:",";ul{padding:0;margin:0;list-style:none;font-size:",";li{position:relative;padding-left:30px;margin-bottom:5px;&:before{content:'▹';position:absolute;left:0;color:",";line-height:",";}}}a{",";}"],function(t){return t.isActive?1:0},function(t){return t.isActive?2:-1},function(t){return t.isActive?"relative":"absolute"},function(t){return t.isActive?"visible":"hidden"},h.h.transition,function(t){return t.isActive?"0.5s":"0s"},h.h.fontSizes.large,h.h.colors.green,h.h.fontSizes.xlarge,h.g.inlineLink),dt=m.c.h4.withConfig({displayName:"jobs__JobTitle",componentId:"sc-13kygjg-7"})(["color:",";font-size:",";font-weight:500;margin-bottom:5px;"],h.h.colors.lightestSlate,h.h.fontSizes.xxlarge),pt=m.c.span.withConfig({displayName:"jobs__Company",componentId:"sc-13kygjg-8"})(["color:",";"],h.h.colors.green),mt=m.c.h5.withConfig({displayName:"jobs__JobDetails",componentId:"sc-13kygjg-9"})(["font-family:",";font-size:",";font-weight:normal;letter-spacing:0.5px;color:",";margin-bottom:30px;svg{width:15px;}"],h.h.fonts.SourceCodePro,h.h.fontSizes.smallish,h.h.colors.lightSlate),ht=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this).state={activeTabId:0},e.isActive=function(t){return e.state.activeTabId===t},e.setActiveTab=function(t){return e.setState({activeTabId:t})},e}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){Object(L.a)().reveal(this.jobs,Object(p.srConfig)())},n.render=function(){var t=this,e=this.state.activeTabId,n=this.props.data;return i.a.createElement(rt,{id:"jobs",ref:function(e){return t.jobs=e}},i.a.createElement(h.b,null,"Where I've Worked"),i.a.createElement(at,null,i.a.createElement(lt,{role:"tablist"},n&&n.map(function(e,n){var o=e.node.frontmatter.company;return i.a.createElement(ct,{key:n,isActive:t.isActive(n),onClick:function(e){return t.setActiveTab(n,e)},role:"tab","aria-selected":t.isActive(n)?"true":"false","aria-controls":"tab"+n,id:"tab"+n,tabIndex:t.isActive(n)?"0":"-1"},i.a.createElement("span",null,o))}),i.a.createElement(st,{activeTabId:e})),i.a.createElement(ut,null,n&&n.map(function(e,n){var o=e.node,r=o.frontmatter,a=o.html,l=r.title,c=r.url,s=r.company,u=r.range;return i.a.createElement(ft,{key:n,isActive:t.isActive(n),id:"job"+n,role:"tabpanel",tabIndex:"0","aria-labelledby":"job"+n,"aria-hidden":!t.isActive(n)},i.a.createElement(dt,null,i.a.createElement("span",null,l),i.a.createElement(pt,null," @ ",i.a.createElement("a",{href:c,target:"_blank",rel:"nofollow noopener noreferrer"},s))),i.a.createElement(mt,null,i.a.createElement("span",null,u)),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:a}}))}))))},e}(o.Component);ht.propTypes={data:a.a.array.isRequired};var gt=ht;function bt(){var t=f()(["font-size: 40px;"]);return bt=function(){return t},t}function vt(){var t=f()(["font-size: 50px;"]);return vt=function(){return t},t}function xt(){var t=f()(["font-size: ",";"]);return xt=function(){return t},t}function yt(){var t=f()(["font-size: ",";"]);return yt=function(){return t},t}var wt=Object(m.c)(h.e).withConfig({displayName:"contact__ContactContainer",componentId:"sc-6cd4xi-0"})(["text-align:center;max-width:600px;margin:0 auto 100px;a{",";}"],h.g.inlineLink),_t=Object(m.c)(h.b).withConfig({displayName:"contact__GreenHeading",componentId:"sc-6cd4xi-1"})(["display:block;color:",";font-size:",";font-family:",";font-weight:normal;margin-bottom:20px;justify-content:center;",";&:before{bottom:0;font-size:",";",";}&:after{display:none;}"],h.h.colors.green,h.h.fontSizes.medium,h.h.fonts.SourceCodePro,h.f.desktop(yt(),h.h.fontSizes.small),h.h.fontSizes.small,h.f.desktop(xt(),h.h.fontSizes.smallish)),Ct=m.c.h4.withConfig({displayName:"contact__Title",componentId:"sc-6cd4xi-2"})(["margin:0 0 20px;font-size:60px;",";",";"],h.f.desktop(vt()),h.f.tablet(bt())),zt=m.c.a.withConfig({displayName:"contact__EmailLink",componentId:"sc-6cd4xi-3"})(["",";margin-top:50px;"],h.g.bigButton),kt=function(t){function e(){return t.apply(this,arguments)||this}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){Object(L.a)().reveal(this.contact,Object(p.srConfig)())},n.render=function(){var t=this,e=this.props.data[0].node,n=e.frontmatter,o=e.html,r=n.title;return i.a.createElement(wt,{id:"contact",ref:function(e){return t.contact=e}},i.a.createElement(_t,null,"What's Next?"),i.a.createElement(Ct,null,r),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:o}}),i.a.createElement(zt,{href:"mailto:"+p.email,target:"_blank",rel:"nofollow noopener noreferrer"},"Say Hello"))},e}(o.Component);kt.propTypes={data:a.a.array.isRequired};var Et=kt;n.d(e,"query",function(){return St});var It=Object(m.c)(h.c).withConfig({displayName:"pages__MainContainer",componentId:"sc-1tzx2o8-0"})(["",";counter-reset:section;"],h.g.sidePadding),jt=function(t){var e=t.data,n=t.location;return i.a.createElement(l.a,{location:n},i.a.createElement(It,{id:"content"},i.a.createElement(H,{data:e.hero.edges}),i.a.createElement(V,{data:e.about.edges}),i.a.createElement(gt,{data:e.jobs.edges}),i.a.createElement(Et,{data:e.contact.edges})))};jt.propTypes={data:a.a.object.isRequired,location:a.a.object};e.default=jt;var St="3156114544"}}]);
//# sourceMappingURL=component---src-pages-index-js-23488ede0baadb7c3ee1.js.map