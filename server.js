const express = require('express')
const app = express()
const PORT = 8000

const usersRoute = require("./routes/users")
app.use(express.json())
app.use(express.urlencoded())

app.use("/users", usersRoute)
app.listen(PORT, ()=>{
    console.log(`Server is running at.${PORT}`)
})

