//console.log("This is a test");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// types
var userName = "PauloBA";
var age = 18;
var state = true || false;
var think = "Dream";
think = 22;
// Arrays
var friends = ["Lopera", "Adri", "MC"];
var ids = [63084830, 70115642, 77558190];
var states = [false, true, true];
var anyArray = [1, "a", 5, true];
// Tuple
var strNumTuple;
strNumTuple = ["Paulo", 18];
function showToDo(toDo) {
    console.log(toDo.title + " - " + toDo.text);
}
showToDo({
    title: "Pendient Tasks",
    text: "Clean up the house"
});
function myVoidFunction() {
    return;
}
// Classes
var user = /** @class */ (function () {
    function user(name, email, age, paid) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.paid = paid;
    }
    user.prototype.showMyAge = function () {
        console.log(this.age);
    };
    user.prototype.register = function () {
        console.log("Successfully registered");
        console.log(this.name + ": " + this.email);
    };
    user.prototype.isPaid = function () {
        console.log(this.name + " paid: " + this.paid);
    };
    return user;
}());
var paulo = new user("PauloBA", "paulo.bernal.a@gmail.com", 18, true);
paulo.register();
paulo.showMyAge();
var member = /** @class */ (function (_super) {
    __extends(member, _super);
    function member(id, name, email, age, paid) {
        var _this = _super.call(this, name, email, age, paid) || this;
        _this.id = id;
        return _this;
    }
    member.prototype.pay = function () {
        _super.prototype.isPaid.call(this);
    };
    return member;
}(user));
var mateo = new member(699, "Mateo", "mateo.bernal.a@gmail.com", 15, true);
mateo.pay();
