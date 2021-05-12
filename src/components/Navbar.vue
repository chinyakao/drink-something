<template>
    <div>
        <b-navbar class="fixed-top backgroudcolor" toggleable="lg" type="light" variant="">
            <b-navbar-brand @click="toHome">
                <font-awesome-icon class="brand-icon" icon="glass-cheers" />
                Drink Something
            </b-navbar-brand>

            <b-collapse id="nav-collapse" is-nav>

                <b-navbar-nav class="ml-auto">
                    <b-form inline>
                        <b-form-select @click="changeSorting(selected)" v-model="selected" :options="options" size="sm" class="mr-sm-2"></b-form-select>
                    </b-form>
                    
                    <b-button v-b-modal.modal-1 variant="light" size="sm">
                        <font-awesome-icon icon="plus" />
                        Add Drink
                    </b-button>

                    <b-modal id="modal-1" ref="modal-1" title="Add Drink" hide-footer>
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <b-form-group
                                id="input-group-1"
                                label="Drink Name:"
                                label-for="input-1"
                            >
                                <b-form-input
                                id="input-1"
                                v-model="form.drinkname"
                                placeholder="Enter drink name"
                                required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-2" label="Price:" label-for="input-2">
                                <b-form-input
                                id="input-2"
                                v-model="form.price"
                                placeholder="Enter price"
                                required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-3" label="Note:" label-for="input-3">
                                <b-form-textarea
                                    id="textarea"
                                    v-model="form.note"
                                    placeholder="Enter something..."
                                    rows="3"
                                    max-rows="6"
                                    required
                                ></b-form-textarea>
                            </b-form-group>

                            <b-button class="m-1" type="submit" variant="light" size="sm">Submit</b-button>
                            <b-button class="m-1" type="reset" variant="light" size="sm">Reset</b-button>
                        </b-form>
                    </b-modal>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            selected: 0,
            options: [
                { value: 0, text: 'sort by' },
                { value: 1, text: 'name a-z' },
                { value: 2, text: 'name z-a' },
                { value: 3, text: 'price go up' },
                { value: 4, text: 'price go down' },
            ],
            form: {
                drinkname: '',
                price: '',
                note: ''
            },
            show: true
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            if(this.form){
                this.$store.commit('ADD_ORDER',{
                    drinkname: this.form.drinkname,
                    price: this.form.price,
                    note: this.form.note
                })
                this.form.drinkname = ''
                this.form.price = ''
                this.form.note = ''
                this.$refs['modal-1'].hide()
            }
            
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.drinkname = ''
            this.form.price = ''
            this.form.note = null
            this.show = false
            this.$nextTick(() => {
            this.show = true
            })
        },
        toHome(){
           this.$router.push({ path: '/' })
        },
        changeSorting(sortby){
            this.$store.commit('UPDATE_SORTBY', sortby)
        }
    }
}
</script>

<style scoped>
.backgroudcolor{
    background-color: #87CEFA;
}
.btn{
    border-radius: 1.5rem;
    border-color: black;
    background-color: transparent;
    color: black;
}
select{
	background-color: transparent !important; 
	border-color: black !important;
	border-radius: 1.5rem !important; 
}
</style>