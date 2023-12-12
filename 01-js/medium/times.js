/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
   /* var myDate = new Date();
    console.log("Original Date:", myDate);
    console.log(myDate.getHours());
// Hours ko set karne ke liye setHours method ka istemal kiya jata hai
     myDate.setHours(23);

    console.log("Date after setting hours to 12:", myDate);
    console.log(myDate.getHours());*/
    var startTime = new Date().getTime();
    var sum = 0;

    for (var i = 1; i <= n; i++) {
        sum += i;
    }

    var endTime = new Date().getTime();
    var elapsedTime = endTime - startTime;
    console.log(elapsedTime/1000);
    return { sum: sum, time: elapsedTime };
}

calculateTime(100);
//calculateTime(10000000);*/