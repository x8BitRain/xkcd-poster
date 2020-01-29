<!-- CANVAS -->

<template>
  <section id="canvas">
    <div id="poster-outer">
      <img :src="'/chars/' + img + '.png'" :style="{ height: height + 'px' }" />
      <div id="text">
        <h3>{{name}}</h3>
        <h4>{{date}}</h4>
      </div>
    </div>
  </section>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Canvas',
  props: {
    msg: String
  },
  computed: mapState({
    count: state => state.count,
    img: state => state.selectedImg,
    name: state => state.selectedName,
    date: state => state.selectedDate,
    height: state => state.selectedHeight,
  }),
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#canvas {
  background: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%202%202%22%3E%3Cpath%20d%3D%22M1%202V0h1v1H0v1z%22%20fill-opacity%3D%22.05%22%2F%3E%3C%2Fsvg%3E);
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  background-size: 16px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#poster-outer {
  margin: 2.5vh auto;
  height: 92vh;
  width: 65.7vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 2px 0px black;
}

#poster-outer img {
  height:449px;
}

#text {
  position: absolute;
  bottom: 70px;
  text-align: center;
  font-size: 30px;
}

#text > h3, h4 {
  margin:0;
}
</style>
