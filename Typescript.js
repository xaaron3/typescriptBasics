var isCool = true;
var age = 34;
var eyeColor = 'brown';
var favoriteQuote = "I'm not old i'm only " + age;
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'bear', 'dragon'];
var wizard = {
    a: 'john'
};
var meh = undefined;
var noo = null;
// tuple
var basket;
basket = ['basketball', 5];
// enumerable
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
// any type !!! be careful
var whatever = 'aghhh nooo!!!';
whatever = 5;
// tsc typescriot.ts --watch (to update live on terminal and check for errs)
