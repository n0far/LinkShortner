<template>
  <div class="hello">
    <p>Enter your url</p>
    <input v-model="longUrl" placeholder="Enter URL" @input="shortenUrl"/> 
    

    <p v-if="shortenedUrl">The url was shortened and copied to your clipboard!</p>
     
    
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
    copyToClipboard(){
      const tempInput = document.createElement('input');
      tempInput.value=this.shortenedUrl;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    },
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
      this.copyToClipboard();
      // display a message to the user saying that the URL has been copied to the clipboard
      
       
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
