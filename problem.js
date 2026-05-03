// // Authentication System(Student portal)
// const express = require('express');
// const bcrypt = require('bcrypt');
// const app = express();

// app.use(express.json());
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     const user = { username: "user@gmail.com", password: "12345..." };
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (isMatch) {
//         res.send("Login successful");
//     }else {
//         res.send("Invalid ");
//     }
// });

// app.listen(3000);
