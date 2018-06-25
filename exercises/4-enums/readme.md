# Create a `Direction` enum
Create a `Direction` enum and export if from the `4-enums` module. The enum should have the following members:
+ North
+ South
+ East
+ West

# Create a `computeDirection` function
Create a `computeDirection` function which takes in at least `1` but up two `3` parameters of type `Direction` and returns the computed direction name. The name is calculated by combining the provided enum values' names.
```javascript
// Examples
computeDirection(Direction.North); // North
computeDirection(Direction.North, Direction.West); // NorthWest
computeDirection(Direction.South, Direction.South, Direction.West); // SouthSouthWest
```