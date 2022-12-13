<template>
     <header>
        <div class="container">

            <nav>
                <h3><center><u>Hoja de Vida</u></center></h3>
                
                <center>
                    <router-link to="/datos"><img src="../assets/datos.png" width="50"></router-link>
                    <router-link to="/academico"><img src="../assets/academico.png" width="50"></router-link>
                    <router-link to="/laboral"><img src="../assets/trabajo.png" width="50"></router-link>
                    <router-link to="/referencia"><img src="../assets/referencia.png" width="50"></router-link><br>

              <b>ROSA MARIA QUILINDO LEDEZMA</b>
              

            </center>
            
            </nav>
        </div>
        
    </header>
</template>
<script>
export default{
    name: "HearderComponenteIndex"
}
</script>

<style scoped>
header {
    padding: 15px 0;
    background-color: rgb(183, 183, 228);
    width: 100%;
}
</style>