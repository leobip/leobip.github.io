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

### Database Support in SonarQube
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
* Prerequisite:
Before setting up SonarQube, ensure that Docker & docker-compose is installed on your machine. You can find the complete installation guide on the official Docker website, Docker Installation Guide:  https://docs.docker.com/engine/install/

* SonarQube Installation

To deploy SonarQube locally, we will use Docker Compose. This approach allows for future integration of additional tools and services within the local development environment. Using Docker Compose simplifies service configuration and management through a docker-compose.yaml file located in the project’s root directory.

Docker significantly simplifies the process of running SonarQube without requiring complex manual configurations.
For reference, the SonarQube page on Docker Hub (https://hub.docker.com/_/sonarqube)  provides links to repositories with example Dockerfile and docker-compose.yaml configurations, and instructions to install and run SonarQube with simplest command like:

```
docker run --name sonarqube-custom -p 9000:9000 sonarqube:community
```
You can then browse to http://localhost:9000 or http://host-ip:9000 in your web browser to access the web interface.


### Bonus: **HELM** - Installation with PostgreSQL Included  
For Kubernetes users, SonarQube can be installed using Helm with a **PostgreSQL database included**. Check out the official Helm package:  (here you can find different versions at Artifact Hub)
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
│
├── docker-compose.yaml         # Docker Compose for multiple services
...
```


* docker-compose.yaml (at project root)

```
services:
  sonarqube:
    image: sonarqube:community # We are using the latest community version, it could also be the lts-community -(Long Term Support)
    restart: unless-stopped  # 🔄 Automatically restarts after a system reboot
    depends_on:
      - sonar_db
    environment:
      SONAR_JDBC_URL: jdbc:postgresql://sonar_db:5432/sonar
      SONAR_JDBC_USERNAME: sonar
      SONAR_JDBC_PASSWORD: sonar
    ports:
      - "9001:9000"
    volumes:
      - sonarqube_conf:/opt/sonarqube/conf
      - sonarqube_data:/opt/sonarqube/data
      - sonarqube_extensions:/opt/sonarqube/extensions
      - sonarqube_logs:/opt/sonarqube/logs
      - sonarqube_temp:/opt/sonarqube/temp

  sonar_db:
    image: postgres:13
    restart: unless-stopped  # 🔄 Automatically restarts after a system reboot
    environment:
      POSTGRES_USER: sonar
      POSTGRES_PASSWORD: sonar
      POSTGRES_DB: sonar
    volumes:
      - sonar_db:/var/lib/postgresql
      - sonar_db_data:/var/lib/postgresql/data

volumes:
  sonarqube_conf:
  sonarqube_data:
  sonarqube_extensions:
  sonarqube_logs:
  sonarqube_temp:
  sonar_db:
  sonar_db_data:

```

### Automatic Backup of the SonarQube Database
Even though we configured restart: unless-stopped, ensuring that data persists after a reboot, in our local environment, it's good practice to have a backup strategy. Below is a solution using a backup service.

#### Adding a Backup Service
* Add this code to the docker-compose.yaml 

```
  sonar_backup:
    image: postgres:13
    depends_on:
      - sonar_db
    volumes:
      - sonarqube_data:/opt/sonarqube/data
    entrypoint: ["/bin/sh", "-c", "while true; do /opt/sonarqube/data/backup_db.sh; sleep 86400; done"]
```


* Backup Script

	Create the following script inside sonarqube/data/backup_db.sh:


```
#!/bin/bash

# Configuration
BACKUP_DIR="/opt/sonarqube/data/backups"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_FILE="$BACKUP_DIR/sonarqube_db_$TIMESTAMP.sql"

# Create backup directory if it does not exist
mkdir -p $BACKUP_DIR

# Perform PostgreSQL backup
PGPASSWORD="sonar" pg_dump -h sonar_db -U sonar -d sonar > $BACKUP_FILE

# Clean up old backups (optional, keep only the last 5 backups)
ls -tp $BACKUP_DIR | grep -v '/$' | tail -n +6 | xargs -I {} rm -- "$BACKUP_DIR/{}"

echo "Backup completed: $BACKUP_FILE"
```


* Grant Execution Permission

	Run the following command to make the script executable:

```
chmod +x sonarqube/data/backup_db.sh
```

### Conclusion

* SonarQube and PostgreSQL are configured with persistent storage.

* Containers automatically restart unless manually stopped.
 
* A backup service is set up to create database backups automatically.

This setup ensures a robust SonarQube environment for local development. 🚀


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
![compose-creation](/images/projects/2025-03-20-docker-compose-creation.jpg)


* Access SonarQube UI

		Open http://localhost:9001 in your browser.


![sonar-login](/images/projects/2025-03-20-sonar-login.jpg)


* Login Credentials

		Username: admin
		Password: admin
