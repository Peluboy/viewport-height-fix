# viewport-height-fix

A small TypeScript utility to fix the mobile 100vh issue by setting a `--vh` CSS variable to the real viewport height.

## Installation

```sh
npm install viewport-height-fix
```

## Usage

### Vanilla JS/HTML

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Viewport Height Fix Test</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .vh-box {
      width: 100vw;
      height: calc(var(--vh, 1vh) * 100);
      background: #4caf50;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }
  </style>
</head>
<body>
  <div class="vh-box">100vh Box</div>
  <script type="module">
    import { initViewportHeightFix } from 'viewport-height-fix';
    initViewportHeightFix();
  </script>
</body>
</html>
```

### React

```js
// App.js or index.js
import { useEffect } from 'react';
import { initViewportHeightFix } from 'viewport-height-fix';

function App() {
  useEffect(() => {
    initViewportHeightFix();
  }, []);
  return <div className="vh-box">100vh Box</div>;
}
```

### Vue

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { initViewportHeightFix } from 'viewport-height-fix';

initViewportHeightFix();

createApp(App).mount('#app');
```

### Angular

```ts
// main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { initViewportHeightFix } from 'viewport-height-fix';

initViewportHeightFix();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

### Svelte

```js
// main.js
import App from './App.svelte';
import { initViewportHeightFix } from 'viewport-height-fix';

initViewportHeightFix();

const app = new App({
  target: document.body,
});

export default app;
```

---

## How It Works

This utility sets a CSS variable `--vh` to `window.innerHeight * 0.01` and updates it on resize/orientation change, debounced for performance.  
Use `height: calc(var(--vh, 1vh) * 100)` in your CSS for elements that should fill the viewport height.

## Why?

On mobile browsers, `100vh` can be inaccurate due to browser UI. This utility provides a reliable value for layouts.

## License

MIT