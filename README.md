# Standalone component example

## Conveniences

+ Install `nodejs` on your machine
+ Install `editorconfig` and enable in your text editor or IDE
+ Add an configuration to your `git config --global core.excludesfile ~/.gitignore_global`

  `~/.gitignore_global`:

  ```
  ...
  node_modules/
  *.sw*
  ...
  ```

  The three dots `...` means what you have previously or foward the instructions above.

+ Install `gulp` global on your environment

## Dependencies

+ Nodejs
+ Gulp
+ Git

## Installation

```
[sudo] npm i
``` 

## Usage

This command run default tasks registered on `gulp` default

```
[sudo] gulp
```

### Lint

Run code style checker to maintain the pattern of code

```
[sudo] gulp lint
```

### Tests

Run tests `tdd` or/and `bdd`

```
[sudo] gulp tests
```

### Tests end-to-end

Run tests end-to-end

```
[sudo] gulp tests-e2e
```

### Scripts

Browserify js files

```
[sudo] gulp scripts
```

### Styles

Compile stylus files

```
[sudo] gulp styles
```

### Connect

Serve application files

```
[sudo] gulp connect
```

### Watch

Watch files and run these tasks `lint, tests, scripts, styles`

```
[sudo] gulp watch
```

## File structure

+ js - source code editable
+ dist - product of source code
+ styles - source code editable
+ css - product of source code
+ test - test js source code modules
  + tdd - unit tests
  + bdd - behavior tests
  + e2e - end to end tests
