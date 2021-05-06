
/* Rifare l’esercizio della to do list come fatto assieme in classe:
- stampare in pagina un item per ogni elemento contenuto in un array -- check
- ogni elemento ha due stati (checked o non checked)
- al click dell’elemento avviene il toggle dello status
- al click sulla croce si elimina l’elemento
- clickando sul bottone si aggiunge il contenuto dell’input text solo se è più lungo di 2 caratteri
- se è più corto appare un alert che scompare dopo 2 secondi

bonus: rendere possibile l’eliminazione dell’item solo se prima è stato checkato
 */

var app = new Vue({
  el: '#app',
  data: {
   toDoList: [
     {
      text: 'go to work',
      isChecked: false
     },
     {
      text: 'buy groceries',
      isChecked: false
     },
     {
      text: 'do chores',
      isChecked: true
     },
     {
      text: 'work out',
      isChecked: false
     }
   ]
  },
  methods: {
      deleteEvent: function(toDo) {
        this.toDoList.splice(this.toDoList.indexOf(toDo), 1);
    }
      
  }
});