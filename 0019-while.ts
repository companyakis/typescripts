let counter = 12

while (counter > 5) {
    
    counter--

    if (counter == 7) {
        continue
    }

    console.log("Counter value: ", counter)
}

/*
Counter value:  11
Counter value:  10
Counter value:  9
Counter value:  8
Counter value:  6
Counter value:  5
*/
