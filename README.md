# Chicken Call

Mini-jeu d'anglais inspiré du spec "Chicken Call", adapte pour un site statique deployable sur GitHub Pages.

## Lancer en local

Ouvre simplement [index.html](/Users/loulouge/Git/chicken-call/index.html) dans un navigateur.

Si tu veux un petit serveur local:

```bash
python3 -m http.server 8080
```

Puis ouvre `http://localhost:8080`.

## Contenu

- [index.html](/Users/loulouge/Git/chicken-call/index.html): structure de l'interface
- [styles.css](/Users/loulouge/Git/chicken-call/styles.css): direction artistique et responsive
- [game.js](/Users/loulouge/Git/chicken-call/game.js): logique complete du jeu

## Gameplay

- Deplacement clavier `ZQSD`, `WASD` ou fleches
- Interaction avec `E`
- Indice avec `H`
- Plusieurs manches de vocabulaire
- Pile de poules portees au-dessus du joueur
- Depot au poulailler avec validation bonne/mauvaise reponse

## GitHub Pages

Le projet ne demande aucun build. Il peut etre publie tel quel depuis la racine du depot.
