class Hero {
    constructor(name, age, type){
        this.name = name,
        this.age = age,
        this.type = type
    }
    attack(){
        return `O ${this.name} atacou usando ${this.attackType(this.type)}`
    }
    attackType(type){
        if (type === 'mago') return 'magia'
        if (type === 'guerreiro') return 'espada'
        if (type === 'monge') return 'artes maciais'
        if (type === 'ninja') return 'shuriken'
    }
}

const mago = new Hero('Mago', 23, 'mago')
console.log(mago.attack())

const guerreiro = new Hero('Guerreiro', 32, 'guerreiro')
console.log(guerreiro.attack())