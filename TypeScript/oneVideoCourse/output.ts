//console.log("This is a test");

// types

var userName: string = "PauloBA";
var age: number = 18;
var state: boolean = true || false;

var think: any = "Dream";
think = 22;

// Arrays
var friends: string[] = ["Lopera", "Adri", "MC"];
var ids: number[] = [63084830, 70115642, 77558190];
var states: boolean[] = [false, true, true];
var anyArray: any[] = [1, "a", 5, true];

// Tuple
var strNumTuple: [string, number];
strNumTuple = ["Paulo", 18];

// Void, undefined, null
//let myVoid: void = undefined;
//let myNull: null = null;
//let myUndefined: undefined = undefined;

// Functions
/*
var mySum = (
  a: number | string,
  b: number | string): number => {
  if (typeof (a) == 'string') {
    a = parseInt(a);
  }
  if (typeof (b) == 'string') {
    b = parseInt(b);
  }
  return a + b;
};

function getName(
  first: string,
  last?: string): string {
  if (last == undefined) {
    return first;
  }
  else {
    return `${first} ${last}`;   
  }
}

document.write("<h1>" + getName("Paulo") + "</h1>");
document.write("<h2>" + getName("Paulo", "Bernal") + "</h2>");

*/

// Interfaces

interface ItoDo {
  title: string;
  text: string;
}

function showToDo(toDo: ItoDo) {
  console.log(`${toDo.title} - ${toDo.text}`);
}

showToDo({
  title: "Pendient Tasks",
  text: "Clean up the house"
})



function myVoidFunction(): void {
  return;
}

// Classes

class user {
  public name: string;
  public email: string;
  public age: number;
  private paid: boolean;

  constructor(name: string, email: string, age: number, paid) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.paid = paid;
  }

  showMyAge() {
    console.log(this.age);
  }

  register() {
    console.log("Successfully registered");
    console.log(`${this.name}: ${this.email}`);
  }

  isPaid() {
    console.log(`${this.name} paid: ${this.paid}`)
  }
}

var paulo = new user("PauloBA", "paulo.bernal.a@gmail.com", 18, true)
paulo.register();
paulo.showMyAge();

class member extends user{
  id: number;
  constructor(id, name, email, age, paid) {
    super(name, email, age, paid);
    this.id = id;
  }
  pay() {
    super.isPaid();
  }
}

var mateo = new member(699, "Mateo", "mateo.bernal.a@gmail.com", 15, true)
mateo.pay();