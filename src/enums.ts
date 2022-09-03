// Enums let us define group or a set of predefined constants  (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.
// Numeric Enums - Default => By default, enums will initialize the first value to 0 and add 1 to each additional value
// Numeric Enums - Initialized => You can set the value of the first numeric enum and have it auto increment from that:
// Numeric Enums - Fully Initialized => You can assign unique number values for each enum value. Then the values will not incremented automatically
// String Enums => Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
// ! Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.

// Ex. 1
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

// Ex. 2
enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
};
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);