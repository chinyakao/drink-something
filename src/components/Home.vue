<template>
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-1"></div>
                <div class="col">
                    <OrderItem v-for="index in orderIndex" :key="index" :index="index"/>
                </div>
                <div class="col-1"></div>
            </div>
        </div>
    </div>
</template>

<script>
import OrderItem from '@/components/OrderItem'
export default {
    components:{
        OrderItem
    },
    data(){
        return{
            form: {
                drinkname: '',
                price: '',
                note: ''
            },
            show: true
        }
    },
    computed:{
        orderIndex(){
            return this.$store.getters['orderIndex']
        }
    },
    mounted(){
        this.$store.dispatch('INIT_ORDERS')
    },
    methods: {
    }
}
</script>

<style scoped>
.btn{
    border-radius: 1.5rem;
    border-color: darkgray;
    background-color: transparent;
    color: black;
}
</style>