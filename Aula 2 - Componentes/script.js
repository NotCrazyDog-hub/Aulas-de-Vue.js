const { createApp } = Vue;

const componentButton = {
    template: '<button @click="alert()">{{message}}</button>', // html, mas sem a parte chata
    methods: {
        alert() {
            alert(this.message);
        }
    },
    props: {
        message: {
            type: String,
            default: 'Hello World'
        }
    }
}

const app = createApp({
    components: {
        'botao-clique': componentButton // nome, tipo importandO
    },

    data() {
        return{
            title: 'Aula 2',
            numero: 0,
            resultadoSoma: 0,
            valorNumero: 0,
            itens: [
                {nome: 'Item 1', preco: 10},
                {nome: 'Item 2', preco: 20},
                {nome: 'Item 3', preco: 30}
            ]
        }
    },
    methods: {
        somar() {
            this.resultadoSoma += this.numero;
        },
        alertaMensagem() {
            alert('Opa');
        }
    },
    watch: {
        valorNumero(novoValor, valorAntigo) {
            if(novoValor >= 10) {
                alert('Valor máximo atingido!');
                this.valorNumero = 0;
            }
            else {
                alert(`O valor mudou de R$ ${valorAntigo} para R$ ${novoValor}`);
            }
        }
    }
});

app.mount('#app') // informa em qual tag ele vai montar, o id da nossa tag