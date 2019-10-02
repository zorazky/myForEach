function myForEach(arr, func) {
    //loop though array
    for (let i = 0; i < arr.length; i++) {
      //call function for each item in array
      func(arr[i]);
    }
  }
  
  let colors = ["red", "yellow", "orange"];
  
  myForEach(colors, console.log)
  
  myForEach(colors, function(color) {
    console.log(`the color is ${color}`)
  });

  Array.prototype.myForEach = function(func) {
      for (let i = 0; i < this.length; i++) {
          func(this[i]);
      }
  }

  colors.myForEach(function(color) {
    console.log(`prototype color ${color}`)
  })