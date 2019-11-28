<template>
    <v-app>
        <v-app-bar app dark> 
        <v-toolbar-title class="headline text-uppercase"> 
            
        </v-toolbar-title>
        <v-spacer></v-spacer>      
                ALUMNOS           
        <v-spacer></v-spacer>
            
            <v-toolbar-items>
            <!-- <v-btn text  v-on:click="select3()">Asignatura</v-btn>
            <v-btn text  v-on:click="select2()"> Profesor</v-btn>
             -->
            </v-toolbar-items>
        </v-app-bar>
        <br>
        <div class="container">
            <v-card>
                <v-card-actions>         
                    <br>
                    <br>
                    <br>           
                    <!-- Dialogo Alumno -->
                    <v-dialog v-model="dialog" persistent max-width="600px" >
                        <template v-slot:activator="{ on }">
                            <v-btn text class="green darken-4 text-center" dark v-on="on">Registrar</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                            <span class="headline">Registro Alumno</span>
                            </v-card-title>
                            <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field 
                                    label="Nombre*" 
                                    autofocus
                                    v-model="nombre"
                                    v-validate="'required'"
                                    required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field 
                                    label="Apellidos*" 
                                    v-model="apellidos"
                                    v-validate="'required'"
                                    required>
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field
                                    label="Direccion*"    
                                    v-model="direccion" 
                                    v-validate="'required'"                        
                                    required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field 
                                    label="Sexo*"
                                    v-model="sexo"
                                    type="email"
                                    v-validate="'required'" 
                                    required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field 
                                    label="Edad*" 
                                    v-model="edad"
                                    v-validate="'required'"
                                    required                                    
                                    @keypress="isNumber($event)"
                                    ></v-text-field>
                                </v-flex>                          
                                <v-flex xs12 sm6>
                                    <v-select
                                    :items="materias"
                                    label="Carrera*"
                                    item-text="nombre"
                                    item-value="nombre"
                                    v-model="carrera"
                                    required
                                    v-validate="'required'"
                                    ></v-select>
                                </v-flex>
                                </v-layout>
                            </v-container>
                            <small>*indicates required field</small>
                            </v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">Cerrar</v-btn>
                            <v-btn color="blue darken-1" text @click="submit">Guardar</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>  
                    <v-spacer></v-spacer>
                    <!-- Dialogo Alumno -->

                                       
                </v-card-actions>
                <br>
                <v-container><h3>Datos de lo Alumnos</h3></v-container>
                
                <v-simple-table>
                    <thead>
                    <tr>
                        <th class="text-left">Nombre</th>
                        <th class="text-left">Apellidos</th>
                        <th class="text-left">Edad</th>
                        <th class="text-left">Sexo</th>
                        <th class="text-left">Direccion</th>
                        <th class="text-left">Carrera</th>
                        <th class="text-left">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in alumnos" :key="item.id">
                        <td>{{ item.nombre }}</td>
                        <td>{{ item.apellidos }}</td>
                        <td>{{ item.edad }}</td>
                        <td>{{ item.sexo }}</td>
                        <td>{{ item.direccion }}</td>
                        <td>{{ item.carrera }}</td>
                        <td>
                            <!-- Dialogo Alumno Actualizar-->
                            <v-dialog v-model="dialog2" persistent max-width="600px" >
                                <template v-slot:activator="{ on }">                            
                                    <v-btn text class="indigo darken-4 text-center" dark v-on="on" @click="getAlumno(item.id)">Actualizar</v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                    <span class="headline">Actualizar Alumno</span>
                                    </v-card-title>
                                    <v-card-text>
                                    <v-container grid-list-md>
                                        <v-layout wrap>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field 
                                            label="Nombre*" 
                                            autofocus
                                            v-model="nombre_db"
                                            v-validate="'required'"
                                            required
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field 
                                            label="Apellidos*" 
                                            v-model="apellidos_db"
                                            v-validate="'required'"
                                            required>
                                            </v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field
                                            label="Direccion*"    
                                            v-model="direccion_db" 
                                            v-validate="'required'"                        
                                            required
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field 
                                            label="Sexo*"
                                            v-model="sexo_db"
                                            type="email"
                                            v-validate="'required'" 
                                            required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field 
                                            label="Edad*" 
                                            v-model="edad_db"
                                            v-validate="'required'"
                                            required                                    
                                            @keypress="isNumber($event)"
                                            ></v-text-field>
                                        </v-flex>                          
                                        <v-flex xs12 sm6>
                                            <v-select
                                            :items="materias"
                                            label="Carrera*"
                                            item-text="nombre"
                                            item-value="nombre"
                                            v-model="carrera_db"
                                            required
                                            v-validate="'required'"
                                            ></v-select>
                                        </v-flex>
                                        </v-layout>
                                    </v-container>
                                    <small>*indicates required field</small>
                                    </v-card-text>
                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="dialog2 = false">Cerrar</v-btn>
                                    <v-btn color="blue darken-1" text @click="actualizar(item.id)">Actualizar</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>  
                            <!-- Dialogo Alumno Actualizar -->
                            <v-btn text class="red accent-4 text-center" dark @click="eliminar(item.id)">Eliminar</v-btn> 
                        </td>
                    </tr>
                    </tbody>
                </v-simple-table>                
                
                
            </v-card>
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
        
        token:"",
        
        nombre:"",
        apellidos:"",
        edad:"",
        sexo:"",
        direccion:"",
        carrera:"",
        
        

        alumnos:[],
        id_alumno:[],
        alumno_select:0,

        nombre_db:"",
        apellidos_db:"",
        edad_db:"",
        sexo_db:"",
        direccion_db:"",
        carrera_db:"",
        carrera_db2:[],

        nombre_db:"",
        apellido_p_db:"",
        apellido_m_db:"",
        email_db:"",
        telefono_db:"",
        matricula_db:"",
        rfid_db:"",
        asignatura_db:[],


        dialog: false,
        dialog2: false,

        //alumnos: ['Foo', 'Bar', 'Fizz', 'Buzz'],

        materias:[],

        headers: [
          {
            text: 'ID',
            align: 'left',
            sortable: false,
            value: 'id',
          },
          { text: 'Alumno id', value: 'alumno_id' },
          { text: 'Horario id', value: 'horario_id' },         
          { text: 'Fecha', value: 'fecha' }          
        ],
        desserts: [],
        materias_alumno:[],
        data_alumno:[]
      }
    },
    mounted() {
        
        // try {
        //     this.socket.on('rfid_frontend', (data) => {
        //     console.log(data)
        //     this.rfid = data;
        //     // you can also do this.messages.push(data)
        // });
        // } catch (error) {
        //     console.log(error)
        // }
        
    },
    created(){       
        this.token=this.$route.query.token
        console.log('tokenc'+this.$route.query.token)
        this.getAlumnos()
        this.getAsignaturas()
    },
    methods: {
        select2: function() {
            this.$router.push({name:'profesor'})
        },
        select3: function() {
            this.$router.push({name:'asignatura'})
        },
        select4: function() {
            this.$router.push({name:'home'})
        },
        submit () {        
        this.$validator.validateAll().then(valid =>{
            if(valid){
                API({
                    method: 'post',
                    url: 'alumno/alumno_lista/',
                    headers: {
                    Authorization: 'Token '+ this.token,
                    },
                    data: {
                        nombre: this.nombre,  
                        apellidos: this.apellidos,
                        direccion: this.direccion,
                        sexo:this.sexo,
                        edad:this.edad,                         
                        carrera:this.carrera  
                    }
                });                
                this.dialog = false; 
                this.getAlumnos();               
                this.clean();
                                        
            }            
        })
        },
        actualizar (id) {    
                          
            this.$validator.validateAll().then(valid =>{
                if(valid){
                    // API.put(('alumno/alumno_detalle/' + id,{
                    //     headers: {
                    //         Authorization: 'Token d4efbed844e13c6fc9d5dcc5116edebba4e5a185',
                    //     },
                    // }),{
                    //     nombre: this.nombre_db,  
                    //     apellidos: this.apellidos_db,
                    //     direccion: this.direccion_db,
                    //     sexo:this.sexo_db,
                    //     edad:this.edad_db,                         
                    //     carrera:this.carrera_db  
                    // }).then((response)=>{        
                    //     console.log(response)        
                                    
                    // })  
                    API({
                    method:'put',
                    url:('alumno/alumno_detalle/' + id),
                    headers: {
                            Authorization: 'Token d4efbed844e13c6fc9d5dcc5116edebba4e5a185',
                    },
                    data: {
                        nombre: this.nombre_db,  
                        apellidos: this.apellidos_db,
                        direccion: this.direccion_db,
                        sexo:this.sexo_db,
                        edad:this.edad_db,                         
                        carrera:this.carrera_db  
                    }
                    }).then(function (response) {
                        console.log(response);
                        
                    })                                                          
                    this.dialog2 = false;               
                    this.$validator.reset()                        
                }            
            })
        },
        eliminar(id){
            API({
              method:'delete',
              url:('alumno/alumno_detalle/' + id),
              headers: {
                    Authorization: 'Token d4efbed844e13c6fc9d5dcc5116edebba4e5a185',
                },
            }).then(function (response) {
                console.log(response);
                
            })
            this.$router.go()
        },
        clean(){
            this.nombre="",
            this.apellidos="",
            this.direccion="",
            this.sexo="",
            this.edad = "",            
            this.carrera = "",
            this.$validator.reset()          
        },
        isNumber: function(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();
            } else {
                return true;
            }
        },

        getAlumnos(){
            API.get('alumno/alumno_lista/',{
                headers: {
                    Authorization: 'Token '+ this.token,
                }
            })
            .then((response)=>{                
                this.alumnos = response.data    
                console.log(response)              
            })            
        },

        getAsignaturas(){
            API.get('alumno/asignaturas/',{
                headers: {
                    Authorization: 'Token '+ this.token,
                }
            })
            .then((response)=>{                
                this.materias = response.data               
                console.log(response)   
            })            
        },

        getAlumno(id){            
            API.get('alumno/alumno_detalle/' + id,{
                headers: {
                    Authorization: 'Token d4efbed844e13c6fc9d5dcc5116edebba4e5a185',
                },
            })
            .then((response)=>{ 
                console.log(response)                            
                this.nombre_db = response.data.nombre ,
                this.apellidos_db= response.data.apellidos ,
                this.edad_db= response.data.edad ,
                this.sexo_db= response.data.sexo ,
                this.direccion_db= response.data.direccion,                
                this.carrera_db= response.data.carrera
                 

            }) 
               
        },

    }
  }
</script>