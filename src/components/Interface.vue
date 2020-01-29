<!-- INTERFACE -->

<template>
  <section id="interface">
  <div id="ui-container">
    <div>
			<h1>xkcd Poster</h1>
    </div>

    <div>
    <p>Character</p>
		<select @click="chooseChar" value="Cueball">
			<option v-for="value in items" v-bind:key="value">
			{{ value }}
			</option>
		</select>
    </div>

		<div>
		<p>Name</p>
		<input type="text" name="name" placeholder="Sam" @input="chooseName" maxlength="40">
		<br>
		<label for="name" >{{currentErr}}</label>
		</div>

		<div>
			<p>Date</p>
			<input type="date" id="start" name="trip-start"
			value="2018-07-22"
			@input="chooseDate">
		</div>

    <div>
    <p>Height</p>
			<input type="range" id="height" name="height" min="25" max="50" value="35" @input="chooseHeight">
			<br>
			<label for="height">{{heightCm}}cm</label>
    </div>

   </div>
  </section>
</template>

<script>
import store from '../store/store';
import {mapState} from 'vuex';

let err;
//eslint-disable-next-line
let nameRegex = new RegExp(/[^A-z\s\d][\\\^]?/, "is");
export default {
  name: 'Interface',
  props: {
    msg: String
  },
  methods: {
		chooseChar (e) {
			store.commit('chooseChar', e.target.value)
		},

		chooseName (e) {
			console.log(e.target.value.length);
			err = false
			if (e.target.value.length >= 40) {
				this.currentErr = "Name is too long."
				err = true
			}
			if (e.target.value.match(nameRegex)) {
				console.log("AAAAAAAAAAAAA")
				this.currentErr = "Special characters not allowed."
				err = true
			}
			store.commit('chooseName', e.target.value)
			err ? null : this.currentErr = ""
		},

		chooseDate (e) {
			console.log(e.target.value)
			store.commit('chooseDate', e.target.value)
		},

		chooseHeight (e) {
			this.heightCm = e.target.value
			store.commit('chooseHeight', Math.round((e.target.value * 38) / 3))
		},

		},
	computed: mapState({
		count: state => state.count,
		imgs: state => state.imgs,
		}),
	data: () => ({
    items: ["cueball", "black_hat", "beret", "danish", "hairy", "megan", "ponytail"],
    heightCm: 35,
    currentErr: "",
  })
}
//console.log(imgs);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#interface {
	height: 100vh;
	width: 400px;
	background: #6ad6cd;
}

#interface p {
	margin:0;
}

#ui-container {
	display:grid;
}

#ui-container > div {
	padding:10px;
}
</style>
