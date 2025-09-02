---
title: Python - Tools Library
layout: single
classes: wide
theme: python
description: Useful tools/functions I developed in Python
date: '2024-12-10'
thumbnail: "/images/projects/2024-12-10-python-library-small.webp"
github_url: https://github.com/leobip/json-full-search.git
image: "/images/projects/2024-12-10-python-library.png"
---

## JSon Full Search 
![json-python](/images/projects/2024-12-10-python-json-small.jpg)
### Descripción:
Tal como el nombre lo indica es una función para parsear un archivo json y extraer la clave suministrada, ya sea un valor o un diccionario en el caso de diccionarios anidados, aqui explicare el modo de uso y las mejoras que le vaya realizando.
Es una funcion recursiva que puede recorrer archivos json, diccionarios anidados y extraer un valor o incluso diccionario/s anidados segun una clave suministrada.

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
### Uso:
- Por ejemplo en el codigo de ejemplo anterior, podemos extraer el valor de la clave: city:  "Anytown", tambien podemos extraer el diccionario anidado address: { ...
- Pendientes: 
	- Contador en el caso de claves repetidas, ej: name
	- Identificador de clave para el caso anterior

### Características

- **Tecnología:** Python


Github: https://github.com/leobip/json-full-search.git
