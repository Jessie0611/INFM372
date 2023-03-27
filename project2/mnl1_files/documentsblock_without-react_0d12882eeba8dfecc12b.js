/*! Version: 5.2.94-r20230313-8.0; Third Party Notices: https://res-1.cdn.office.net/midgard/versionless/tpn-93a29a1fcb54431b62e841e0c5751848e98f0e0e1d8476271ecf1591c0699310da44e84cd57e5f7d8142d16d11e162f5568014bccc3af994b5ea1320fdaa6da1.txt */
(window.webpackJsonpLpc=window.webpackJsonpLpc||[]).push([[205],{1316:function(e,t,n){"use strict";n.r(t),n.d(t,"DocumentsBlockView",(function(){return Q}));var r=n(26),i=n.n(r),o=n(47),a=n(48),c=n(87),s=n(86),u=n(53),l=n(1275),d=n(480),p=n(135),f=n(9),m=n(31),b=n(708),h=n(0),v=n(1479),g=h.createContext((function(e){return h.createElement(h.Fragment,null,e.children)}));var O=n(1886),j=n(170),y=n(1565),x=n(987),C=n(1387),w=n(620),E=n(13),k=Object(w.a)((function(e){return{container:{position:"relative",overflow:"hidden",backgroundColor:"transparent",alignItems:"center",justifyContent:"flex-start",padding:"8px 24px",display:"flex",width:"100%",borderBottom:"none",selectors:{"&:hover, .is-focusVisible ":{opacity:1,backgroundColor:e.palette.neutralHover}}},details:[{color:e.palette.neutralPrimary,paddingLeft:"16px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},E.j.medium],actionDetails:[{display:"block",color:e.palette.neutralSecondary,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},E.j.small]}})),L=function(e,t,n){return e?Object(O.a)(j.a.RightToLeft,t,n):n};function D(e){var t=e.title,n=e.onClick,r=e.fileExtension,i=e.subHeading,o=e.useBidiOverride,a=void 0!==o&&o,c=k(Object(x.a)());return h.createElement(C.a,{onClick:n,className:c.container},h.createElement(y.a,{fileExtension:r,iconSize:40}),h.createElement("span",{className:c.details},h.createElement("span",{title:t},L(a,window,t)),"string"==typeof i?h.createElement("span",{title:i||void 0,className:c.actionDetails},i?L(a,window,i):void 0):i))}var T=n(737),S=n(116),N=Object(S.c)((function(){return Object(E.db)({details:{marginLeft:"24px"},ghostLine:[{height:"24px",selectors:{":before":{width:"36ex"}}},E.j.small],ghostLineSecond:[{height:"24px",selectors:{":before":{width:"28ex"}}},E.j.small]})}));function I(){var e=N();return h.createElement("div",{className:e.details},h.createElement(T.a,{className:e.ghostLine}),h.createElement(T.a,{className:e.ghostLineSecond}))}var A=n(2520),F=n(401);function P(e){var t=e.isConsumer,n=e.isMePersona,r=e.personName,i=function(e){return{noDocumentsDescriptionYouConsumer:Object(m.a)(F.c),noDocumentsDescriptionYou:Object(m.a)(F.b),noDocumentsDescriptionFormat:Object(m.b)(F.a,{p0:e||""})}}(r||"");if(n){var o=t?i.noDocumentsDescriptionYouConsumer:i.noDocumentsDescriptionYou;return h.createElement(A.a,{message:o})}return r?h.createElement(A.a,{message:i.noDocumentsDescriptionFormat}):null}var B=function(){return(B=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function R(e){var t=e.files,n=e.showLoading,r=e.accessibilityListAriaStringFormatter,i=e.personName,o=e.isConsumer,a=e.isMePersona,c=h.useContext(g),s=h.useMemo((function(){return n?[]:function(e,t){var n=t;return e.slice(0,3).map((function(e,t){var r=h.createElement(D,B({},e,{key:t}));return n?h.createElement(n,{item:e,position:t+1,key:"VerticalContentItemWrapper_".concat(t)},r):r}))}(t,c)}),[n,t]);return n?h.createElement(I,null):0===t.length?h.createElement(P,{personName:i,isConsumer:o,isMePersona:a}):h.createElement(v.a,{ariaLabel:r,items:s,itemDisplay:"Vertical"})}function M(e){var t=e.onTitleClick,n=e.onFooterClick,r=e.onRetryClick,i=e.logName,o=e.files,a=e.showError,c=e.altText,s=e.ariaLabel,u=e.useBidiOverride,l=void 0!==u&&u,d=e.showLoading,p=void 0!==d&&d,f=e.personName,v=e.isConsumer,g=e.isMePersona,O=e.styleOverrides,j=e.hideFooter,y=Object(m.a)(F.e),x=Object(m.a)(F.d),C=0===o.length;return h.createElement(b.a,{logName:i,title:y,altText:c,showLoading:p,onHeaderSelected:C?void 0:t,showError:a,footerText:x,onFooterSelected:n,onRetrySelected:r,accessibilityLabel:s,styleOverrides:O,hideFooter:void 0!==j?j:o.length<=3},h.createElement(R,{files:o,showLoading:p,accessibilityListAriaStringFormatter:function(){return""},useBidiOverride:l,personName:f,isConsumer:v,isMePersona:g}))}var H=n(1368),K=n(1458),U=n(129),V=n(1949),W=n(119),z=n(203),_=n(187),G=n(490);function Y(e){var t;return Boolean(e&&e.Title&&Object(G.e)(Object(G.d)(null!==(t=e.FileExtension)&&void 0!==t?t:"")))}var J=n(425);function q(e){var t=function(){if("undefined"==typeof Reflect||!i.a)return!1;if(i.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(i()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var o=Object(u.a)(this).constructor;n=i()(r,arguments,o)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var Q=function(e){Object(c.a)(n,e);var t=q(n);function n(){var e;return Object(o.a)(this,n),(e=t.apply(this,arguments)).getDocumentsList=Object(S.c)((function(t,n,r,i,o){return(null==t?void 0:t.length)?t.reduce((function(t,a,c){if(Y(a)){var s=e.getDocumentLastActivityString(a,o),u=Object(l.getCompactRelativeTimeString)(Object(d.j)(a.LastActivityTimeStamp)||Object(d.i)(),new Date,Object(J.b)(i),i.logger),p=o.documentsBlockStrings.timeActionFormat({p0:s,p1:u}),f=n(a.Title||"",a.FileExtension||"",(function(){return r(a,c)}),p);t.push(f)}return t}),[]):[]})),e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.props.persona,n=this.getDocumentsList(this.props.documents,this.getFileLinks,(function(n,r){return t&&V.a(n,{indexClicked:r,applicationContext:e.lpcAppContext,logger:e.lpcAppContext.logger})}),this.lpcAppContext,this.strings);return h.createElement(M,{onTitleClick:function(){return t&&V.d(t,{applicationContext:e.lpcAppContext,renderingContext:e.props.renderingContext,cardCorrelationId:e.lpcAppContext.cardCorrelationId||"",logger:e.lpcAppContext.logger})},onFooterClick:function(){return t&&V.b(t,{applicationContext:e.lpcAppContext,renderingContext:e.props.renderingContext,cardCorrelationId:e.lpcAppContext.cardCorrelationId||"",logger:e.lpcAppContext.logger})},onRetryClick:function(){return t&&V.c(t,e.lpcAppContext,e.props.renderingContext,e.lpcAppContext.logger)},logName:"DocumentsBlock",showError:this.props.hasFailed,ariaLabel:this.strings.contentBlockStrings.documentsBlock,files:n,showLoading:this.props.isLoading,personName:null==t?void 0:t.displayName,isConsumer:Object(_.c)(this.lpcAppContext.hostAppConfiguration.tenantAadObjectId),isMePersona:this.props.isMePersona})}},{key:"getFileLinks",value:function(e,t,n,r){return{title:e,fileExtension:t,onClick:n,subHeading:r}}},{key:"getDocumentLastActivityString",value:function(e,t){switch(e.LastActivityType){case"Shared":return t.documentsBlockStrings.shared;case"Emailed":return t.documentsBlockStrings.emailed;case"Attached":case"Modified":case"Uploaded":case"Unknown":case void 0:case null:return t.documentsBlockStrings.modified;default:return Object(p.b)(e,t.documentsBlockStrings.modified)}}}]),n}(z.a);var X=Object(K.a)(Q,(function(e){var t=e.persona,n=e.hasFailed,r=e.isLoading,i=e.documents;return{componentName:"DocumentsBlock",identifier:t&&t.lpcKey.key||"",logProperties:{hasFailed:n,isLoading:r,personaType:t&&t.kind,documentsCount:i&&i.length.toString()||"0",documentExtensions:i&&i.map((function(e){return e.FileExtension||"unknown"})).toString()}}})),Z=Object(U.c)((function(e,t){var n=t.persona&&Object(W.e)(e,t.persona.lpcKey);return{documents:Object(f.d)(n&&n.files),isLoading:!!n&&n.isLoading,hasFailed:!!n&&n.hasError}}))(Object(H.a)(X));t.default=Z},1440:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(2),i=n(670),o=n(0),a=n(714),c=n(1503);function s(e){var t=Object(a.c)(),n=Object(a.d)(),s=e.identifier,u=e.logProperties,l=n+e.componentName,d=Object(o.useRef)(null),p=Object(o.useRef)(null),f=Object(o.useRef)(null),m=Object(o.useRef)(0);Object(o.useEffect)((function(){return null===d.current&&(d.current=c()),function(){p.current||(p.current=c());var e=d.current&&p.current?p.current-d.current:void 0,n=void 0!==e&&Math.round(e).toString()||"";if(t){var i=Object(r.__assign)({component:l,duration:n,renderCount:m.current.toString()},f.current);t(l,i)}d.current=null,f.current=null,p.current=null,m.current=0}}),[s,l]),Object(o.useEffect)((function(){Object(i.a)(u,f.current)||(m.current++,p.current=c(),f.current=u)}),[l,u])}},1458:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(2),i=n(0),o=n(1440);function a(e,t){return function(n){var a=t(n);return Object(o.a)(a),i.createElement(e,Object(r.__assign)({},n))}}},1479:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(13),i=n(0),o=Object(r.db)({list:{display:"block",margin:0,padding:0,listStyleType:"none"},listItem:{display:"block"},listItemHorizontal:{display:"inline-block"},verticalDivider:{padding:"0px 4px",flex:"none",flexGrow:0,minWidth:"0px !important",marginTop:"8px",marginBottom:"8px"},listItemHorizontalEnd:{display:"inline-block",flexGrow:1,justifyContent:"flex-end"}}),a="verticalDivider",c=function(e){var t=e.items,n=e.listClassName,r=e.listItemClassName,c=e.itemDisplay,s=e.ariaLabel,u=e.showLastItemOnRight,l=t&&t.filter(Boolean);if(!l||0===l.length)return i.createElement("div",{className:"".concat(o.list," ").concat(n||""),role:"list"});var d=l.map((function(e,t){var n,d;return d="Horizontal"===c?t+1===l.length&&u?o.listItemHorizontalEnd:(null===(n=e.props)||void 0===n?void 0:n.className)===a?o.verticalDivider:o.listItemHorizontal:o.listItem,i.createElement("div",{key:e.key||t,"aria-label":s(t+1,l.length),className:"".concat(d," ").concat(r||"")},e)}));return i.createElement("div",{className:"".concat(o.list," ").concat(n||"")},d)}},1481:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return u}));var r=n(356),i=n(490),o=n(616);function a(e){return"Mail"===e.ContainerType||"Emailed"===e.LastActivityType||"Shared"===e.LastActivityType}function c(e){var t=i.a[e.Type||""];return Object(i.e)(t)?t:Object(i.d)(function(e){var t=e.Title||"",n=e.FileExtension||"",r=(a(e)?e.WebUrl:e.DownloadUrl)||"";return n.trim()||Object(i.b)(r)||Object(i.b)(t)||""}(e))}function s(e,t){var n=u(e);if(!function(e,t){var n=t.actionProps,r=t.applicationContext,i=t.logger,a=r.hostAppConfiguration.actionCallbacks;if(r.dispatch(Object(o.l)()),null==a?void 0:a.openDocument)try{return a.openDocument(e,n,i),r.dispatch(Object(o.m)()),!0}catch(e){r.dispatch(Object(o.k)({HostAppCallbackNotImplemented:!1}))}return!1}(e,t)){var i={openType:"NewTab",hrefLink:n||""};Object(r.a)(i,t.applicationContext)}}function u(e){return"Mail"===e.ContainerType?e.ContainerWebUrl:e.WebUrl}},1487:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(4),i=Object(r.a)("CopyToClipboardSucceededAction",{featureName:"DOMEvent",getLogProperties:function(e){return{targetName:e.targetName}}}),o=Object(r.a)("CopyToClipboardFailedAction",{featureName:"DOMEvent",getLogProperties:function(e){return{targetName:e.targetName}}})},1488:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var r=function(e){return"MidgardClipboardUtilsHiddenInput"===e.id},i=function(e,t,n){var r=t||document;return navigator.clipboard?navigator.clipboard.writeText(e).then((function(){return!0})).catch((function(){return o(e,r,n)})):o(e,r,n)},o=function(e,t,n){var r=t.activeElement,i=t.createElement("textarea");i.tabIndex=-1,i.readOnly=!0,i.style.opacity="0",i.style.position="fixed",i.style.right="-9999px",i.style.bottom="-9999px",i.id="MidgardClipboardUtilsHiddenInput";var o=t.createElement("div");o.onselectstart=function(e){return e.stopPropagation()},o.appendChild(i);var a,c=n||t.body;c.appendChild(o),i.value=e,i.focus(),i.select();try{t.execCommand("copy"),a=!0}catch(e){a=!1}return r&&r.focus&&r.focus(),c.removeChild(o),Promise.resolve(a)}},1503:function(e,t,n){(function(t){(function(){var n,r,i,o,a,c;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,o=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),c=1e9*t.uptime(),a=o-c):Date.now?(e.exports=function(){return Date.now()-i},i=Date.now()):(e.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)}).call(this,n(986))},1512:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1488),i=n(1487);function o(e,t,n){return Object(r.a)(e,n.ownerDocument)?(n.dispatch(Object(i.b)({targetName:t})),!0):(prompt(n.strings.utilityStrings.copyToClipboardHelpText,e),n.dispatch(Object(i.a)({targetName:t})),!1)}},1565:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(2),i=n(2672),o=n(326),a=n(0),c=n(165),s=n(13),u=Object(c.a)((function(e){return Object(s.db)({fileTypeIcon:{flexShrink:0,flexGrow:0,width:"".concat(e,"px"),height:"".concat(e,"px")}})})),l=n(135),d=n(2314);function p(e){if(e)switch(e){case"Folder":case"WebPage":return d.a.folder;default:return Object(l.a)(e)}}var f=function(e){var t=e.fileExtension,n=e.fileType,c=e.iconSize,s=e.className,l=Object(i.a)({extension:t,size:c||32,type:p(n)}),d=u(c||32),f="".concat(d.fileTypeIcon," ").concat(s);return a.createElement(o.a,Object(r.__assign)({role:"presentation"},l,{className:f,"aria-hidden":!0}))}},1886:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),i=n(26),o=n.n(i),a=n(47),c=n(48),s=n(87),u=n(86),l=n(53),d=n(170),p=n(371);function f(e){var t=function(){if("undefined"==typeof Reflect||!o.a)return!1;if(o.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(o()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var i=Object(l.a)(this).constructor;n=o()(r,arguments,i)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var m=function(e){Object(s.a)(n,e);var t=f(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=Object(p.a)(this.props.ownerWindow),t=this.props.whenDirection===d.a.LeftToRight&&e===d.a.LeftToRight||this.props.whenDirection===d.a.RightToLeft&&e===d.a.RightToLeft?Object(p.b)(e):e;return r.createElement("bdo",{dir:t},this.props.children)}}]),n}(r.Component);function b(e,t,n){return r.createElement(m,{whenDirection:e,ownerWindow:t},n)}},1949:function(e,t,n){"use strict";n.d(t,"d",(function(){return O})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return x})),n.d(t,"f",(function(){return C})),n.d(t,"c",(function(){return w})),n.d(t,"e",(function(){return E})),n.d(t,"i",(function(){return k})),n.d(t,"g",(function(){return L})),n.d(t,"h",(function(){return D}));var r=n(11),i=n.n(r),o=n(8),a=n.n(o),c=n(356),s=n(476),u=n(123),l=n(225),d=n(255),p=n(194),f=n(717),m=n(1481),b=n(482),h=n(1512),v=n(432),g=function(e,t,n,r){return new(n||(n=a.a))((function(i,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function c(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};function O(e,t){var n=t.applicationContext,r=t.renderingContext,i=y(n),o=Object(d.b)(n),a=Object(p.a)(e)?"GroupFiles":"Files";i&&o?(Object(u.k)(e,t),n.dispatch(Object(l.e)({personaLpcKey:e.lpcKey,isExpandedViewEnabled:!0,section:a,windowId:r.windowId,navigationStartCheckpoint:Object(s.a)(),shouldResetHistory:!1,personaCorrelationId:n.getPersonaCorrelationId(e.lpcKey)})),o.renderExpandedView(n,a)):n.dispatch(Object(l.e)({personaLpcKey:e.lpcKey,isExpandedViewEnabled:!1}))}function j(e,t){var n=t.applicationContext,r=t.renderingContext,i=y(n),o=Object(d.b)(n),a=Object(p.a)(e)?"GroupFiles":"Files";i&&o?(Object(u.k)(e,t),n.dispatch(Object(l.b)({personaLpcKey:e.lpcKey,isExpandedViewEnabled:!0,section:a,windowId:r.windowId,navigationStartCheckpoint:Object(s.a)(),shouldResetHistory:!1,personaCorrelationId:n.getPersonaCorrelationId(e.lpcKey)})),o.renderExpandedView(n,a)):n.dispatch(Object(l.b)({personaLpcKey:e.lpcKey,isExpandedViewEnabled:!1}))}function y(e){var t=Object(d.b)(e);return e.settings.isImmersiveProfileEnabled&&!!t}function x(e,t){var n=t.applicationContext,r=t.indexClicked;n.dispatch(Object(l.a)({document:e,indexClicked:r})),Object(m.d)(e,t)}function C(e,t){t.applicationContext.dispatch(Object(l.g)({document:e})),Object(m.d)(e,t)}function w(e,t,n,r){return g(this,void 0,void 0,i.a.mark((function o(){var a,c;return i.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t.dispatch(Object(l.c)({personaLpcKey:e.lpcKey})),a=t.reduxStore.getState(),c=f.a.getSelectors(a).getCardTemplateFailed(e.lpcKey),i.next=5,Object(v.a)(e,10,c,t,n,r);case 5:case"end":return i.stop()}}),o)})))}function E(e,t){t.dispatch(Object(l.f)({document:e})),Object(h.a)(e.WebUrl||"","GetPersonaCard",t)}function k(e,t){t.applicationContext.dispatch(Object(l.k)({document:e})),Object(b.b)(e,t)}function L(e,t){t.dispatch(Object(l.h)({document:e}));var n={openType:"NewTab",hrefLink:e.DownloadUrl||""};Object(c.a)(n,t)}function D(e,t){t.dispatch(Object(l.i)({document:e}));var n={openType:"NewTab",hrefLink:e.ContainerWebUrl||""};Object(c.a)(n,t)}},2520:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(987),i=n(0),o=n(620),a=n(13),c=Object(o.a)((function(e){return{noContentStyle:[a.j.small,{padding:"4px 24px",color:e.palette.neutralSecondary,paddingTop:0,paddingBottom:0}]}}));function s(e){var t=e.message,n=c(Object(r.a)()).noContentStyle;return i.createElement("div",{className:n},t)}}}]);