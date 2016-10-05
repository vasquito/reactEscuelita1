Ref: 
https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html
https://www.codementor.io/reactjs/tutorial/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack
https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement

1) Crear carpeta ejemplo2

2) Crear un nuevo proyecto 
npm init
git init

3) Instalar el react 
npm install --save react react-dom

4) Instalar el webpack para el proyecto
npm install --save-dev webpack
npm install webpack-dev-server -g

5) Compilador es6
npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react

6) Crear archivos principales
touch index.html hello.jsx world.jsx
touch .gitignore (para excluir los archivos del git)
