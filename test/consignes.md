### Consignes

Réaliser une application qui :

- a un **Header**

  - Ce Header doit afficher, un lien vers **accueil**, et un lien vers la page **/me**

- a un **Footer**

  - Ce footer doit indiquer votre nom

- a une **HomePage**

  - Cette page doit lister les bars. Ceux-ci sont récupérés depuis l'API https://control-server.now.sh/
  - Lorsque l'on clique sur "_En savoir plus_" on est amené sur la page du bar concerné

- a une page **BarPage** listant le bar courant. L'url de cette page doit être **/bar/[ID_DU_BAR]** (ex: **/bar/1**)

  - Cette page doit lister les informations du bar
  - Elle doit également afficher un compteur de like, ce compteur est lié au bar. On peux ajouter un like au bar.

- a une page **MePage**. L'url de cette page doit être **/me**
  - Cette page affiche un texte récupéré depuis l'API https://control-server.now.sh/me
