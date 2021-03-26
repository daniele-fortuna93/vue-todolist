var app = new Vue(
  {
    el: '#todo-list',
    data:{
      lista: [
        'Comprare acqua',
        'Comprare vino',
        'Comprare latte',
        'Comprare carne',
        'Comprare uova',
      ],
      itemInput: '',
    },
    methods: {
      addItem: function () {
        if ( this.itemInput != '' ){
          this.itemInput = this.itemInput[0].toUpperCase() + this.itemInput.substring(1);
          this.lista.push(this.itemInput);
        }
        this.itemInput = '';
      },
      removeItem: function (itemIndex) {
        this.lista.splice(itemIndex, 1);
      },
      removeLastItem: function () {
        this.lista.pop();
      },
    }
  }
);
