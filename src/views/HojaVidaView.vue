<template>
    
  <main>
    <header>
        <HeaderComponenteIndex />
      
    </header>
    <section>
<ArticuleIndex/>
    </section>
    <footer>

    </footer>
 </main>


</template>
<script>
import ArticuleIndex from '@/components/ArticuleIndex.vue';
import HeaderComponenteIndex from '../components/HeaderComponenteIndex.vue'
export default{
    name: 'HojaVidaView',
    components:{ HeaderComponenteIndex, ArticuleIndex }
}
</script>