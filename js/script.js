const app = new Vue({
    el: '#app',
    data: {
        HelloText:null,
        Lname:null,
        Fname:null,
        fatherName:null,
        old:null,
        telNum:null,
        gender:null,
        choose:null,
        doctor:null,
        noSms:null,

    },
   
})
















// const app = new Vue({
//     el: '#app',
//     data: {
//         errors: [],
//         name: null,
//         age: null,
//         movie: null
//     },
//     methods: {
//         checkForm: function (e) {
//         if (this.name && this.age) {
//             return true;
//         }

//         this.errors = [];

//         if (!this.name) {
//             this.errors.push('Требуется указать имя.');
//         }
//         if (!this.age) {
//             this.errors.push('Требуется указать возраст.');
//         }

//         e.preventDefault();
//         }
//     }
// })