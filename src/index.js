import dotenv from 'dotenv'
import { app } from './app.js'

dotenv.config()

const port = process.env.PORT || 3300;











app.listen(port, () => {
    console.log(`Server is runnign at port: ${port}`);

})