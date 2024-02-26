const {emailAdd, appPass, baseURL} = require('../config');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	auth: {
		user: emailAdd,
		pass: appPass
	}
});

/* EMAIL CONTENT SECTION */

const registrationMailHTML =`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Include Font Awesome CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-GL4rQpaqjkeDDVNwir9gT5MWtymOzN51b8C6jzs3A6uUu5aP8+fj/NZG0GZXhI9M4Mt3KV7JhpT48KlSrvA3Jg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>
    /* Add your styling here */
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .summary-container {
      text-align: center;
      box-sizing: border-box;
      padding: 20px;
      background-color: #f8f8f8;
    }

    .verification-container {
      text-align: center;
      box-sizing: border-box;
      max-width: 600px;
      margin: 50px auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
      color: #333333;
    }

    p {
      color: #555555;
    }

    a {
      text-decoration: none;
      color: #1a1a1a;
      padding: 0.5rem 2rem;
      border-radius: 1rem;
      background-color: hsl(43.3,96.4%,56.3%);
      display: inline-block;
      margin-top: 15px;
    }

    /* Add additional styling as needed */
  </style>
  <title>Unibites - Your Ideal PG Accommodation Awaits</title>
</head>
<body>

<!-- Short Summary Section -->
<div class="summary-container">
  <h2>Discover Your Ideal PG Accommodation with UniBites</h2>
  <p>
  UniBites is your dedicated online platform to simplify the search for paying guest accommodations. Whether you're a student or a working professional, find your perfect living space hassle-free. Explore verified listings, read reviews, and connect directly with property owners. Your ideal PG accommodation is just a click away!
  </p>
</div>

<!-- Rest of the PGFinder Content -->
<div class="verification-container">
  <h1>kindly verify the Mail.</h1>
  <p>
    To complete the registration process, we need to verify your email address. Please click the following link to verify your email address:
  </p>

  <a href="${baseURL}/auth/validate?validationKey=insertValidationKey">
    <i class="fas fa-envelope"></i> Verify Now!
  </a>

  <br>
  <br>

  <p>
    <!-- If you did not register for our service, please ignore this email. -->
    <br>
    <!-- Thank you for your cooperation. -->
    <br>
    Best regards <br>
    <strong>Team Unibites</strong>
  </p>
</div>

</body>
</html>


`;

const bookingSuccessHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>PG Booking Confirmation</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <style>
        .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            border-radius: 5px; /* 5px rounded corners */
        }
        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }
        .container {
            max-width: 700px; /* Adjust based on preference */
        }
        .card-header {
            background-color: #007bff;
            color: white;
            font-size: 20px;
        }
        .table th, .table td {
            padding: 0.75rem;
            vertical-align: top;
            border-top: none;
        }
    </style>
</head>
<body>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12 mx-auto">
                <div class="card">
                    <div class="card-header">
                        PG Booking Confirmation
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Dear customer-name,</h5>
                        <p class="card-text">
                            We hope this email finds you well. We're excited to confirm your PG booking and look forward to welcoming you. Thank you for choosing our services for your stay.
                        </p>
                        <p class="card-text">
                            Below are your booking details for reference:
                        </p>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th scope="row">Booking ID:</th>
                                    <td>booking-id</td>
                                </tr>
                                <tr>
                                    <th scope="row">Booking Date:</th>
                                    <td>booking-date</td>
                                </tr>
                                <tr>
                                    <th scope="row">Amount Paid:</th>
                                    <td>amount-paid</td>
                                </tr>
                            </tbody>
                        </table>
                        <p class="card-text">
                            Your payment of amount-paid has been successfully received, and your booking is now confirmed. We'll notify you once the PG Owner finalizes your registration. Should there be any changes or cancellations, rest assured that any payments made will be refunded promptly.
                        </p>
                        <p class="card-text">
                            Thank you once again for choosing us. If you have any questions or need further assistance, please don't hesitate to reach out.
                        </p>
                        <p class="card-text"><strong>Best regards,</strong><br>Unibites Team</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</body>
</html>

