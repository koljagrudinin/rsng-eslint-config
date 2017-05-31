module.exports = {
    "extends": ["google", "airbnb"],

    "rules": {
        //рабочие правила
        "one-var": ["error", "always"],
        "indent": ["error", 4],
        "strict": ["error", "global"],
        "no-var":0,
        "max-len":["error", 120],
        "no-plusplus":0,
    },
    "globals": {
        "angular": true,
        "_":true
    }
};