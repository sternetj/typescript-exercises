# Create a `Coffee` Interface
Every `Coffee` should have:
+ A `cost` property of type `number`
+ A `name` property of type `string`

Add the `Coffee` interface to the index of the `2-generics-interfaces` module.

# Create a class `CoffeeShop`

+ Create a `CoffeeShop` class
+ Add this class to the index of the `2-generics-interfaces` module.
+ Create a static method `generateReceipt` that takes in a list of coffees to be purchased and returns the total and the list of the coffee names that were ordered.
```javascript
// Input 
CoffeeShop.generateReceipt([{ cost: 1, name: 'Coffee1' }, { cost: 2, name: 'Coffee2' }])

// Output
'Total: $3; Coffee1, Coffee2'
```

# Create an abstract `Package` class
Every `Package` should have:
  + A `contents` property that is list of coffees inside the package
  + An abstract `howToCarry` property of type `string` which is a description of how it can be carried
### Add this class to the index of the `2-generics-interfaces` module.




Create three new instances of the `Package` class (add them to the index of the `2-generics-interfaces` module) with the following `howToCarry` values:
```javascript
// Box
howToCarry: 'Two handed';
// Carrier
howToCarry: 'One handed';
// Bag
howToCarry: 'Over the Shoulder';
```

# Modify the `CoffeeShop`
+ Now create a static `toGo` method for packaging up an order of coffees
  + The method should take a type argument that extends Package
  + It's first argument is the pagage to wrap and it is of type `T`
  + It's second argument is a list of coffees to package
```javascript
const box = CoffeeShop.toGo(new Box(), [{ cost: 1, name: 'Coffee1' }]);

box.howToCarry; // 'Two handed'
box.contents; // [{ cost: 1, name: 'Coffee1' }]
```