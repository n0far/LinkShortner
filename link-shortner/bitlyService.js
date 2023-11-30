import axios from 'axios';
// eslint-disable-next-line no-unused-vars
const bitlyApiurl = 'https://api-ssl.bitly.com/v4/shorten';

export default{
    // eslint-disable-next-line no-unused-vars
    shortenUrl : async (longUrl, accessToken) =>{
        try{
            

const response = await axios.post(
  'https://api-ssl.bitly.com/v4/shorten',
  // '{\n    "group_guid": "BnbnjSLFBgQ",\n    "domain": "bit.ly",\n    "long_url": "https://dev.bitly.com/"\n}  ',
  {
    'group_guid': 'BnbnjSLFBgQ',
    'domain': 'bit.ly',
    'long_url': longUrl
  },
  {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  }
);

            return response.data.id;
        }catch(error){
            console.error('Error shortening URL: ',error);
            throw error;
        }
            
        
    },
};