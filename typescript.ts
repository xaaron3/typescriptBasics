let isCool: boolean = true

let age: number = 34

let eyeColor: string = 'brown'
let favoriteQuote: string = `I'm not old i'm only ${age}`

let pets: string[] = ['cat', 'dog', 'pig']
let pets2: Array<string> = ['lion', 'bear', 'dragon']

let wizard: object = {
   a: 'john'
}

let meh: undefined = undefined;
let noo: null = null;

// tuple
let basket: [string, number];
basket = ['basketball', 5]

// enumerable
enum Size { Small = 1, Medium = 2, Large = 3 }
let sizeName: string = Size[2];

// any type !!! be careful
let whatever: any = 'aghhh nooo!!!'
whatever = 5



// tsc typescriot.ts --watch (to update live on terminal and check for errs)