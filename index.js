const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 8000
 
let bears = [
   { name: 'Shinju', weight:  '8 kg',  photo: 'https://64.media.tumblr.com/822c281b7486c917fd60f759acaac489/35febc78f4e49bf2-d2/s540x810/07680d87a948499e0c98b4a5eaab162a45556dfc.jpg'},
   { name: 'Marin', weight: '49 kg',  photo: 'https://c.tenor.com/jh4EA2d5pIcAAAAC/kitagawa-marin-kitagawa.gif' },
   { name: 'Sajuna', weight: '35 kg',  photo: 'https://pbs.twimg.com/media/FFxDN1kVQAQWNKm.jpg' }]
 
app.use(cors())
 
app.get('/', (req,res) => {
   res.json(bears)
})

  
app.listen(PORT, () => console.log(`listen at ${PORT}`))