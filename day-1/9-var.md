### Variables

```js
// Avant
var myVar = "ma variable";

// es6
let myVarLet = "ma variable";
const MY_CONST = "ma const";
```

Note:

- **let/const** est scopé par {}. **var** est scopé par les fonction
- **const** = constante, mais valeur interne d'un objet est modifiable
- **let** est plus strict que var. On a une erreur si on appel le let avant d'être définit
- Je préconise => **const** dès que possible, **let** si besoin de réassigner, bannir **var**.
