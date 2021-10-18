---
title: Install the Operator On Kubernetes
description: Install The Operator On Kubernetes
---

To begin, create a new Kubernetes cluster on the platform of your choice, and configure kubectl to use that cluster.

## Install the Operator Lifecycle Manager (OLM)

We recommend using [Operator Lifecycle Manager (OLM)](https://olm.operatorframework.io/]) to run and manage the Aerospike Kubernetes Operator in production environments. OLM is the preferred way to manage Kubernetes operators in production.

Install OLM on your Kubernetes cluster with the command:

```shell
operator-sdk olm install
```
## Use OLM to Install the Aerospike Kubernetes Operator

Create the `aerospike` namespace:

```shell
kubectl create namespace aerospike
```

Next, choose the scope of your Operator installation. You can install the Operator on:

* A single namespace
* Multiple namespaces
* All available namespaces

### Install on a Single Namespace

To install the Operator only on the `aerospike` namespace, run the Operator bundle with the command:

```shell
operator-sdk run bundle docker.io/aerospike/aerospike-kubernetes-operator-bundle:2.0.0-rc1 --namespace=aerospike
```

### Install on Multiple Namespaces

Use `--install-mode MultiNamespace=[namespace],[namespace],[etc]` to install the Operator on multiple namespaces:

```shell
operator-sdk run bundle docker.io/aerospike/aerospike-kubernetes-operator-bundle:2.0.0-rc1 --namespace=aerospike --install-mode MultiNamespace=[namespace],[namespace]
```

For example, to install the Operator on the namespaces `ns1` and `ns2` use the command:

```shell
operator-sdk run bundle docker.io/aerospike/aerospike-kubernetes-operator-bundle:2.0.0-rc1 --namespace=aerospike --install-mode MultiNamespace=ns1,ns2
```

### Install on All Namespaces

Use `--install-mode AllNamespaces` to install the Operator on all available namespaces:

```shell
operator-sdk run bundle docker.io/aerospike/aerospike-kubernetes-operator-bundle:2.0.0-rc1 --namespace=aerospike --install-mode AllNamespaces
```

## RBAC

For information on working with RBAC on multiple clusters, see [RBAC for other namespace](Multiple-Aerospike-clusters.md#rbac-for-other-namespaces).

## Verify the Operator is Running

Use `kubectl get csv -n aerospike` to verify the Operator's CSV is in the `Succeeded` phase.

```shell
$ kubectl get csv -n aerospike

NAME                                       DISPLAY                         VERSION     REPLACES   PHASE
aerospike-kubernetes-operator.v2.0.0-rc1   Aerospike Kubernetes operator   2.0.0-rc1              Succeeded

```

Next, use `kubectl get pod -n aerospike` to verify the Operator's pod is running.

```shell
$ kubectl get pod -n aerospike

NAME                                                              READY   STATUS      RESTARTS   AGE
5af02cb7676a864fa68cc875fb1bc64df2f1223ab355b4911792e9--1-vlltn   0/1     Completed   0          63s
aerospike-operator-controller-manager-55d45754bf-smzxc            2/2     Running     0          48s
ker-io-aerospike-aerospike-kubernetes-operator-bundle-2-0-0-rc1   1/1     Running     0          73s

```

## Check Operator Logs

If you need to view the Operator logs for any reason, use `kubectl -n aerospike logs -f [manager pod name] -c manager` to show the logs on your manager pod. To find the manager pod name, use `kubectl get pod -n aerospike` as shown above.

For example, the name of the manager pod in the previous example is `aerospike-operator-controller-manager-55d45754bf-smzxc`:

```shell

$ kubectl -n aerospike logs -f aerospike-operator-controller-manager-55d45754bf-smzxc -c manager

2021-10-15T19:09:58.058Z	INFO	controller-runtime.metrics	metrics server is starting to listen	{"addr": "127.0.0.1:8080"}
2021-10-15T19:09:58.062Z	INFO	setup	Init aerospike-server config schemas

2021-10-15T19:09:58.071Z	DEBUG	schema-map	Config schema added	{"version": "4.7.0"}
2021-10-15T19:09:58.072Z	INFO	aerospikecluster-resource	Registering mutating webhook to the webhook server
2021-10-15T19:09:58.073Z	INFO	controller-runtime.webhook	registering webhook	{"path": "/mutate-asdb-aerospike-com-v1beta1-aerospikecluster"}
2021-10-15T19:09:58.073Z	INFO	controller-runtime.builder	skip registering a mutating webhook, admission.Defaulter interface is not implemented	{"GVK": "asdb.aerospike.com/v1beta1, Kind=AerospikeCluster"}
2021-10-15T19:09:58.073Z	INFO	controller-runtime.builder	Registering a validating webhook	{"GVK": "asdb.aerospike.com/v1beta1, Kind=AerospikeCluster", "path": "/validate-asdb-aerospike-com-v1beta1-aerospikecluster"}
2021-10-15T19:09:58.073Z	INFO	controller-runtime.webhook	registering webhook	{"path": "/validate-asdb-aerospike-com-v1beta1-aerospikecluster"}
2021-10-15T19:09:58.074Z	INFO	setup	Starting manager
I1015 19:09:58.074722       1 leaderelection.go:243] attempting to acquire leader lease aerospike/96242fdf.aerospike.com...


```
