---
title: SonarQube & SonarLint for Code Analysis
layout: project
theme: environmet
date: '2025-03-20 21:55:15'
image: "/images/projects/2025-03-20-sonarqube.png"
---

# SonarQube & SonarLint

## Introduction

### What is SonarQube?

[SonarQube](https://www.sonarqube.org/) is a powerful static code analysis tool that helps developers identify bugs, security vulnerabilities, and code smells in their projects. It provides detailed insights to improve code quality and maintainability.

SonarQube is available in different editions:

- **Community Edition** (Free) – Open-source version with essential static analysis features.
- **Developer Edition** – Adds advanced language support and branch analysis.
- **Enterprise Edition** – Includes portfolio management and governance features.
- **Data Center Edition** – High availability and scalability for large teams.

For this guide, we will use the **Community Edition**.

### What is SonarLint?

[SonarLint](https://www.sonarlint.org/) is an IDE plugin that provides real-time linting and code analysis. It helps developers catch issues early in the development process, ensuring consistent and high-quality code. It can be confiugured to work alone or with connection to SonarQube profiles ), I will explain it later.

---

## Database Support in SonarQube

### Embedded Database (H2)
By default, SonarQube **Community Edition** comes with an embedded **H2 database**. However, this database is only intended for **evaluation and personal/local usage**, as it is **not recommended for production** due to size & data scalability limitations.

### Supported External Databases
For a **stable and production-ready** deployment, SonarQube supports the following databases:

- **PostgreSQL** (Recommended)
- **Microsoft SQL Server**
- **Oracle Database**

#### SonarQube Database Configuration Guides:
- https://docs.sonarsource.com/sonarqube-server/latest/setup-and-upgrade/install-the-server/installing-the-database/
## Installing SonarQube Locally  

To set up SonarQube locally, we will use Docker Compose, considering future additions of tools and services to the local environment. This setup allows us to configure and manage multiple services efficiently from a `docker-compose.yaml` file in the root directory.  
For demonstration purposes, I will also add a `Dockerfile` inside the `sonarqube/` folder so you can explore the installation process using this approach.  
Docker makes it easy to run SonarQube without complex configurations.  **

### Bonus: **HELM** - Installation with PostgreSQL Included  
For Kubernetes users, SonarQube can be installed using Helm with a **PostgreSQL database included**. Check out the official Helm package:  
🔗 [SonarQube Helm Chart](https://artifacthub.io/packages/helm/sonarqube/sonarqube)  


### Folder Structure:

```bash
local-dev-environment/
│
├── sonarqube/                  # SonarQube setup
│   ├── conf/                   # Configuration files
│   ├── data/                   # Data storage
│   ├── logs/                   # Log files
│   ├── extensions/             # Plugins and extensions
│   ├── Dockerfile              # SonarQube Dockerfile
│
├── docker-compose.yaml         # Docker Compose for multiple services
...
```



* Dockerfile 

```
FROM sonarqube:community
LABEL maintainer="Your Name <your.email@example.com>"

# Set working directory
WORKDIR /opt/sonarqube

# Expose necessary ports
EXPOSE 9000

# Copy configuration files if needed
COPY conf/ sonar.properties /opt/sonarqube/conf/

# Run SonarQube
CMD ["bin/run.sh"]

```


* docker-compose.yaml (at project root)

```

services:
  sonarqube:
    build: ./sonarqube
    container_name: sonarqube
    ports:
      - "9000:9000"
    environment:
      - SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true
    volumes:
      - ./sonarqube/data:/opt/sonarqube/data
      - ./sonarqube/logs:/opt/sonarqube/logs
      - ./sonarqube/extensions:/opt/sonarqube/extensions
    restart: unless-stopped

```


### Running SonarQube
Once the files are in place, follow these steps to start SonarQube:

* Build the SonarQube image

```
docker-compose build

```


* Start the SonarQube container

```
docker-compose up -d

```


* Access SonarQube UI

		Open http://localhost:9000 in your browser.

* Login Credentials

		Username: admin
		Password: admin
