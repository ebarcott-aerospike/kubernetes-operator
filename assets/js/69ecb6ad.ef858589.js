"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[188],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return m}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?t.createElement(g,i(i({ref:r},l),{},{components:n})):t.createElement(g,i({ref:r},l))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4981:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var t=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Version Upgrade",description:"Version Upgrade"},p=void 0,c={unversionedId:"Version-upgrade",id:"version-1.x.x/Version-upgrade",isDocsHomePage:!1,title:"Version Upgrade",description:"Version Upgrade",source:"@site/versioned_docs/version-1.x.x/Version-upgrade.md",sourceDirName:".",slug:"/Version-upgrade",permalink:"/kubernetes-operator/Version-upgrade",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/versioned_docs/version-1.x.x/Version-upgrade.md",tags:[],version:"1.x.x",frontMatter:{title:"Version Upgrade",description:"Version Upgrade"},sidebar:"version-1.x.x/docsSidebar",previous:{title:"Modify Aerospike cluster",permalink:"/kubernetes-operator/Aerospike-configuration-change"},next:{title:"Scaling",permalink:"/kubernetes-operator/Scaling"}},l=[{value:"Initiate the Upgrade",id:"initiate-the-upgrade",children:[]},{value:"Apply the change",id:"apply-the-change",children:[]},{value:"Check the pods",id:"check-the-pods",children:[]}],u={toc:l};function d(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Operator performs a rolling upgrade of the Aerospike cluster one node at a time.  A new node is created with the same pod configuration as the chosen node to upgrade. "),(0,o.kt)("p",null,"For this example assume that cluster is deployed using a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"aerospike-cluster.yaml"),"."),(0,o.kt)("h2",{id:"initiate-the-upgrade"},"Initiate the Upgrade"),(0,o.kt)("p",null,"To upgrade the Aerospike cluster change the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.image")," field in the aerocluster CR to the desired Aerospike enterprise server docker image."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: aerospike.com/v1alpha1\nkind: AerospikeCluster\nmetadata:\n  name: aerocluster\n  namespace: aerospike\nspec:\n  size: 2\n  image: aerospike/aerospike-server-enterprise:4.7.0.10\n  .\n  .\n")),(0,o.kt)("h2",{id:"apply-the-change"},"Apply the change"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl apply -f aerospike-cluster.yaml\n")),(0,o.kt)("h2",{id:"check-the-pods"},"Check the pods"),(0,o.kt)("p",null,"The pods will undergo a rolling restart."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl get pods -n aerospike\nNAME          READY   STATUS              RESTARTS   AGE\naerocluster-0-0     1/1     Running         0          3m6s\naerocluster-0-1     1/1     Running         0          3m6s\naerocluster-0-2     1/1     Running         0          30s\naerocluster-0-3     1/1     Terminating     0          30s\n")),(0,o.kt)("p",null,"After all the pods have restarted, use kubectl describe to get the status of the cluster. Check ",(0,o.kt)("inlineCode",{parentName:"p"},"image")," for all Pods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl -n aerospike describe aerospikecluster aerocluster\nName:         aerocluster\nNamespace:    aerospike\nKind:         AerospikeCluster\n.\n.\nStatus:\n  .\n  .\n  Pods:\n    aerocluster-0-0:\n      Aerospike:\n        Access Endpoints:\n          10.128.15.225:31312\n        Alternate Access Endpoints:\n          34.70.193.192:31312\n        Cluster Name:  aerocluster\n        Node ID:       0a0\n        Tls Access Endpoints:\n        Tls Alternate Access Endpoints:\n        Tls Name:\n      Host External IP:  34.70.193.192\n      Host Internal IP:  10.128.15.225\n      Image:             aerospike/aerospike-server-enterprise:4.7.0.10\n      Initialized Volume Paths:\n        /opt/aerospike\n      Pod IP:        10.0.4.6\n      Pod Port:      3000\n      Service Port:  31312\n")))}d.isMDXComponent=!0}}]);