# Libria — bibliothèque virtuelle immersive

Prototype d'une bibliothèque web immersive destinée à la découverte de livres et, à terme, à la comparaison d'offres affiliées (papier, occasion, ebook et audio).

## Principes

- GitHub Pages compatible, sans backend requis pour la V1.
- Navigation horizontale comme une promenade devant les rayonnages.
- Même composition d'une salle à l'autre, avec ambiance visuelle adaptée à chaque univers.
- Catalogue piloté par des fichiers de données séparés du décor.
- Architecture multilingue dès le départ.
- Une œuvre possède un identifiant stable, puis des éditions/offres propres à chaque langue et marché.

## Prototype V1

La première démo contient :

- une salle en fausse 3D CSS ;
- plusieurs univers visuels ;
- des rayonnages défilants ;
- des livres interactifs ;
- une fiche détaillée au clic ;
- français / anglais ;
- une structure prévue pour les futures offres d'affiliation.

Le nom **Libria** est provisoire.

## GitHub Pages

Le prototype est volontairement en HTML/CSS/JavaScript pur afin de pouvoir être servi directement par GitHub Pages depuis la branche principale, sans workflow de déploiement.

Le workflow quotidien de mise à jour du catalogue sera ajouté séparément quand les sources de métadonnées et les partenaires d'affiliation seront définis, afin de respecter la contrainte d'une seule exécution GitHub Actions par jour.
