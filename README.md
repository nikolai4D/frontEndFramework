# frontEndFramework
An atomic-component based front-end framework

You will find a functionnal example here: https://github.com/nikolai4D/nikdev_app_example.git

# Quick Set up:

Create an express project.
Add the nd_frontend package through the command "git i https://github.com/nikolai4D/frontEndFramework.git"

In your client js entry point, create  a new router as follows:

```
import {Router} from "nd_frontend"

const router =  new Router().

```

Create a new file named Home, and paste the following code to it:

```
import {router} from "../../index.mjs";
import {View} from "nd_frontend/core/View.mjs";
import {Header} from "nd_frontend/generics/components/atoms/Header.mjs";
import {Default} from "nd_frontend/generics/components/templates/Default.mjs";

export function Dashboard() {
    View.call(this)

    // This property is used to set the title of the page
    this.title = "Home"

    // These are the components that will be rendered in the view. Keeping a reference to them can be convenient but is not mandatory.
    this.header = new Header(1,"Home")

    this.template = new Default()
    this.template.components.push(this.header)

}
```
