class ArrayOperations {
    constructor() {}



    Even() {
        console.log(" Function to find even number ");


        for (var i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0) {

                console.log(array[i])
            }

        }
    }


    Odd() {
        console.log("Function to find odd number");



        for (var i = 0; i < array.length; i++) {
            if (array[i] % 2 != 0)
                console.log(array[i])
        }
    }



    Perfect() {
        console.log(" Function to find perfect number ");


        for (var k = 0; k < array.length; k++) {
            var temp = 0;

            for (var i = 1; i <= array[k] / 2; i++) {
                if (array[k] % i === 0) {
                    temp += i;
                }
            }
            if (temp == array[k] && temp !== 0) {
                console.log(array[k])
            }
        }
    }

    Search(num) {
        console.log(" Function to search a number ");


        for (var i = 0; i < array.length; i++) {
            if (array[i] == num) {
                console.log("Number is Present")
            }
        }
    }
}
let array = [4, 5, 7, 8, 14, 45, 76, 1, 2, 3, 100, 96, 98, 49];
let finalarray = new ArrayOperations();
finalarray.Even();
finalarray.Odd();
finalarray.Perfect();
finalarray.Search(10);