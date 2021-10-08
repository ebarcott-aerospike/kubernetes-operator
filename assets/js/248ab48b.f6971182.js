"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[6011],{3905:function(e,t,r){r.d(t,{Zo:function(){return a},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},a=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||c;return r?n.createElement(m,i(i({ref:t},a),{},{components:r})):n.createElement(m,i({ref:t},a))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6574:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return a},default:function(){return f}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),i=["components"],l={title:"Delete Aerospike Cluster",description:"Delete Aerospike Cluster"},u=void 0,s={unversionedId:"Delete-Aerospike-cluster",id:"version-2.0.0-rc1/Delete-Aerospike-cluster",isDocsHomePage:!1,title:"Delete Aerospike Cluster",description:"Delete Aerospike Cluster",source:"@site/versioned_docs/version-2.0.0-rc1/Delete-Aerospike-cluster.md",sourceDirName:".",slug:"/Delete-Aerospike-cluster",permalink:"/kubernetes-operator/Delete-Aerospike-cluster",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/versioned_docs/version-2.0.0-rc1/Delete-Aerospike-cluster.md",tags:[],version:"2.0.0-rc1",frontMatter:{title:"Delete Aerospike Cluster",description:"Delete Aerospike Cluster"}},a=[{value:"Delete a cluster",id:"delete-a-cluster",children:[]}],p={toc:a};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"You can delete a cluster either by using the customer resource file that you created the cluster with, or by deleting the cluster directly"),(0,c.kt)("h2",{id:"delete-a-cluster"},"Delete a cluster"),(0,c.kt)("p",null,"To delete a cluster, run the following command using the correct custom resource file:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl delete -f config/samples/dim_nostorage_cluster_cr.yaml\n")))}f.isMDXComponent=!0}}]);