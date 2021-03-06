// 1. Identificar el contenedor que va a usar vue.
// 2. Crear la APP de Vue en el contenedor del paso 1.
//  3. Crear la estructura del framework vue

const appVue = {
    // Controlar los componentes del DOM
    // El estado
    data() {
        return {
            // document.getElementById("#correo").value
            mensajeAlerta:"",
            usuario: {
                // Es opcional inicializar el valor
                correo: null
            }
        }
    },
    // Métodos y funciones que voy a utilizar en mi aplicación
    methods: {
        obtenerValoresFormulario(){
            console.log(this.usuario);
        }
    }

}

Vue.createApp(appVue).mount('#app-vue')