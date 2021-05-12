<template>
    <div>
        <b-card class="mb-2 order-item text-left">
            <div class="row drink-item">
                <div class="col-8">{{ order.drinkname }}</div>
                <div class="col-4 text-right">${{ order.price }} </div>
            </div>
            <div class="row">
                <div class="col-8">
                    {{ order.note }}
                </div>
                <div class="col-4 text-right">
                    <b-button @click="toEdit(index)" class="m-1" variant="light" size="sm">
                        Edit
                    </b-button>
                    <b-button href="#" class="m-1" variant="light" size="sm" @click="deleteHandler">
                        Delete
                    </b-button>
                </div>
            </div>            
        </b-card>
    </div>
</template>

<script>

export default {
    props:{
        index:{
            type: Number,
            require: true
        },
    },
    computed:{
        order(){
            return this.$store.state.orders[this.index]
        }
    },
    data(){
        return{
        }
    },
    mounted(){
    },
    methods: {
        toEdit(index){
            this.$store.commit('UPDATE_CHOOSEINDEX', index)
            this.$router.push({ path: 'edit' })
        },
        deleteHandler(){
            if(confirm(`Are you goning to DELETE ${this.order.drinkname}?`)){
                this.$store.commit('DELETE_ORDER', this.index)
            }
        }
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
.order-item{
    border-radius: 1.5rem;
    border-color: darkgray;
}
.drink-item{
    font-weight: 500;
    font-size: 1.25rem;
}
</style>