`                                                                                               

const bookingFailHTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PG Booking Failed</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <style>
        body {
            background-color: #f8f9fa;
        }

        .container {
            max-width: 600px;
            margin-top: 50px;
        }

        .card {
            border: none;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .card-body {
            padding: 30px;
            text-align: center;
        }

        .card-title {
            color:#E18F48;
            font-size: 24px;
            margin-bottom: 20px;
        }

        .card-text {
            color: #495057;
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 15px;
        }

        .table th,
        .table td {
            padding: 0.75rem;
            vertical-align: top;
            border-top: none;
        }
       
        
    </style>
</head>

<body>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title" >PG Booking Failed</h4>
                <p class="card-text " style="font-weight:bold;">Dear customer-name</p>
                <p class="card-text">We regret to inform you that your PG booking has encountered an internal error, leading to the failure of the booking process. We sincerely apologize for any inconvenience caused.</p>
                <p class="card-text">As per our records, the following details were provided during the booking attempt:</p>
                <table class="table">
                    <tbody>
                        <tr>
                            <th scope="row">Payment ID:</th>
                            <td>payment-id</td>
                        </tr>
                        <tr>
                            <th scope="row">Property ID:</th>
                            <td>property-id</td>
                        </tr>
                        <tr>
                            <th scope="row">Payment Date:</th>
                            <td>payment-date</td>
                        </tr>
                        <tr>
                            <th scope="row">Amount Paid:</th>
                            <td><span class="highlight-bg">amount-paid</span></td>
                        </tr>
                    </tbody>
                </table>
                <p class="card-text">Our team is actively investigating the issue, and we assure you that corrective measures will be implemented to prevent such incidents in the future. Rest assured, the full payment amount of <span class="highlight-bg">amount-paid</span> will be refunded to you within 14 working days.</p>
                <p class="card-text">We sincerely apologize for any inconvenience this may have caused and appreciate your understanding in this matter. If you have any queries or concerns, please feel free to contact us. Our support team is ready to assist you.</p>
                <p class="card-text">Once again, we apologize for the inconvenience caused and remain committed to providing you with exceptional service in the future.</p>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</body>

</html>
`
const bookingFinalSuccessEmailHTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmed</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        div {
            background-color: #ffffff;
            box-shadow:#E18F48;
            border-radius: 10px;
            padding: 30px;
            text-align: center;
            width: 80%;
            max-width: 400px;
            border: 2px solid #E18F48;
        }

        h1 {
            color:#E18F48;
            margin-bottom: 20px;
        }

        strong {
           font-weight:bold;
        }

        table {
            margin: 20px auto;
            width: 100%;
            border-collapse: collapse;
        }

        table, th, td {
            border: 1px solid #E18F48;
        }

        th, td {
            padding: 10px;
            text-align: left;
        }

        p {
            margin: 10px 0;
        }

        p:last-child {
            font-weight: bold;
            color:#E18F48;
        }
    </style>
</head>

<body>
    <div>
        <h1>Hurray 🎉🥳, Your Booking is Confirmed!</h1>
        <p>We are glad to inform you that your booking with ID: <pre>insertBookingID</pre> for PG/Hostel <strong>insertPropName</strong> has been confirmed by the owner. You can view complete details of the booking on your dashboard.</p>
        <h3>Contact the Owner for More Details:</h3>
        <table>
            <tbody>
                <tr>
                    <td><strong>Email:</strong></td>
                    <td>insertPropEmail</td>
                </tr>
                <tr>
                    <td><strong>Phone:</strong></td>
                    <td>insertPropPhone</td>
                </tr>
            </tbody>
        </table>
        <p>If you need any further information, we are always here to help!</p>
        <p> Best Regards, Team Unibites</p>
    </div>
</body>

</html>
`                                                                                                 

const bookingFinalFailEmailHTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Denied</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        div {
            background-color: #ffffff;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            padding: 30px;
            text-align: center;
            width: 80%;
            max-width: 400px;
            border: 2px solid #e18f48;
        }

        h1 {
            color: #e18f48;
            margin-bottom: 20px;
        }

        strong {
            color: #e18f48;
        }

        table {
            margin: 20px auto;
            width: 100%;
            border-collapse: collapse;
        }

        table, th, td {
            border: 1px solid #e18f48;
        }

        th, td {
            padding: 10px;
            text-align: left;
        }

        p {
            margin: 10px 0;
        }

        #id{
            color: #e18f48;
        }
    </style>
</head>

<body>
    <div>
        <h1>Booking Denied</h1>
        <p>Dear User, We regret to inform you that your booking for <strong>insertPropName</strong> <p id="id">ID:</p><pre>insertBookingID</pre> has been denied by the owner.</p>
        <p>You can review the details on your dashboard.</p>
        <h3>Contact the Owner for More Information:</h3>
        <table>
            <tbody>
                <tr>
                    <td><strong>Email:</strong></td>
                    <td>insertPropEmail</td>
                </tr>
                <tr>
                    <td><strong>Phone:</strong></td>
                    <td>insertPropPhone</td>
                </tr>
            </tbody>
        </table>
        <p>If you need further assistance or information, feel free to reach out. We're here to help!</p>
        <p style="font-size: 1.2em;">Best Regards ,Team Unibites </p>
    </div>
</body>

</html>
`


const forgotPasswordHTML =`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Change Request</title>
    <style>
        body {
            font-family: 'Helvetica Neue', sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        div {
            background-color: #ffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            padding: 30px;
            text-align: center;
            width: 80%;
            max-width: 500px;
            border: 2px solid #e18f48;
        }

        div > div {
            padding: 1.5rem;
            margin: 0 20px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }

        h2 {
            margin: 0;
           
            font-size: 24px;
        }

        p {
            margin: 20px 0;
            color: #333;
            line-height: 1.6;
            font-size: 16px;
        }

        a {
            color: #ffffff;
            text-decoration: none;
            font-weight: bold;
            background-color: #e18f48;
            padding: 10px 20px;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        a:hover {
            background-color: #2575af;
        }

        footer {
            margin-top: 20px;
            color: #777;
            font-size: 14px;
        }
    </style>
</head>

<body>
    <div>
        <div>
            <h2>Password Change Request</h2>
        </div>
        <p>We've received a request to change your password. To enhance your account security, please click the link below to reset your password:</p>
        <a href="${baseURL}/auth/change-password?key=insertKey">Reset Password Now</a>
        <p>If you didn't request this change, you can ignore this email. Your account's security is our top priority.</p>
        <footer>Best regards,<br>Team Unibites</footer>
    </div>
</body>

</html>
`

