alert( null || 2 || undefined ); // 2

alert( alert(1) || 2 || alert(3) ); // undefined

alert( 1 && null && 2 ); // null

alert( alert(1) && alert(2) ); // 1, then undefined

alert( null || 2 && 3 || 4 ); // 3

if (age >= 14 && age <= 90) {

}//check that age is between 14 and 90 inclusively.
if (age < 14 || age > 90){
    // check that age is NOT between 14 and 90 inclusively.
}
if (-1 || 0) alert( 'first' ); // -1, truthy
if (-1 && 0) alert( 'second' ); // falsy
if (null || -1 && 1) alert( 'third' ); // 1
