!function(e){var n={};function t(_){if(n[_])return n[_].exports;var r=n[_]={i:_,l:!1,exports:{}};return e[_].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,_){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:_})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var _=Object.create(null);if(t.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(_,r,function(n){return e[n]}.bind(null,r));return _},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var _,r,o,l,u,i={},c=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(e,n){for(var t in n)e[t]=n[t];return e}function a(e){var n=e.parentNode;n&&n.removeChild(e)}function p(e,n,t){var _,r=arguments,o={};for(_ in n)"key"!==_&&"ref"!==_&&(o[_]=n[_]);if(arguments.length>3)for(t=[t],_=3;_<arguments.length;_++)t.push(r[_]);if(null!=t&&(o.children=t),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===o[_]&&(o[_]=e.defaultProps[_]);return d(e,o,n&&n.key,n&&n.ref,null)}function d(e,n,t,r,o){var l={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(l.__v=l),_.vnode&&_.vnode(l),l}function h(e){return e.children}function v(e,n){this.props=e,this.context=n}function y(e,n){if(null==n)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?y(e):null}function m(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return m(e)}}function g(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!k.__r++||l!==_.debounceRendering)&&((l=_.debounceRendering)||o)(k)}function k(){for(var e;k.__r=r.length;)e=r.sort((function(e,n){return e.__v.__b-n.__v.__b})),r=[],e.some((function(e){var n,t,_,r,o,l,u;e.__d&&(l=(o=(n=e).__v).__e,(u=n.__P)&&(t=[],(_=s({},o)).__v=_,r=H(u,o,_,n.__n,void 0!==u.ownerSVGElement,null,t,null==l?y(o):l),A(t,o),r!=l&&m(o)))}))}function b(e,n,t,_,r,o,l,u,f,s){var p,v,m,g,k,b,S,P=_&&_.__k||c,x=P.length;for(f==i&&(f=null!=l?l[0]:x?y(_,0):null),t.__k=[],p=0;p<n.length;p++)if(null!=(g=t.__k[p]=null==(g=n[p])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?d(null,g,null,null,g):Array.isArray(g)?d(h,{children:g},null,null,null):null!=g.__e||null!=g.__c?d(g.type,g.props,g.key,null,g.__v):g)){if(g.__=t,g.__b=t.__b+1,null===(m=P[p])||m&&g.key==m.key&&g.type===m.type)P[p]=void 0;else for(v=0;v<x;v++){if((m=P[v])&&g.key==m.key&&g.type===m.type){P[v]=void 0;break}m=null}k=H(e,g,m=m||i,r,o,l,u,f,s),(v=g.ref)&&m.ref!=v&&(S||(S=[]),m.ref&&S.push(m.ref,null,g),S.push(v,g.__c||k,g)),null!=k?(null==b&&(b=k),f=w(e,g,m,P,l,k,f),s||"option"!=t.type?"function"==typeof t.type&&(t.__d=f):e.value=""):f&&m.__e==f&&f.parentNode!=e&&(f=y(m))}if(t.__e=b,null!=l&&"function"!=typeof t.type)for(p=l.length;p--;)null!=l[p]&&a(l[p]);for(p=x;p--;)null!=P[p]&&C(P[p],P[p]);if(S)for(p=0;p<S.length;p++)T(S[p],S[++p],S[++p])}function w(e,n,t,_,r,o,l){var u,i,c;if(void 0!==n.__d)u=n.__d,n.__d=void 0;else if(r==t||o!=l||null==o.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(o),u=null;else{for(i=l,c=0;(i=i.nextSibling)&&c<_.length;c+=2)if(i==o)break e;e.insertBefore(o,l),u=l}return void 0!==u?u:o.nextSibling}function S(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]="number"==typeof t&&!1===f.test(n)?t+"px":null==t?"":t}function P(e,n,t,_,r){var o,l,u,i,c;if(r?"className"===n&&(n="class"):"class"===n&&(n="className"),"style"===n)if(o=e.style,"string"==typeof t)o.cssText=t;else{if("string"==typeof _&&(o.cssText="",_=null),_)for(i in _)t&&i in t||S(o,i,"");if(t)for(c in t)_&&t[c]===_[c]||S(o,c,t[c])}else"o"===n[0]&&"n"===n[1]?(l=n!==(n=n.replace(/Capture$/,"")),u=n.toLowerCase(),n=(u in e?u:n).slice(2),t?(_||e.addEventListener(n,x,l),(e.l||(e.l={}))[n]=t):e.removeEventListener(n,x,l)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&"download"!==n&&!r&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/^xlink:?/,""))?null==t||!1===t?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):null==t||!1===t&&!/^ar/.test(n)?e.removeAttribute(n):e.setAttribute(n,t))}function x(e){this.l[e.type](_.event?_.event(e):e)}function E(e,n,t){var _,r;for(_=0;_<e.__k.length;_++)(r=e.__k[_])&&(r.__=e,r.__e&&("function"==typeof r.type&&r.__k.length>1&&E(r,n,t),n=w(t,r,r,e.__k,null,r.__e,n),"function"==typeof e.type&&(e.__d=n)))}function H(e,n,t,r,o,l,u,i,c){var f,a,p,d,y,m,g,k,w,S,P,x=n.type;if(void 0!==n.constructor)return null;(f=_.__b)&&f(n);try{e:if("function"==typeof x){if(k=n.props,w=(f=x.contextType)&&r[f.__c],S=f?w?w.props.value:f.__:r,t.__c?g=(a=n.__c=t.__c).__=a.__E:("prototype"in x&&x.prototype.render?n.__c=a=new x(k,S):(n.__c=a=new v(k,S),a.constructor=x,a.render=D),w&&w.sub(a),a.props=k,a.state||(a.state={}),a.context=S,a.__n=r,p=a.__d=!0,a.__h=[]),null==a.__s&&(a.__s=a.state),null!=x.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=s({},a.__s)),s(a.__s,x.getDerivedStateFromProps(k,a.__s))),d=a.props,y=a.state,p)null==x.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==x.getDerivedStateFromProps&&k!==d&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(k,S),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(k,a.__s,S)||n.__v===t.__v){a.props=k,a.state=a.__s,n.__v!==t.__v&&(a.__d=!1),a.__v=n,n.__e=t.__e,n.__k=t.__k,a.__h.length&&u.push(a),E(n,i,e);break e}null!=a.componentWillUpdate&&a.componentWillUpdate(k,a.__s,S),null!=a.componentDidUpdate&&a.__h.push((function(){a.componentDidUpdate(d,y,m)}))}a.context=S,a.props=k,a.state=a.__s,(f=_.__r)&&f(n),a.__d=!1,a.__v=n,a.__P=e,f=a.render(a.props,a.state,a.context),a.state=a.__s,null!=a.getChildContext&&(r=s(s({},r),a.getChildContext())),p||null==a.getSnapshotBeforeUpdate||(m=a.getSnapshotBeforeUpdate(d,y)),P=null!=f&&f.type==h&&null==f.key?f.props.children:f,b(e,Array.isArray(P)?P:[P],n,t,r,o,l,u,i,c),a.base=n.__e,a.__h.length&&u.push(a),g&&(a.__E=a.__=null),a.__e=!1}else null==l&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=N(t.__e,n,t,r,o,l,u,c);(f=_.diffed)&&f(n)}catch(e){n.__v=null,_.__e(e,n,t)}return n.__e}function A(e,n){_.__c&&_.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){_.__e(e,n.__v)}}))}function N(e,n,t,_,r,o,l,u){var f,s,a,p,d,h=t.props,v=n.props;if(r="svg"===n.type||r,null!=o)for(f=0;f<o.length;f++)if(null!=(s=o[f])&&((null===n.type?3===s.nodeType:s.localName===n.type)||e==s)){e=s,o[f]=null;break}if(null==e){if(null===n.type)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,v.is&&{is:v.is}),o=null,u=!1}if(null===n.type)h!==v&&e.data!==v&&(e.data=v);else{if(null!=o&&(o=c.slice.call(e.childNodes)),a=(h=t.props||i).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!u){if(null!=o)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||a)&&(p&&a&&p.__html==a.__html||(e.innerHTML=p&&p.__html||""))}(function(e,n,t,_,r){var o;for(o in t)"children"===o||"key"===o||o in n||P(e,o,null,t[o],_);for(o in n)r&&"function"!=typeof n[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===n[o]||P(e,o,n[o],t[o],_)})(e,v,h,r,u),p?n.__k=[]:(f=n.props.children,b(e,Array.isArray(f)?f:[f],n,t,_,"foreignObject"!==n.type&&r,o,l,i,u)),u||("value"in v&&void 0!==(f=v.value)&&f!==e.value&&P(e,"value",f,h.value,!1),"checked"in v&&void 0!==(f=v.checked)&&f!==e.checked&&P(e,"checked",f,h.checked,!1))}return e}function T(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){_.__e(e,t)}}function C(e,n,t){var r,o,l;if(_.unmount&&_.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||T(r,null,n)),t||"function"==typeof e.type||(t=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){_.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&C(r[l],n,t);null!=o&&a(o)}function D(e,n,t){return this.constructor(e,t)}function M(e,n,t){var r,o,l;_.__&&_.__(e,n),o=(r=t===u)?null:t&&t.__k||n.__k,e=p(h,null,[e]),l=[],H(n,(r?n:t||n).__k=e,o||i,i,void 0!==n.ownerSVGElement,t&&!r?[t]:o?null:n.childNodes.length?c.slice.call(n.childNodes):null,l,t||i,r),A(l,e)}_={__e:function(e,n){for(var t,_;n=n.__;)if((t=n.__c)&&!t.__)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError&&(_=!0,t.setState(t.constructor.getDerivedStateFromError(e))),null!=t.componentDidCatch&&(_=!0,t.componentDidCatch(e)),_)return g(t.__E=t)}catch(n){e=n}throw e}},v.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof e&&(e=e(t,this.props)),e&&s(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),g(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},v.prototype.render=h,r=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,k.__r=0,u=i;var F,U,j,L=0,O=[],W=_.__r,I=_.diffed,R=_.__c,q=_.unmount;function B(e,n){_.__h&&_.__h(U,e,L||n),L=0;var t=U.__H||(U.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function z(e){return L=1,function(e,n,t){var _=B(F++,2);return _.t=e,_.__c||(_.__c=U,_.__=[t?t(n):Q(void 0,n),function(e){var n=_.t(_.__[0],e);_.__[0]!==n&&(_.__=[n,_.__[1]],_.__c.setState({}))}]),_.__}(Q,e)}function G(){O.some((function(e){if(e.__P)try{e.__H.__h.forEach($),e.__H.__h.forEach(J),e.__H.__h=[]}catch(n){return e.__H.__h=[],_.__e(n,e.__v),!0}})),O=[]}_.__r=function(e){W&&W(e),F=0;var n=(U=e.__c).__H;n&&(n.__h.forEach($),n.__h.forEach(J),n.__h=[])},_.diffed=function(e){I&&I(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==O.push(n)&&j===_.requestAnimationFrame||((j=_.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(_),V&&cancelAnimationFrame(n),setTimeout(e)},_=setTimeout(t,100);V&&(n=requestAnimationFrame(t))})(G))},_.__c=function(e,n){n.some((function(e){try{e.__h.forEach($),e.__h=e.__h.filter((function(e){return!e.__||J(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],_.__e(t,e.__v)}})),R&&R(e,n)},_.unmount=function(e){q&&q(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach($)}catch(e){_.__e(e,n.__v)}};var V="function"==typeof requestAnimationFrame;function $(e){"function"==typeof e.u&&e.u()}function J(e){e.u=e.__()}function K(e,n){return!e||n.some((function(n,t){return n!==e[t]}))}function Q(e,n){return"function"==typeof n?n(e):n}var X=(e,n)=>{const[t,r]=z(e);var o,l,u;return o=()=>{(async()=>{const e=await async function(e){try{const n=await fetch("https://api.gnavi.co.jp/RestSearchAPI/v3?keyid=7060418792615728d5ab9f6a719df4b5&name="+e);return await n.json()}catch(e){throw new Error(e)}}(n);r(e)})()},l=[],u=B(F++,3),!_.__s&&K(u.__H,l)&&(u.__=o,u.__H=l,U.__H.__h.push(u)),t};var Y=()=>{const e=X({rest:[]},"bar");return p("div",null,p("div",null,"Hello Preact"),p("ul",null,e.rest.map(e=>p("li",{key:e.id},e.name))))};M(p(Y,null),document.getElementById("app"))}]);