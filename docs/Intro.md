---
title: Aerospike Kubernetes Operator
description: Learn about the Aerospike Kubernetes Operator.
slug: /
---


The Aerospike Kubernetes Operator automates the deployment and management of Aerospike Enterprise clusters on Kubernetes. The Operator provides a controller which manages a Custom Resource Definition (CRD) to extend the Kubernetes API for Aerospike Enterprise clusters. Aerospike Enterprise cluster deployment and life cycle management are performed by updating an Aerospike Enterprise cluster Custom Resource (CR).

## What features does it provide?

The goal of the Operator is to give you the ability to deploy multi-node Aerospike Enterprise clusters, recover automatically from node failures, scale up or down automatically as load changes, ensure nodes are evenly split across racks or zones, automatically update to new versions of Aerospike Enterprise and manage configuration changes in your clusters.


The Operator supports the following capabilities:
 * Deploy Aerospike Enterprise clusters
 * Scale up and down existing Aerospike Enterprise clusters
 * Version upgrade and downgrade
 * Configure persistent storage and resource allocation
 * Standardize and validate configurations
 * Cluster security management
 * Attach custom sidecars and init containers


## Architecture

The Aerospike Kubernetes Operator has a custom controller (written in Go) that allows us to embed specific lifecycle management logic to effectively manage the state of an Aerospike Enterprise cluster.  It does so by managing a Custom Resource Definition (CRD) to extend the Kubernetes API for Aerospike Enterprise clusters.  Regular maintenance to the Aerospike Enterprise cluster deployment and management can be performed by updating an Aerospike Enterprise cluster Custom Resource (CR).

The Operator is deployed with StatefulSet and operates as a headless service to handle the DNS resolution of pods in the deployment.  Kubernetes StatefulSets is the workload API object that is used to manage stateful applications.  It is important because it manages the deployment and scaling of a set of Pods, and provides guarantees about the ordering and uniqueness of these Pods (e.g. as unique addressable identities).

A layered approach is taken to orchestration which allows the Operator to manage Aerospike Enterprise Cluster tasks outside of the Aerospike Enterprise deployment.
