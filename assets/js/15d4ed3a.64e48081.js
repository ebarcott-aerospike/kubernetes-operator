"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[9594],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return t?r.createElement(k,i(i({ref:n},p),{},{components:t})):r.createElement(k,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1106:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),s=(t(7294),t(3905)),i=["components"],o={title:"Scaling Namespace Storage",description:"Scaling Namespace Storage"},c=void 0,l={unversionedId:"Scaling-namespace-storage",id:"version-2.0.0-rc1/Scaling-namespace-storage",isDocsHomePage:!1,title:"Scaling Namespace Storage",description:"Scaling Namespace Storage",source:"@site/versioned_docs/version-2.0.0-rc1/Scaling-namespace-storage.md",sourceDirName:".",slug:"/Scaling-namespace-storage",permalink:"/kubernetes-operator/Scaling-namespace-storage",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/versioned_docs/version-2.0.0-rc1/Scaling-namespace-storage.md",tags:[],version:"2.0.0-rc1",frontMatter:{title:"Scaling Namespace Storage",description:"Scaling Namespace Storage"}},p=[{value:"Aerospike Rack Awareness for Vertical Scaling",id:"aerospike-rack-awareness-for-vertical-scaling",children:[]},{value:"Create a new rack",id:"create-a-new-rack",children:[]},{value:"Update the <code>rackConfig</code> section",id:"update-the-rackconfig-section",children:[]},{value:"Apply the change",id:"apply-the-change",children:[]},{value:"Check the pods",id:"check-the-pods",children:[]}],u={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Scaling namespace storage (vertical scaling) is a bit complex. The Operator uses k8s StatefulSet for deploying Aerospike-cluster. StatefulSet uses PersistentVolumeClaim for providing storage. Currently a PersistentVolumeClaim cannot be updated. Hence the Operator can not provide a simple solution for vertical scaling."),(0,s.kt)("h2",{id:"aerospike-rack-awareness-for-vertical-scaling"},"Aerospike Rack Awareness for Vertical Scaling"),(0,s.kt)("p",null,"To perform vertical scaling, the Aerospike Rack Awareness feature can be applied."),(0,s.kt)("p",null,"For this example, we assume that cluster is deployed with the name ",(0,s.kt)("inlineCode",{parentName:"p"},"aerospike-cluster.yaml"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: asdb.aerospike.com/v1beta1\nkind: AerospikeCluster\nmetadata:\n  name: aerocluster\n  namespace: aerospike\n\nspec:\n  size: 2\n  image: aerospike/aerospike-server-enterprise:4.9.0.33\n\n  rackConfig:\n    namespaces:\n      - test\n    racks:\n      - id: 1\n        zone: us-central1-b\n        storage:\n          filesystemVolumePolicy:\n            cascadeDelete: true\n            initMethod: deleteFiles\n          volumes:\n            - name: workdir\n              aerospike:\n                path: /opt/aerospike\n              source:\n                persistentVolume:\n                  storageClass: ssd\n                  volumeMode: Filesystem\n                  size: 1Gi\n            - name: ns\n              aerospike:\n                path: /dev/sdf\n              source:\n                persistentVolume:\n                  storageClass: ssd\n                  volumeMode: Block\n                  size: 3Gi\n            - name: aerospike-config-secret\n              source:\n                secret:\n                  secretName: aerospike-secret\n              aerospike:\n                path: /etc/aerospike/secret\n        \n  aerospikeConfig:\n    service:\n      feature-key-file: /etc/aerospike/secret/features.conf\n    security:\n      enable-security: true\n    namespaces:\n      - name: test\n        memory-size: 6000000000\n        replication-factor: 2\n        storage-engine:\n          type: device\n          devices:\n            - /dev/sdf\n.\n.\n.\n")),(0,s.kt)("h2",{id:"create-a-new-rack"},"Create a new rack"),(0,s.kt)("p",null,"Now if we want to resize ",(0,s.kt)("inlineCode",{parentName:"p"},"/dev/sdf")," for namespace ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," then we have to create a new ",(0,s.kt)("inlineCode",{parentName:"p"},"rack")," inside ",(0,s.kt)("inlineCode",{parentName:"p"},"rackConfig")," with updated ",(0,s.kt)("inlineCode",{parentName:"p"},"storage")," config and remove the old rack."),(0,s.kt)("p",null,"The new rack can be created in same physical rack using existing ",(0,s.kt)("inlineCode",{parentName:"p"},"zone/region")," (if there is enough space) to hold new storage and old storage together."),(0,s.kt)("h2",{id:"update-the-rackconfig-section"},"Update the ",(0,s.kt)("inlineCode",{parentName:"h2"},"rackConfig")," section"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: asdb.aerospike.com/v1beta1\nkind: AerospikeCluster\nmetadata:\n  name: aerocluster\n  namespace: aerospike\n\nspec:\n  size: 2\n  image: aerospike/aerospike-server-enterprise:4.9.0.33\n\n  rackConfig:\n    namespaces:\n      - test\n    racks:\n      # Added new rack with id: 2. Old rack with id: 1 is removed\n      - id: 2\n        zone: us-central1-b\n        storage:\n          filesystemVolumePolicy:\n            cascadeDelete: true\n            initMethod: deleteFiles\n          volumes:\n            - name: workdir\n              aerospike:\n                path: /opt/aerospike\n              source:\n                persistentVolume:\n                  storageClass: ssd\n                  volumeMode: Filesystem\n                  size: 1Gi\n            - name: ns\n              aerospike:\n                path: /dev/sdf\n              source:\n                persistentVolume:\n                  storageClass: ssd\n                  volumeMode: Block\n                  size: 8Gi\n            - name: aerospike-config-secret\n              source:\n                secret:\n                  secretName: aerospike-secret\n              aerospike:\n                path: /etc/aerospike/secret\n\n  aerospikeConfig:\n    service:\n      feature-key-file: /etc/aerospike/secret/features.conf\n    security:\n      enable-security: true\n    namespaces:\n      - name: test\n        memory-size: 10000000000\n        replication-factor: 2\n        storage-engine:\n          type: device\n          devices:\n            - /dev/sdf\n.\n.\n.\n")),(0,s.kt)("h2",{id:"apply-the-change"},"Apply the change"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl apply -f aerospike-cluster.yaml\n")),(0,s.kt)("p",null,"This will create a new rack with ",(0,s.kt)("inlineCode",{parentName:"p"},"id: 2")," and updated ",(0,s.kt)("inlineCode",{parentName:"p"},"storage")," config. Old data will be migrated to new rack. Old rack will be removed gracefully."),(0,s.kt)("h2",{id:"check-the-pods"},"Check the pods"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl get pods -n aerospike\nNAME                READY   STATUS          RESTARTS   AGE\naerocluster-2-0     1/1     Running         0          3m6s\naerocluster-2-1     1/1     Running         0          3m6s\naerocluster-1-1     1/1     Terminating     0          30s\n")))}d.isMDXComponent=!0}}]);