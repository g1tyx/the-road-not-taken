import{q,a8 as C,n as h,a9 as I,aa as P,ab as V}from"./Bu1DDpCk.js";import{i as j,c as B,d as M,n as z,a as D}from"./Cbx6oo5S.js";function G(s,r){if(r){const t=document.body;s.autofocus=!0,q(()=>{document.activeElement===t&&s.focus()})}}let A=!1;function K(){A||(A=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{var r;if(!s.defaultPrevented)for(const t of s.target.elements)(r=t.__on_r)==null||r.call(t)})},{capture:!0}))}function $(s){var r,t,e="";if(typeof s=="string"||typeof s=="number")e+=s;else if(typeof s=="object")if(Array.isArray(s)){var o=s.length;for(r=0;r<o;r++)s[r]&&(t=$(s[r]))&&(e&&(e+=" "),e+=t)}else for(t in s)s[t]&&(e&&(e+=" "),e+=t);return e}function R(){for(var s,r,t=0,e="",o=arguments.length;t<o;t++)(s=arguments[t])&&(r=$(s))&&(e&&(e+=" "),e+=r);return e}function S(s){return typeof s=="object"?R(s):s??""}function Q(s){if(h){var r=!1,t=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var e=s.value;v(s,"value",null),s.value=e}if(s.hasAttribute("checked")){var o=s.checked;v(s,"checked",null),s.checked=o}}};s.__on_r=t,V(t),K()}}function U(s,r){var t=s.__attributes??(s.__attributes={});t.checked!==(t.checked=r??void 0)&&(s.checked=r)}function Y(s,r){r?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function v(s,r,t,e){var o=s.__attributes??(s.__attributes={});h&&(o[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||o[r]!==(o[r]=t)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[I]=t),t==null?s.removeAttribute(r):typeof t!="string"&&L(s).includes(r)?s[r]=t:s.setAttribute(r,t))}function W(s,r,t,e,o=!1,n=!1,F=!1){var l=r||{},y=s.tagName==="OPTION";for(var p in r)p in t||(t[p]=null);t.class&&(t.class=S(t.class));var w=L(s),E=s.__attributes??(s.__attributes={});for(const i in t){let f=t[i];if(y&&i==="value"&&f==null){s.value=s.__value="",l[i]=f;continue}var g=l[i];if(f!==g){l[i]=f;var b=i[0]+i[1];if(b!=="$$"){if(b==="on"){const u={},_="$$"+i;let c=i.slice(2);var d=D(c);if(j(c)&&(c=c.slice(0,-7),u.capture=!0),!d&&g){if(f!=null)continue;s.removeEventListener(c,l[_],u),l[_]=null}if(f!=null)if(d)s[`__${c}`]=f,M([c]);else{let O=function(T){l[i].call(this,T)};l[_]=B(c,s,O,u)}else d&&(s[`__${c}`]=void 0)}else if(i==="style"&&f!=null)s.style.cssText=f+"";else if(i==="autofocus")G(s,!!f);else if(i==="__value"||i==="value"&&f!=null)s.value=s[i]=s.__value=f;else if(i==="selected"&&y)Y(s,f);else{var a=i;o||(a=z(a));var k=a==="defaultValue"||a==="defaultChecked";if(f==null&&!n&&!k)if(E[i]=null,a==="value"||a==="checked"){let u=s;if(a==="value"){let _=u.defaultValue;u.removeAttribute(a),u.defaultValue=_}else{let _=u.defaultChecked;u.removeAttribute(a),u.defaultChecked=_}}else s.removeAttribute(i);else k||w.includes(a)&&(n||typeof f!="string")?s[a]=f:typeof f!="function"&&(h&&(a==="src"||a==="href"||a==="srcset")||v(s,a,f))}i==="style"&&"__styles"in s&&(s.__styles={})}}}return l}var N=new Map;function L(s){var r=N.get(s.nodeName);if(r)return r;N.set(s.nodeName,r=[]);for(var t,e=s,o=Element.prototype;o!==e;){t=P(e);for(var n in t)t[n].set&&r.push(n);e=C(e)}return r}export{W as a,U as b,S as c,Q as r,v as s};
