new Vue({
	el: '#app',
	data: {
    mensagem:'Olá mundo',
    nome: ''
		},
  methods:{
    	setNome: function(event){
      	this.nome = event.target.value;
      }
    }
});