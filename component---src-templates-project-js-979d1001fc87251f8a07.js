(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Bl7J:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),o=t("aOmW"),c=t.n(o),i=t("x8iF"),s=t.n(i);var u=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).state={isToggleOn:!1},t.handleTogglerClick=t.handleTogglerClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var l=n.prototype;return l.handleTogglerClick=function(e){this.setState({isToggleOn:!this.state.isToggleOn}),this.props.onToggleClick()},l.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:s.a.menuToggler+" "+(this.state.isToggleOn?s.a.change:""),onClick:this.handleTogglerClick},r.a.createElement("button",{className:s.a.hamburger+" "+s.a.hamburgerSqueeze+" "+(this.state.isToggleOn?s.a.isActive:""),type:"button"},r.a.createElement("span",{className:s.a.hamburgerBox},r.a.createElement("span",{className:s.a.hamburgerInner})))))},n}(r.a.Component);var m=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).handleToggleClick=t.handleToggleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t.state={isToggleOn:!1},t}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var o=n.prototype;return o.handleToggleClick=function(){this.setState({isToggleOn:!this.state.isToggleOn})},o.render=function(){return r.a.createElement("header",{className:c.a.header},r.a.createElement(u,{onToggleClick:this.handleToggleClick}),r.a.createElement("div",{className:c.a.davisallenLogo},r.a.createElement("span",{className:c.a.path},this.props.headerPath),r.a.createElement(l.a,{to:"/",className:c.a.logoLink},"davis allen"),r.a.createElement("span",{className:c.a.dollarSign},"$")),r.a.createElement("div",{className:c.a.terminal}),r.a.createElement("div",{className:c.a.mainNavContainer},r.a.createElement("ul",{className:c.a.mainNav+" "+(this.state.isToggleOn?c.a.active:"")},r.a.createElement("li",null,r.a.createElement(l.a,{to:"/",className:c.a.navLink+" "+c.a.homeLink},"home")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/about",className:c.a.navLink},"about")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/work",className:c.a.navLink},"work")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/contact",className:c.a.navLink},"contact")))))},n}(r.a.Component),g=t("/uZM"),h=t.n(g);a.a=function(e){var a=e.headerPath,t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{headerPath:a}),r.a.createElement("div",{className:h.a.mainContainer},t))}},GhMY:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return o}));var n=t("q1tI"),r=t.n(n),l=t("Bl7J");a.default=function(e){var a=e.data.markdownRemark;return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,a.frontmatter.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}})))};var o="861893041"},Wbzz:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("+ZDr"),o=t.n(l);t.d(a,"a",(function(){return o.a}));t("lw3w"),t("emEt").default.enqueue,r.a.createContext({})},lw3w:function(e,a,t){var n;e.exports=(n=t("rzlk"))&&n.default||n},rzlk:function(e,a,t){"use strict";t.r(a);t("91GP");var n=t("q1tI"),r=t.n(n),l=t("IOVJ");a.default=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json)):null}}}]);
//# sourceMappingURL=component---src-templates-project-js-979d1001fc87251f8a07.js.map