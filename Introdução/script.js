const { createApp } = Vue;

createApp({
    data(){
        return {
            message: 'Assembly, linguaguem mais fácil de aprender',
            name: 'Pedro Oliveira',
            word: '',
            correctWord: 'Vue',
        }
    }
}).mount('#app');