# Typescript

- Built by Microsoft
- Superset of Javascript -
  so any valid javascript code is a valid typescript code but not necessarily the other way around.
- Type-checking
- Controlled development environment
- Support for classes so we can use OOPS (encapsulation, inheritance etc.)
- Supports es6 syntax
- It's used for development and it transpiles to Javascript because that is what Javascript Engines understand
- To use Typescript we need to first install it.
  1. install [node/npm](https://nodejs.org/en/download)
  2. install typescript ( -g for global, if you prefer)
     > npm i -g typescript

## Generate tsconfig.json file

```
> tsc --init
```

## Common config options

```
{
    "compilerOptions": {
        "target": "es2016",
        "rootDir": "./src",
        "outDir": "./dist",
        "strict": true,
        "noImplicitAny": true,
    }
}
```

## You can avoid restarting/rerunning tsc binary by using --watch / -w flag

```
> tsc <path_to_the_ts_file> --watch / -w
```

## Run below command to transpile all .ts files to .js

It is only possible if you have tsconfig.json file with "rootDir" and "outDir" config options set.

```
> tsc
```

## See Live changes from TS to JS

When TS file is saved it writes the content to the JS file to which nodemon is watching the changes for.

<small>
Below steps can be performed for a single file because nodemon watches single file by default i.e. index.js or the file specified.
</small>
<br/><br/>

1. Run typescript file in watch mode

```
> tsc src/variableTypes.ts --outDir dist -w
```

2. Run the corresponding Javascript file to see the changes
   <small> (you can download _nodemon_ using > **npm i nodemon**) </small>

```
> nodemon variableTypes.js
```

## Run from npm script

```
> npm start --file=enums
```

"file" is an argument that gets passed to scripts in **package.json**.
Arguments are accessed using "%npm_config\_<variable_name>%"

```
"scripts": {
    "ts-transpile": "tsc src/%npm_config_file%.ts --outDir dist -w",
    "prestart": "npm run ts-transpile",
    "start": "nodemon dist/%npm_config_file%.js"
}
```
