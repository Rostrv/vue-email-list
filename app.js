const app = new Vue({
    el: '#app',
    data: {
        mail_random: '',
        mailList: []
    },
    methods: {},
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(response => {
                    this.mail_random = response.data.response
                    this.mailList.push(this.mail_random)
                })
        }
    }


})