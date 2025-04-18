import mongoose from 'mongoose'
import { app } from '../server.js'
import { MONGODB_URI, PORT } from '../config/env.js'

function loadDatabase(){
    mongoose.connect(MONGODB_URI)
    .then(() =>{
        console.log('Connected to Database.....');
        app.listen(PORT, () =>{
            console.log(`Forever is running at http://localhost:${PORT}`);
        })
        
    })
    .catch((ex) =>{
        console.log('Failed to connect to the database......', ex.message);
    })
};
export default loadDatabase