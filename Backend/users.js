const express = require('express');
const { Pool } = require('pg');
const cors = require('cors'); // Import the cors middleware
const app = express();
// const bcrypt = require('bcrypt');
// const nodemailer = require('nodemailer');
// const crypto = require('crypto');
const CryptoJS = require('crypto-js');
 
// import ".env";
const PORT = process.env.PORT || 3000;

// PostgreSQL connection pool
const pool = new Pool({
  user: 'anrispte', // Username
  host: 'flora.db.elephantsql.com', // Hostname
  database: 'anrispte', // Default database name
  password: 'ku0CdyH2Cz_HVetTrnoMcCoXFz3Xn3HF', // Password
  port: 5432, // Port
});



app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
// function sendEmail({ recipient_email, OTP }) {
//   return new Promise((resolve, reject) => {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "balajimadala3006@gmail.com",
//         pass: "Balaji5226@",
//       },
//     });

//     const mail_configs = {
//       from: "balajimadala3006@gmail.com",
//       to: recipient_email,
//       subject: "KODING 101 PASSWORD RECOVERY",
//       html: `<!DOCTYPE html>
// <html lang="en" >
// <head>
//   <meta charset="UTF-8">
//   <title>CodePen - OTP Email Template</title>
  

// </head>
// <body>
// <!-- partial:index.partial.html -->
// <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
//   <div style="margin:50px auto;width:70%;padding:20px 0">
//     <div style="border-bottom:1px solid #eee">
//       <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Koding 101</a>
//     </div>
//     <p style="font-size:1.1em">Hi,</p>
//     <p>Thank you for choosing Koding 101. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
//     <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
//     <p style="font-size:0.9em;">Regards,<br />Koding 101</p>
//     <hr style="border:none;border-top:1px solid #eee" />
//     <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
//       <p>Koding 101 Inc</p>
//       <p>1600 Amphitheatre Parkway</p>
//       <p>California</p>
//     </div>
//   </div>
// </div>
// <!-- partial -->
  
// </body>
// </html>`
//     };
//     transporter.sendMail(mail_configs, function (error, info) {
//       if (error) {
//         console.log(error);
//         return reject({ message: An error has occured });
//       }
//       return resolve({ message: "Email sent succesfuly" });
//     });
//   });
// }

app.get("/", (req, res) => {
  console.log("balajimadala3006@gmail.com");
});

app.post("/send_recovery_email", (req, res) => {
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

// Signup endpoint
app.post('/signup', async (req, res) => {
    const { email, password, phone, department } = req.body;

    try {
        // Check if email is already registered
        const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userExists.rows.length > 0) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = CryptoJS.SHA256(password).toString();
        // Insert new user into the database
        await pool.query('INSERT INTO users (email, password, phone, department) VALUES ($1, $2, $3, $4)', [email, hashedPassword, phone, department]);
        console.log('New user registered:', { email, phone, department });

        res.json({ message: 'Signup successful' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


//google Signup
app.post('/googleSignIn', async (req, res) => {
  const { name, email } = req.body; // Assuming you're receiving 'name' and 'email' in the request body
  
  try {
    // Check if the user already exists in the database
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
    
    // If the user doesn't exist, insert their data into the database
    if (result.rows.length === 0) {
      await client.query('INSERT INTO users (fullname, email) VALUES ($1, $2)', [name, email]);
      res.status(200).send('User data stored successfully');
    } else {
      res.status(200).send('User already exists');
    }
    
    client.release();
  } catch (error) {
    console.error('Error storing/retrieving user data:', error);
    res.status(500).send('Error storing/retrieving user data');
  }
});



// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      res.status(401).send('Invalid username or password');
      return;
    }

    const hashedPassword = CryptoJS.SHA256(password).toString(); // Hash the password
    
    if (hashedPassword === user.password) {
      // Successful login 
      const { id, fullname, email,  department, role,} = user;
      res.status(200).json({ id, fullname, email ,department, role }); // Send user details including role    
    } else {
      res.status(401).send('Invalid username or password');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send('An error occurred while logging in');
  }
});

// Assuming you have already set up your Express app and established database connection

// POST endpoint to check if a user with the given email exists
app.post('/checkUser', async (req, res) => {
  const { email } = req.body;

  try {
      // Query the database to check if a user with the given email exists
      const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

      // If a user with the given email exists, return a response indicating success
      if (result.rows.length > 0) {
          res.status(200).json({ exists: true });
      } else {
          // If no user with the given email exists, return a response indicating failure
          res.status(200).json({ exists: false });
      }
  } catch (error) {
      // If an error occurs during the database query, return an error response
      console.error('Error checking user:', error);
      res.status(500).send('An error occurred while checking user');
  }
});



app.get('/userprofile/${userId}', async (req, res) => {
  try {
    const result = await pool.query('SELECT fullname,picture,role FROM users ');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching suggested activities:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        // Find user by email
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        // Check if user exists
        if (user.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('Password reset requested for:', user.rows[0]);
        res.json({ message: 'Password reset request received' });
    } catch (error) {
        console.error('Error during forgot password:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 