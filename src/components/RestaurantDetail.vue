<template>
    <div>
        <h4>Detail</h4>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Detail",
    methods: {
        async getInfo( x ){
            let resp = await axios.get(`http://localhost:3000/restaurant/${x}`)
            console.log(resp);
        }
    },
    mounted() {
        this.getInfo(this.$route.params.id)
        console.log( this.$route.params.id )
    }
}
</script>
