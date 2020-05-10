# test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


.slide-leave-active{
  opacity: 0;
  transform: translateX(100px);
  transition: all 1.5s;
}

.slide-enter{
  transform: translateX(-100px);
  opacity: 0;
}
.slide-enter-active{
  transition: all 2s;
}