const user = (name, age, inventory)=> {
    this.name = name
    this.age = age
    this.inventory = inventory
}

const bag = ()=> {
    this.items = []
    this.getWeight = ()=> {
        let weight = 0
        this.items.forEach(item => weight += item.weight)
        return weight
    }
}

const item = (name, weight)=> {
    this.name = name
    this.weight = weight
}

const vertice = (id, data)=> {
    this.id = id
    this.data = data
    this.edges = []
}

const edge = (id, source, target)=> {
    this.id = id
    this.source = source
    this.target = target
}

const userToInventory = (user, inventory)=> edge(user.id + inventory.id, user, inventory)
const inventoryToItem = (inventory, item)=> edge(inventory.id + item.id, inventory, item)

function user_factory(amount) {
    const users = []
    for (let i in amount){
        users.push( new user("user" + i, i) )
    }

    return users
}

function bag_factory(amount) {
    const bags = []
    for (let i in amount){
        bags.push( new bag() )
    }

    return bags
}

function Component(name) {
    this.name = name
}

function Button(text, onclick) {
    Component.call(this, "Button")

    Button.route = "pouf"

    this.text = text
    this.onclick = onclick
}


const btn = new Button("click me", ()=> console.log("clicked"))

console.log(btn.name)
console.log(Button.route)