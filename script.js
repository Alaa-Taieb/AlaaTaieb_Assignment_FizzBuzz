for(var i = 1; i<= 100; i++){
    var ret = i;                // Set i's value in a new variable called ret (short for return) so that we don't lose i's value
    if(i % 3 == 0)              // Check if i is divisible by 3
        ret = "Fizz";           // Set the ret to "Fizz"
    if(i %  5 == 0)             // Check if i is divisible by 5
        if(ret == i){           // Check if ret is still equals to i (which means i isn't divisible by 3)
            ret = "Buzz";       // CASE => ( i isn't divisible by 3 ) => set ret's value to "Buzz"
        }else{                  
            ret += "Buzz";      // CASE => ( i is divisible by 3 ) => set ret's value to be it's initial value "Fuzz" + "Buzz" => ["FuzzBuzz"]
        }
    console.log(ret);           // Log the value of the variable ret
}