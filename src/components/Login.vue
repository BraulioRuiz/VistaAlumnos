<template>
    <v-app>
        <div>
            <v-container
                class="fill-height"
                fluid
            >
                <v-row
                align="center"
                justify="center"
                >
                    <v-col
                        cols="12"
                        sm="8"
                        md="4"
                    >
                        <v-card class='container'>
                        <v-card-title>Iniciar Sesion</v-card-title>
                        <v-card-text>                   
                        
                        <v-form>
                        <v-text-field
                            label="Usuario*" 
                            autofocus
                            v-model="username"
                            v-validate="'required'"
                            required
                        />

                        <v-text-field
                            label="Contraseña*" 
                            v-model="password"
                            v-validate="'required'"
                            required
                            :type="show1 ? 'text' : 'password'"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="show1 = !show1"
                            counter
                        />
                        </v-form>

                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="primary" text @click="submit">Login</v-btn>
                    </v-card-actions>
                
            </v-card>
            
                    </v-col>
                </v-row>
            </v-container>
            
        </div>
    </v-app>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate';
import { API } from '../Servicios/axios';


 Vue.use(VeeValidate);

  export default {
    data () {
      return {
          $_veeValidate: {
        validator: 'new'
        },
        password:"",
        username:"",
        token: "",
        show1: false,
        
      }
    },
    
    created(){
      
    },
    methods: {       
        submit () {        
        this.$validator.validateAll().then(valid =>{
            if(valid){
                API.post('login/',{
                    username: this.username,  
                    password: this.password,
                })
                .then((response)=>{                
                    console.log(response.data.token)       
                    this.$router.push({path:'/alumno', query:{token: response.data.token}})       
                }) 

                // API({
                //     method: 'post',
                //     url: 'login/',                    
                //     data: {
                        
                         
                //     }
                // }).then((response)=>{
                //     response.data.forEach(element => {                   
                //     console.log(element.token),        
                //     this.$router.push({path:'/alumno', query:{token: element.token}})
                // });
                
                // })
                // .then(function (response){
                //     console.log(response.data.token),
                //     this.$router.push({path:'/alumno', query:{token: response.data.token}})
               
                                  
                // })  
                                                      
            }            
        })
        },
        

    }
  }
</script>