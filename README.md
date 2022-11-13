# JavaScript :: New Generations
![](https://img.shields.io/badge/by-Alejandro.Fuentes-informational?style=flat&logoColor=white&color=cdcdcd)
![](https://img.shields.io/badge/Editor-Visual_Studio_Code-informational?style=flat&logo=visual-studio-code&logoColor=white&color=007ACC)
![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=F7DF1E)

---


## :: use 'Glifo' or 'Glypg' in our code
A [glypg][link-wiki-glyph] is a term used in typography for the visual representation of one or more characters.
Has many fonts that do it, bur if we want add  this tipe of font in our enviroment of codding, we can use next font [fira code][link-github-firacode].

## :: use documentation in our code
In our coding, we can use something block tags, that after, this annotations can be convert in files htmls with descrition the our functions or apis.

```
# some examples of block tags:

@author
@class
@constant
...
```

[JSDoc][link-jsdoc] is a api that do it, this service do scanning our code and when find the block tags, render in files html.
This API can be install in our projects, for more explanation visit him repository [JSDoc github][link-github-jsdoc]

```shell
# 👇️ executing jdoc in our file
jsdoc my-file-with-annotation-jsdoc.js
```

Plugin for [VSCode][link-vscode] is [Document this][link-github-plugin-documentthis]. After of installed, whe can click with rihgt button over function, and select of floting menu *Document this*, and the plugin add for us the sections of comment.

## :: use 'Linters' in our project.
This tools, do searching in our code for error o warning, and show us.
[ES Lint][link-eslint] is a linter open source for javascript, your capacity is bigger, bur him configuration can be tricky. 

In file `.eslintrc` is where set all rules, when some rules are not met, is configured some alert of seberity how to warning, alert or error. Next we do install with [yarn][link-yarn] and configure ussing [npx][link-npx]:

```shell
# 👇️ for install
yarn add eslint --dev

# 👇️ for config
npx eslint --init
```
Now, we has a new file `.eslintrc.json` (because when we configurated, selection how format the of file *json*)

```shell
# 👇️ executing our linter
npx eslint <file-javascript.js>
```

Eslint has use of `--fix` flag for correction without human intevertion.

```shell

npx eslint .\src\*.js --fix
```

For create config file of ESlint, is next command inner console:

```shell

npm init @eslint/config

√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ What format do you want your config file to be in? · JSON

Successfully created .eslintrc.json file in \LABS\JAVASCRIPT\JS-NextGeneration\Testing\eslint

```

We can use other extends where ESLint has configuration already available, examples: `airbnb-base`, `eslint:recommended`, and so on.

```shell
# 👇️ install airbnb config

npm install --save eslint-config-airbnb
```

## :: use 'yarn' how package manager.
[Yarn][link-yarn] is very quicly when install dependencies in our projects.

```shell
# 👇️ install yarn cli globally
npm install -g yarn

# 👇️ get package version
yarn --version
```

## :: NOTE, some curiosity about how the version formed?

>  :neckbeard: In this link [semantic versioner for npm][link-semantic-version-npm] we can see how the version are reference for `package.json`.


> :page_with_curl: Wy yarn?, [one explanation][link-yarn-explanation].

> :sunglasses: Yarn and NPM, two package manager, but who is the dad? for install yarn, one way is:
> 
> ```shell
> npm install -g yarn
> ```


<!-- references, link, on so on -->
[link-wiki-glyph]: https://en.wikipedia.org/wiki/Glyph

[link-github-firacode]: https://github.com/tonsky/FiraCode
[link-github-jsdoc]: https://github.com/jsdoc/jsdoc
[link-github-plugin-documentthis]: https://github.com/oouo-diogo-perdigao/vscode-docthis

[link-jsdoc]: https://jsdoc.app/
[link-vscode]: https://code.visualstudio.com/
[link-yarn]: https://yarnpkg.com/
[link-npx]: https://www.npmjs.com/package/npx
[link-eslint]: https://eslint.org/
[link-semantic-version-npm]: https://www.npmjs.com/package/semver
[link-yarn-explanation]: https://engineering.fb.com/2016/10/11/web/yarn-a-new-package-manager-for-javascript/
