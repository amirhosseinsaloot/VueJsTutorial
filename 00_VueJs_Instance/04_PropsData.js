// propsData − This is used for unit testing.
var Comp = Vue.extend({
    props: ['msg'],
    template: '<div>{{ msg }}</div>'
 })
 var vm = new Comp({
    propsData: {
       msg: 'hello'
    }
 })