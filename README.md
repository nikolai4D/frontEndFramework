# frontEndFramework
An atomic-component based front-end framework

You will find a functionnal example here: https://github.com/nikolai4D/nikdev_app_example.git

# Quick Set up:


## Express project:
Create an express project.
Add the nd_frontend package through the command "git i https://github.com/nikolai4D/frontEndFramework.git"
Copy paste


## Vite:
Use a bundler to bundle your dependancies and send them client side. Here we will be using Vite.
Install the Vite npm package.

At the root of your project, create a vite.config.js folder. give it this content:

```
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        minify: false,
        rollupOptions: {
            output: {
                dir: 'dist',
                format: 'module',
                entryFileNames: 'index.mjs',
            }
        }
    }
})
```
Your js own js code to be bundle should be in a directory named src.
Your bundled script will be created in the dist folder.
This dist folder should also be the one that express consider as 'static'.

## Creating a view:

In the src folder, create a new file named Home, and paste the following code to it:

```
import {router} from "../../index.mjs";
import {View} from "nd_frontend/core/View.mjs";
import {Header} from "nd_frontend/generics/components/atoms/Header.mjs";
import {Default} from "nd_frontend/generics/components/templates/Default.mjs";

export function Home() {
    View.call(this)

    // This property is used to set the title of the page
    this.title = "Home"

    // These are the components that will be rendered in the view. Keeping a reference to them can be convenient but is not mandatory.
    this.header = new Header(1,"Home")

    this.template = new Default()
    this.template.components.push(this.header)

}
```

In your client js entry point, create  a new router as follows:

```

import {Home} from ".Home.mjs";

export const router = new Router([
    route("home", Home)
])

const path = window.location.pathname.slice(1)
console.log("path: " , path)

router.goTo(path).then() 

```

