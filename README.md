# frontEndFramework
An atomic-component based front-end framework package.

You will find a functionnal example here: https://github.com/nikolai4D/nikdev_app_example.git

# Structure:
This frameworks revolves around 4 classes:

### Component:
    As you will find them in others frameworks like react, it associate a logic to an htmlElement.
    
### Composition:

Componenent is not supposed to be used as such but to be used in composition as in the following example:

```
function Button(){
    Component.call(this)
}
```

### Life-cycle of a component:

A component have an associated htmlElement. The getter to this element is the method

```
getElement()
```

It will build the component if it does not exist and return it.

The creation follow these steps:
- it calls the getHTML function, which returns a string.
- it converts this string into one (and only one) htmlElement.
- it calls the bindScript function, which does nothing by default but can be used to tie logic to the the htmlElement (ex: adding event listeners).

### View
- Router
- Guard

# Quick Set up:

## Express project:
Create an express project.

Add the nd_frontend package through the command 
```npm i https://github.com/nikolai4D/frontEndFramework.git ```


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

## Creating the client router:

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

The Home view should now be the default view of your app (as its the first one of the routes list). Typing any url should send you to it, a view with only one h1 saying "Home".
