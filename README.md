# NDAO ATAKALO API
### Inona izy ty (c'est quoi) ?
<p> <img src="img/malagasy.png" width="30" height="20" /> MG: Rehefa miha-lehibe isika dia mety tsy te-hilalao an'ilay<br>
kilalaontsika, na koa ny zaza mety leo an'ilay kilalaony ka te hifanakalo</p>

<p><strong>Ndao atakalo API</strong> dia API Rest ahafahana manantanteraka izany fifanankalozana izany <br>


<p>-----------------------------------------*+*--------------------------------------------</p>

<p> <img src="img/france.png" width="30" height="20" /> FR: En vieillissant, nous ne voudrons peut-être pas jouer avec <br>
notre jouet, ou l'enfant peut s'ennuyer de son jouet et vouloir l'échanger</p>

<p><strong>Ndao atakalo API</strong> est une API REST qui permet d'effectuer cet échange <br>


<div id="top"></div>

### Built With

Les technologies utilisées : 

* Nodejs / express
* MongoDB

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Les étapes à suivre afin de l'utiliser

### Prerequisites
Installer nodejs
* node & npm
  ```sh
  npm install npm@latest -g
  ```

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/diamondrarktvo/Ndao-atakalo-API
   ```
2. Place dans le dossier
   ```sh
   cd api
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Démarre le serveur
   ```sh
   nodemon server || node server
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Les routes : 
### GET UN SEUL échange (par id)
  ```
0. GET http://<host>:3030/api/v1/exchange/:id 
   ```
   => RETOUR : 
   ```
   {
      "_id": id de l'échange,
      "userId": id du créateur de cet échange,
      "user": nom du créateur de cet échange,
      "contact": contact du créateur de cet échange,
      "exchangeTo": jouet au quel il veut échanger contre son jouet,
      "imageUrl": image de son jouet,
      "status": (0 | 1) active | desactive,
   }
   ```
   ### GET TOUS LES ECHANGES
  ```
1. GET http://<host>:3030/api/v1/exchange/list
   ```
   => RETOUR : [ARRAY]
   ```
   {
      "_id": id de l'échange,
      "userId": id du créateur de cet échange,
      "user": nom du créateur de cet échange,
      "contact": contact du créateur de cet échange,
      "exchangeTo": jouet au quel il veut échanger contre son jouet,
      "imageUrl": image de son jouet,
      "status": (0 | 1) active | desactive,
   }
   ```
   ### CREER UN ECHANGE
   ```
2. POST http://<host>:3030/api/v1/exchange
  content-type: multipart/form-data
  Authorization: Bearer <token>
{
      "user": nom du créateur de cet échange,
      "contact": contact du créateur de l'échange,
      "exchangeTo": jouet au quel il veut échanger contre le jouet,
      "imageUrl": image de du jouet,
      "status": (0 | 1) active | desactive,
}
```
=> RETOUR:
```
{
    "message": "Echange créé avec succès!"
}
```
### UPDATE UN ECHANGE
   ```
3. PUT http://<host>:3030/api/v1/exchange/:id (id de l'échange)
  content-type: multipart/form-data
  Authorization: Bearer <token>
{
      "userId": id du créateur de cet échange,
      "user": nom du créateur de cet échange,
      "contact": contact du créateur de l'échange,
      "exchangeTo": jouet au quel il veut échanger contre le jouet,
      "imageUrl": image de du jouet,
      "status": (0 | 1) active | desactive,
}
   =============> OU LES CHAMPS A MODIFIER <=============
{
      "userId": id du créateur de cet échange, (**required**)
      "user": nom du créateur de cet échange,
      "contact": contact du créateur de l'échange
}
```
=> RETOUR:
```
{
    "message": "Echange modifié avec succès!"
}
```
### SUPPRIME UN ECHANGE
   ```
4. DELETE http://<host>:3030/api/v1/exchange/:id (id de l'échange)
  Authorization: Bearer <token>
  
```
=> RETOUR:
```
{
    "message": "Echange supprimer avec succès!"
}
```

##LOGIN && SIGN UP
### login
```
5. POST http://<host>:3030/api/v1/auth/signin
  content-type: application/json
{
      "email": email de l'utilisateur,
      "password": mot de passe de l'utilisateur
}
```
=> RETOUR:
```
{
    "userId": id de l'utilisateur,
    "email": email de l'utilisateur",
    "token": token 
}
```
### Signup
```
6. POST http://<host>:3030/api/v1/auth/signup
  content-type: application/json
{
      "email": email de l'utilisateur,
      "password": mot de passe de l'utilisateur
}
```
=> RETOUR:
```
{
    "message": "Utilisateur créer avec succès!"
}
```

<p align="right">(<a href="#top">back to top</a>)</p>

