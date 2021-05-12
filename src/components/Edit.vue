<template>
    <div class="container content">
        <div class="row">
            <div class="col-2"></div>
            <div class="col text-left">
                <b-card class="edit-section">
                    <b-form @submit="onSubmit">
                        <b-form-group
                            id="input-group-1"
                            label="Drink Name:"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="order.drinkname"
                            placeholder="Enter drink name"
                            required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Price:" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            v-model="order.price"
                            placeholder="Enter price"
                            required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-3" label="Note:" label-for="input-3">
                            <b-form-textarea
                                id="textarea"
                                v-model="order.note"
                                placeholder="Enter something..."
                                rows="3"
                                max-rows="6"
                                required
                            ></b-form-textarea>
                        </b-form-group>

                        <b-button class="m-1" type="submit" variant="light" size="sm">Submit</b-button>
                    </b-form>
                </b-card>
            </div>
            <div class="col-2"></div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        index(){
            return this.$store.state.chooseIndex
        },
        order(){
            return this.$store.state.orders[this.index]
        },
    },
    data(){
        return{
        }
    },
    mounted(){
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            if(this.order){
                this.$store.commit('UPDATE_ORDER',{
                    index: this.index,
                    data:{
                        drinkname: this.order.drinkname,
                        price: this.order.price,
                        note: this.order.note
                    }
                })
                this.$router.push({ path: '/' })
            }
        },
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
.edit-section{
    max-width: 60rem;
}
</style>