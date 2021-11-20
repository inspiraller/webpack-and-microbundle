# How to load a microbundle into webpack
***Note: This repo uses pnpm, but you can use npm or yarn if desired.***

## 1. git clone this repo to your local computer

**ssh**
```
git clone git@github.com:inspiraller/webpack-and-microbundle.git
```

**https**
```
git clone https://github.com/inspiraller/webpack-and-microbundle.git
```

## 2. open a terminal and install dependencies for microbundle and run
```
cd mymicrobundle
pnpm i
npm run dev
```

## 2. Open a 2nd terminal and Install dependencies for webpack-loads-microbundle and run
```
cd ../webpack-loads-microbundle
pnpm i
npm run dev
```

## Load into webbrowser to see working solution
- http://localhost:9001/

```
Hello
Session = some session value
```

done !

---

# optional - loading in peer dependencies from the microbundle
** webpack.config.js**
```javascript
resolve: {
  alias: {
    // vanillia example of loading in a barebones microbundle
    '@mymicrobundle': path.resolve(__dirname, '../mymicrobundle/dist'),

    // This is a peer dependency of the main app,
    // Force 'react' and 'react-dom' to load from this repo
    react: path.resolve('./node_modules/react'),
    'react-dom': path.resolve('./node_modules/react-dom'),

    // example missing module - fixes - Cannot find module 'p-queue/dist'
    'p-queue/dist': path.resolve('../../dist')
  },
},
```
