module.exports = {
    "extends": ["google", "airbnb"],

    "rules": {
        //рабочие правила
        "one-var": ["error", "always"],
        "indent": ["error", 4],
        "strict": ["error", "global"]
    },
    "globals": {
        "angular": true,
    }
};