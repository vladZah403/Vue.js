let app = new Vue({
    el:'#app',
    data: {
        name1 : "Вы купили абонемент на месяц",
        name2 : "Вы купили абонемент на шесть месяцев",
        name3 : "Вы купили абонемент на год"
    },
    methods: {
        card1 :function(){
            alert('Поздравляем ' + this.name1)
        },
        card2 :function(){
            alert( 'Поздравляем ' + this.name2)
        },
        card3 :function(){
            alert( 'Поздравляем ' + this.name3)
        }
    }
})