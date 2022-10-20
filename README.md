# Studio Ghibli restAPI

### Use for importing information about Studio Ghibli Movies
---

## Get

- base api url: 
  - /films/
- how to access endpoints:
  - to get films: 
    - /films/
  - to get by title: 
    - /films/title/${title}
  - to get by ID: 
    - /films/id/${id}
---

## Create

![create](./img/create.png)

- send post request to endpoint "/"

---

## Update

![edit](./img/edit.png)

- send put request to endpoint "/films/id"
---

## Delete

![delete](./img/delete.png)

- send delete request to endpoint "/films/id"
---

- [ ] Deploy
- [ ] finish paths with actual URL

---
##### Made with Mongoose, Express, and JavaScript