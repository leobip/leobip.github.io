---
layout: single
classes: wide
title: "🌳 Branching Model & 📌 Semantic Versioning in Git Workflows"
categories:
  - git
  - cicd
  - versioning
tags:
  - branching
  - git-flow
  - semantic-versioning
date: '2025-04-25 19:30:00'
---

Managing branches and releases efficiently is crucial for maintaining **code quality, traceability, and smooth deployments**. In this article, we’ll explain how to structure your Git workflow using **branches for different purposes** and how to apply **Semantic Versioning (SemVer)** to tag releases.

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/semantic-versioning-banner.jpeg' | relative_url }}" 
       style="max-width:100%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
  </figcaption>
</figure>

## 🌳 Branching Strategy

We adopt a simplified **Git Flow–inspired model**:

- **`main` branch** → Always reflects the latest **stable production-ready code**.  
- **`dev` branch** → Integration branch for ongoing development.  
- **`feature/*` branches** → Temporary branches for new features, merged back into `dev`.  
- **`hotfix/*` branches** → For urgent fixes, branched directly from `main`, then merged back into both `main` and `dev`.  

### Example Workflow

```mermaid
gitGraph
   commit id: "Init"
   branch dev
   checkout dev
   commit id: "Feature A start"
   branch feature/A
   commit id: "WIP A1"
   commit id: "WIP A2"
   checkout dev
   merge feature/A id: "Merge A"
   commit id: "Stabilization"
   checkout main
   merge dev id: "Release v1.0.0"
   branch hotfix/urgent
   commit id: "Hotfix"
   checkout main
   merge hotfix/urgent id: "Release v1.0.1"
   checkout dev
   merge hotfix/urgent

## 📌 Semantic Versioning (SemVer)

We use Semantic Versioning 2.0.0 format:

```bash
MAJOR.MINOR.PATCH
```

- MAJOR → Breaking changes (e.g., API change, backward-incompatible refactor).
- MINOR → New features, backward-compatible.
- PATCH → Bug fixes, backward-compatible.

### Examples

- 1.0.0 → Initial stable release.
- 1.1.0 → Adds new features without breaking existing functionality.
- 1.1.1 → Fixes a bug without changing functionality.

## 🏷 Tagging Releases in Git

Each release is tagged with its SemVer version:

```bash
# Tagging a release
git tag -a v1.0.0 -m "Release v1.0.0 - Initial stable release"
git push origin v1.0.0
```

This allows:

- CI/CD pipelines to build artifacts based on tags.
- Traceability of deployments.
- Easy rollback to previous versions.

---

## 🔗 Integration with CI/CD

- Development branch (dev) → triggers tests & static analysis (e.g., SonarQube).
- Main branch (main) → triggers build + deployment pipeline.
- Tags (vX.Y.Z) → trigger release pipelines (e.g., publishing Docker images, Helm charts).

---

### ✅ Conclusion

By combining a clear branching strategy with Semantic Versioning, we ensure:

- Predictable release cycles.
- Traceability of features and fixes.
- Alignment between Git workflow and CI/CD pipelines.

This model scales from small projects to enterprise environments and integrates seamlessly with tools like SonarQube, GitHub Actions, and ArgoCD.
