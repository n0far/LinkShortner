<template>
  <div class="hello">
    <p>Enter your url</p>
    <input v-model="longUrl" placeholder="Enter URL" /> 
    <button @click="shortenUrl">shorten</button>
    <p v-if="shortenedUrl"> Shortened URL : {{ shortenedUrl }}</p>
    
  </div>
</template>

<script>
import bitlyService from '/./bitlyService';
export default {
  data(){
    return{
      longUrl: '',
      shortenedUrl: '',
    };
  },
  methods:{
    async shortenUrl(){
      try{
        const accessToken = '96dfd555f8dd4b00a4da5ffa8547f2f90d9e98f1';
        // eslint-disable-next-line no-unused-vars
        const shortenedId = await bitlyService.shortenUrl(this.longUrl,accessToken);
        this.shortenedUrl= `https://${shortenedId}`;
      } catch (error){
        console.error('Error shortening URL:', error);
        this.error = 'An error occurred while shortening the URL.';
      }
    },
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
