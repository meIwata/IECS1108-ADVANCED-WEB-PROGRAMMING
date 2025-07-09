<template>
  <h1>Example: Shopping List</h1>
  <div id="app">
    <form @submit.prevent="addItem">
      <p>
        What do you need?
        <input type="text" required placeholder="item name.." v-model="itemName">
      </p>
      <p>
        How many?
        <input type="number" placeholder="number of items.." v-model="itemNumber">
      </p>
      <button type="submit">Add item</button>
    </form>

    <div>
      <p>Shopping list:</p>
      <ul>
        <li v-for="item in shoppingList">{{ item.name }}, {{ item.number }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemName: null,
      itemNumber: null,
      shoppingList: [
        {name: 'Tomatoes', number: 5}
      ]
    }
  },
  methods: {
    addItem() {
      let item = {
        name: this.itemName,
        number: this.itemNumber
      }
      this.shoppingList.push(item)
      this.itemName = null
      this.itemNumber = null
    }
  }
};
</script>


<style scoped>
form {
  border: dashed black 1px;
  width: 200px;
  padding: 20px;
}
</style>