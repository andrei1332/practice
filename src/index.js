import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


new Vue({
     el: '#app',
     data: {
         students: [],
         search:'',
         student: {"pib": "", zdav: false, group: ""}
     },	 
     mounted: function(){
        axios.get('http://46.101.212.195:3000/students').then((response)=>{
            this.students=response.data;
        })
     },
     methods: {
        deleteStudent(studId) {
            this.students = this.students.filter(elem => {
                return elem.id != studId;
            });
        },
        addStudent() {
            this.student.id = this.students.length+1;
            this.students.push(this.student);
        }
     },
  
 });

