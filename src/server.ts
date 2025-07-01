import mongoose from "mongoose";
import app from "./app"
import config from "./app/config";
const port = config.port

const Main = () => {
    try {
        
        app.listen(port, () => {
            mongoose.connect(config.data_base_url as string)
            console.log(`server is running on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
    
}

Main()