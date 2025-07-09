<template>
  <h1>Radio Buttons in Vue</h1>
  <form @submit.prevent="registerAnswer">
    <p>What is your favorite animal?</p>
    <label>
      <input type="radio" name="favAnimal" v-model="inpVal" value="Cat"> Cat
    </label>
    <label>
      <input type="radio" name="favAnimal" v-model="inpVal" value="Dog"> Dog
    </label>
    <label>
      <input type="radio" name="favAnimal" v-model="inpVal" value="Turtle"> Turtle
    </label>
    <label>
      <input type="radio" name="favAnimal" v-model="inpVal" value="Moose"> Moose
    </label>
    <button type="submit">Submit</button>
  </form>
  <div>
    <h3>Submitted choice:</h3>
    <p id="pAnswer">{{ inpValSubmitted }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inpVal: '',
      inpValSubmitted: 'Not submitted yet'
    }
  },
  methods: {
    registerAnswer() {
      if(this.inpVal) {
        this.inpValSubmitted = this.inpVal;
      }
    }
  }
}
</script>

<style scoped>
div {
  border: dashed black 1px;
  border-radius: 10px;
  padding: 0 20px 20px 20px;
  margin-top: 20px;
  display: inline-block;
}
button {
  margin: 10px;
}
label {
  display: block;
  width: 80px;
  padding: 5px;
}
label:hover {
  cursor: pointer;
  background-color: rgb(211, 244, 211);
  border-radius: 5px;
}
#pAnswer {
  background-color: lightgreen;
  padding: 5px;
}
</style>