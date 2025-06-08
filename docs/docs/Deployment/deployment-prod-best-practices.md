---
title: CentaurOps architecture and best practices on Kubernetes
slug: /deployment-prod-best-practices
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

While CentaurOps offers flexible deployment options, deploying on a Kubernetes cluster is highly recommended for production environments.

Deploying on Kubernetes offers the following advantages:

* **Scalability**: Kubernetes allows you to scale the CentaurOps service to meet the demands of your workload.
* **Availability and resilience**: Kubernetes provides built-in resilience features, such as automatic failover and self-healing, to ensure that the CentaurOps service is always available.
* **Security**: Kubernetes provides security features, such as role-based access control and network isolation, to protect the CentaurOps service and its data.
* **Portability**: Kubernetes is a portable platform, which means that you can deploy the CentaurOps service to any Kubernetes cluster, on-premises or in the cloud.

CentaurOps can be deployed on cloud deployments like **AWS EKS, Google GKE, or Azure AKS**. For more information about deploying CentaurOps on AWS EKS, Google GKE, or Azure AKS, see the [CentaurOps Helm charts repository](https://github.com/langflow-ai/langflow-helm-charts).

## CentaurOps deployment

A typical CentaurOps deployment includes:

* **CentaurOps API and UI** – The CentaurOps service is the core component of the CentaurOps platform. It provides a RESTful API for executing flows.
* **Kubernetes cluster** – The Kubernetes cluster provides a platform for deploying and managing the CentaurOps service and its supporting components.
* **Persistent storage** – Persistent storage is used to store the CentaurOps service's data, such as models and training data.
* **Ingress controller** – The ingress controller provides a single entry point for traffic to the CentaurOps service.
* **Load balancer** – Balances traffic across multiple CentaurOps replicas.
* **Vector database** – If you are using CentaurOps for RAG, you can integrate with the vector database in Astra Serverless.

![CentaurOps reference architecture on Kubernetes](/img/langflow-reference-architecture.png)

## Environment isolation

It is recommended to deploy and run two separate environments for CentaurOps, with one environment reserved for development use and another for production use.


![CentaurOps environments](/img/langflow-env.png)

* **The CentaurOps development environment** must include the Integrated Development Environment (IDE) for the full experience of CentaurOps, optimized for prototyping and testing new flows.
* **The CentaurOps production environment** executes the flow logic in production and enables CentaurOps flows as standalone services.

## Why is it important to have separate deployments?

This separation is designed to enhance security, optimize resource allocation, and streamline management.

* **Security**
  * **Isolation**: By separating the development and production environments, you can better isolate different phases of the application lifecycle. This isolation minimizes the risk of development-related issues impacting the production environments.
  * **Access control**: Different security policies and access controls can be applied to each environment. Developers may require broader access in the IDE for testing and debugging, while the runtime environment can be locked down with stricter security measures.
  * **Reduced attack surface**: The runtime environment is configured to include only essential components, reducing the attack surface and potential vulnerabilities.
* **Resource allocation**
  * **Optimized resource usage and cost efficiency**: By separating the two environments, you can allocate resources more effectively. Each flow can be deployed independently, providing fine-grained resource control.
  * **Scalability**: The runtime environment can be scaled independently based on application load and performance requirements, without affecting the development environment.


