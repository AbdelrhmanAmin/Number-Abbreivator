# Number-Abbreivator
Abbreviate those long bad boys.

I was inspired to build this by this [Number-abbreviate-package](https://www.npmjs.com/package/number-abbreviate)

The function takes your input and evaulate if it should be abbreviated to a shorter syntax.

`
input: 1000,
output: 1k
`

`
input: 50000,
output: 50k
`

`
input: 50000000000000,
output: 50t
`

`
input: -10000000,
output: -10m
`

# how to use?
1- It is not an NPM package, so feel free to copy the content of [index.js](https://github.com/AbdelrhmanAmin/Number-Abbreivator/blob/main/index.js) into a file.

2- import it `import abbreviate from "YOUR_FILE_NAME"`.

3- use it! `abbreviate(100000000000000000000000000000000000)`

4- Surprise! Surprise! `output: '⭐⭐INFINITY⭐⭐'`
