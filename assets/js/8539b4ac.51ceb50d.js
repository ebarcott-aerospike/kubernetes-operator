"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[9895],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4770:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={title:"Shadow Device",description:"Shadow Device"},s=void 0,l={unversionedId:"Shadow-device",id:"Shadow-device",isDocsHomePage:!1,title:"Shadow Device",description:"Shadow Device",source:"@site/docs/Shadow-device.md",sourceDirName:".",slug:"/Shadow-device",permalink:"/kubernetes-operator/Shadow-device",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/docs/Shadow-device.md",tags:[],version:"current",frontMatter:{title:"Shadow Device",description:"Shadow Device"}},p=[{value:"Description",id:"description",children:[]},{value:"Create a local provisioner and local storage class",id:"create-a-local-provisioner-and-local-storage-class",children:[]},{value:"Create the namespace configuration",id:"create-the-namespace-configuration",children:[]},{value:"Deploy the cluster",id:"deploy-the-cluster",children:[]}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This is specific to cloud environments. Here namespace storage-engine can be configured to use extremely high-performance cloud instance attached local SSDs that are ephemeral. Writes will also be duplicated to another network-attached shadow device for persistence in case the cloud instance terminates."),(0,a.kt)("p",null,"For more details, visit ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aerospike.com/docs/configure/namespace/storage/#recipe-for-shadow-device"},"configuration of shadow devices"),"."),(0,a.kt)("h2",{id:"create-a-local-provisioner-and-local-storage-class"},"Create a local provisioner and local storage class"),(0,a.kt)("p",null,"Follow the instructions ",(0,a.kt)("a",{parentName:"p",href:"/kubernetes-operator/Storage-provisioning#local-volume"},"here")," to create a local volume provisioner and appropriate storage class."),(0,a.kt)("h2",{id:"create-the-namespace-configuration"},"Create the namespace configuration"),(0,a.kt)("p",null,"Storage specific config for aerospike cluster CR file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  storage:\n    volumes:\n      - storageClass: ssd\n        path: /opt/aerospike\n        volumeMode: filesystem\n        sizeInGB: 1\n      - path: /opt/aerospike/data\n        storageClass: ssd\n        volumeMode: filesystem\n        sizeInGB: 3\n      - path: /dev/nvme0n1\n        storageClass: local-ssd\n        volumeMode: block\n        sizeInGB: 5\n      - path: /dev/sdf\n        storageClass: ssd\n        volumeMode: block\n        sizeInGB: 5\n  .\n  .\n  .\n  aerospikeConfig:\n    service:\n      feature-key-file: /etc/aerospike/secret/features.conf\n    security:\n      enable-security: true\n    namespaces:\n      - name: test\n        memory-size: 3000000000\n        replication-factor: 2\n        storage-engine:\n          type: device\n          devices:\n            - /dev/nvme0n1 /dev/sdf\n")),(0,a.kt)("p",null,"Get full CR file ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/1.0.1/deploy/samples/shadow_device_cluster_cr.yaml"},"here"),"."),(0,a.kt)("h2",{id:"deploy-the-cluster"},"Deploy the cluster"),(0,a.kt)("p",null,"Follow the instructions ",(0,a.kt)("a",{parentName:"p",href:"/kubernetes-operator/Create-Aerospike-cluster#deploy-aerospike-cluster"},"here")," to deploy this configuration."))}d.isMDXComponent=!0}}]);