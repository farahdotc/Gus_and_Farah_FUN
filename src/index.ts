import { app } from "./app"


const start = () => {
    app.listen(3000, () => {
        console.log("The server is running on port 3000")
    })
}

start();