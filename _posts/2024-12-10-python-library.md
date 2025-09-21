---
layout: single
classes: wide
title: 🐍 PYTHON - Tools Library
categories:
  - Layout
  - python
  - help-tools
tags:
  - edge case
---


<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/2024-12-10-python-library.png' | relative_url }}" 
       style="max-width:100%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
  </figcaption>
</figure>

## Introduction

In this post, **Python Tools Library**, I’ll be collecting and sharing tools that I’ve developed to make my day-to-day work easier, cover specific needs, or simply explore ideas that might simplify common tasks.  

The goal is to share knowledge in a practical way. All tools will be stored in the **same GitHub repository**, and the blog will indicate which tool was added most recently so readers can easily track updates.  

---

## JSon Full Search

<figure style="display: flex; flex-direction: column; align-items: center;">
  <img src="{{ '/assets/images/2024-12-10-python-json-small.webp' | relative_url }}" 
       style="max-width:60%; height:auto;">
  <figcaption style="margin-top: 0.5em; font-style: italic;">
    Image generated with AI (custom design).
  </figcaption>
</figure>

### Description

As the name suggests, this is a function designed to parse a JSON file and extract the value of a given key. It works recursively, which means it can traverse nested dictionaries and retrieve either a single value or an entire dictionary depending on the requested key.  

This makes it especially useful when working with deeply nested JSON structures. Here I’ll explain how to use it and document future improvements.  

### Example JSON  

```json

{
    "name": "John Doe",
    "age": 30,
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA",
        "country": {
            "name": "United States",
            "code": "US"
        }
    },
    "email": "john.doe@example.com",
    "phone_numbers": [
        {
            "type": "home",
            "number": "555-555-5555"
        },
        {
            "type": "work",
            "number": "555-555-5556"
        }
    ],
    "employment": {
        "job_title": "Software Engineer",
        "department": {
            "name": "Engineering",
            "location": {
                "building": "HQ",
                "floor": 5
            }
        }
    }
}

```

### Usage

From the example above, you can extract the value of the key city: "Anytown".
You can also extract the full nested dictionary address: { ... }.

### Pending features

- Counter for cases with duplicate keys (e.g., multiple name fields).
- Key identifiers to handle repeated keys.

### Features

- **Tecnology:** Python

🔗 GitHub Repository: [python-custom-tools](https://github.com/leobip/python-custom-tools.git)
