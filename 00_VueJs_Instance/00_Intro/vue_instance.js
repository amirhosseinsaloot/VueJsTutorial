var  vm = new Vue({
    el: '#vue_det',
    data: {
       firstname : "Ria",
       lastname  : "Singh",
       address    : "Mumbai"
    },
    methods: {
       mydetails : function() {
          return "I am "+this.firstname +" "+ this.lastname;
       }
    }
 })

// Notes :
// To start with VueJS, we need to create the instance of Vue, which is called the root Vue Instance.
// For Vue, there is a parameter called el. It takes the id of the DOM element
// Now, whatever we are going to do will affect the div element and nothing outside it.
// Next, we have defined the data object. It has value firstname, lastname, and address.