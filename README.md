# eslint-plugin-kibibit

ESLint rules for Kibibit projects

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-kibibit`:

```
$ npm install eslint-plugin-kibibit --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-kibibit` globally.

## Usage

Add `kibibit` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "kibibit"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "kibibit/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





