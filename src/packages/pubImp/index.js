import Vue from 'vue'
import myButton from './src/main.vue'
export default {
    install() {
        Vue.component(myButton.name, myButton)
    }
}