const passwordChangeHTML =`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Change Confirmation</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        div {
            background-color: #ffffff;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            width: 80%;
            max-width: 500px;
            border: 2px solid #e18f48;
        }

        div > div {
            padding: 1.5rem;
            margin: 0 20px;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
        }

        h2 {
            margin: 0;
            font-size: 24px;
        }

        p {
            margin: 20px 0;
            color: #555;
            line-height: 1.6;
            font-size: 16px;
        }

        footer {
            margin-top: 20px;
            color: #e18f48;
            font-size: 14px;
        }
    </style>
</head>

<body>
    <div>
        <div>
            <h2>Password Change Confirmation</h2>
        </div>
        <p>This email is to confirm that your password has recently changed. If it was not you, please change your password immediately to secure your account.</p>
        <footer>Best Regards, Team Unibites</footer>
    </div>
</body>

</html>
`


/* EMAIL SENDING FUNCTIONS */

async function sendRegistrationEmail (recipientAddress, validationKey) {
	const htmlContent = registrationMailHTML.replace('insertValidationKey', validationKey);

	const mailOptions = {
		from: emailAdd,
		to: recipientAddress,
		subject: "Unibites | Please verify your email address ",
		html: htmlContent,
	};

	return await transporter.sendMail(mailOptions);
}

async function sendBookingSuccessEmail (recipientAddress, details) {
	const htmlContent = bookingSuccessHTML
		.replaceAll('customer-name', details.customerName)
		.replaceAll('amount-paid', details.amountPaid)
		.replaceAll('booking-id', details.bookingID)
		.replaceAll('booking-date', details.bookingDate.toLocaleDateString('en'));

	const mailOptions = {
		from: emailAdd,
		to: recipientAddress,
		subject: "Unibites | Booking Confirmation ",
		html: htmlContent,
	};

	return await transporter.sendMail(mailOptions);
}

async function sendBookingFailEmail (recipientAddress, details) {
	const htmlContent = bookingFailHTML
		.replaceAll('customer-name', details.customerName)
		.replaceAll('amount-paid', details.amountPaid)
		.replaceAll('payment-id', details.paymentID)
		.replaceAll('payment-date', details.date.toLocaleDateString('en'))
		.replaceAll('property-id', details.propertyID);

	const mailOptions = {
		from: emailAdd,
		to: recipientAddress,
		subject: "Unibites | Booking Confirmation ",
		html: htmlContent,
	};

	return await transporter.sendMail(mailOptions);
}

async function sendForgotPasswordEmail (recipientAddress, key) {
	const htmlContent = forgotPasswordHTML.replace('insertKey', key);

	const mailOptions = {
		from: emailAdd,
		to: recipientAddress,
		subject: "Unibites | Forgot Password ",
		html: htmlContent,
	};

	return await transporter.sendMail(mailOptions);
}

async function sendPasswordChangeEmail (recipientAddress) {
	const mailOptions = {
		from: emailAdd,
		to: recipientAddress,
		subject: "Unibites | Password Changed ",
		html: passwordChangeHTML,
	};

	return await transporter.sendMail(mailOptions);
}

async function sendBookingFinalSuccessEmail (recipientAddress, content) {
	const bookingFinalSuccessContent = bookingFinalSuccessEmailHTML
		.replaceAll('insertBookingID', content.bookingID)
		.replaceAll('insertPropName', content.propName)
		.replaceAll('insertPropEmail', content.propEmail)
		.replaceAll('insertPropPhone', content.propPhone)

	const mailOptions = {
		from: emailAdd,
		to: recipientAddress,
		subject: "Unibites | Booking Finalized ",
		html: bookingFinalSuccessContent,
	};

	return await transporter.sendMail(mailOptions);
}

async function sendBookingFinalFailEmail (recipientAddress, content) {
	const bookingFinalFailContent = bookingFinalFailEmailHTML
		.replaceAll('insertBookingID', content.bookingID)
		.replaceAll('insertPropName', content.propName)
		.replaceAll('insertPropEmail', content.propEmail)
		.replaceAll('insertPropPhone', content.propPhone)

	const mailOptions = {
		from: emailAdd,
		to: recipientAddress,
		subject: "Unibites | Booking Finalized ",
		html: bookingFinalFailContent,
	};

	return await transporter.sendMail(mailOptions);
}

module.exports = {
	sendRegistrationEmail,
	sendBookingSuccessEmail,
	sendBookingFailEmail,
	sendForgotPasswordEmail,
	sendPasswordChangeEmail,
	sendBookingFinalSuccessEmail,
	sendBookingFinalFailEmail,
}