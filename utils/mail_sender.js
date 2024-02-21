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
  <h1>kindly validate your identity. </h1>
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
    <strong>Team UniBites</strong>
  </p>
</div>

</body>
</html>


`;

const bookingSuccessHTML = '' +
' <!DOCTYPE html>                                                                                                            ' +
' 	<html lang="en">                                                                                                                   ' +
' 	<head>                                                                                                                   ' +
' 	<title>PG Booking Confirmation</title>                                                                                   ' +
' 	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">                     ' +
' 	</head>                                                                                                                  ' +
' 	<body>                                                                                                                   ' +
' 		<div class="container mt-5">                                                                                     ' +
' 			<div class="row">                                                                                            ' +
' 				<div class="col-md-6 mx-auto">                                                                           ' +
' 					<div class="card">                                                                                   ' +
' 						<div class="card-body">                                                                          ' +
' 							<h4 class="card-title">PG Booking Confirmation</h4>                                          ' +
' 							<p class="card-text">Dear customer-name,</p>                                                 ' +
' 							<p class="card-text">We hope this email finds you well. We would like to take this           ' +
' 								opportunity to thank you for booking a PG with us. We appreciate your trust in our services  ' +
' 								and look forward to providing you with the best possible experience.</p>                     ' +
' 							<p class="card-text">As per your request, we would like to confirm your booking details:</p> ' +
' 							<table class="table">                                                                        ' +
' 								<tbody>                                                                                      ' +
' 								<tr>                                                                                         ' +
' 									<th scope="row">Booking ID:</th>                                                         ' +
' 									<td>booking-id</td>                                                                      ' +
' 								</tr>                                                                                        ' +
' 								<tr>                                                                                         ' +
' 									<th scope="row">Booking Date:</th>                                                       ' +
' 									<td>booking-date</td>                                                                    ' +
' 								</tr>                                                                                        ' +
' 								<tr>                                                                                         ' +
' 									<th scope="row">Amount Paid:</th>                                                        ' +
' 									<td>amount-paid</td>                                                                     ' +
' 								</tr>                                                                                        ' +
' 								</tbody>                                                                                     ' +
' 							</table>                                                                                         ' +
' 							<p class="card-text">We have received your payment of amount-paid, and the confirmation of   ' +
' 								your booking has been processed.</p>                                                         ' +
' 							<p class="card-text">The completion status will be updated as soon and PG Owner confirms     ' +
' 								your registration, please keep the booking confirmation in check from your dashboard on PG   ' +
' 								Finder. If in any case this booking is denied, your amount will be returned to you as soon   ' +
' 								as possible.</p>                                                                             ' +
' 							<p class="card-text">Once again, thank you for choosing our PG. We look forward to serving   ' +
' 								you soon.</p>                                                                                ' +
' 							<p class="card-text">Best regards,</p>                                                       ' +
' 							<p class="card-text">Unibites</p>                                                         ' +
' 						</div>                                                                                               ' +
' 					</div>                                                                                                   ' +
' 				</div>                                                                                                       ' +
' 			</div>                                                                                                           ' +
' 		</div>                                                                                                               ' +
' 		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>                                             ' +
' 		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>                    ' +
' 		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>                          ' +
' 	</body>                                                                                                                  ' +
' </html>                                                                                                                    ';

const bookingFailHTML = '' +
'<!doctype html>                                                                                                                    ' +
'	<html lang="en">                                                                                                                ' +
'	<head>                                                                                                                          ' +
'	<meta charset="UTF-8">                                                                                                          ' +
'	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">  ' +
'	<meta http-equiv="X-UA-Compatible" content="ie=edge">                                                                           ' +
'	<title>PG Booking Failed</title>                                                                                                ' +
'	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">                            ' +
'	</head>                                                                                                                         ' +
'	<body>                                                                                                                          ' +
'	<div class="container mt-5">                                                                                                    ' +
'		<div class="row">                                                                                                           ' +
'			<div class="col-md-6 mx-auto">                                                                                          ' +
'				<div class="card">                                                                                                 ' +
'					<div class="card-body">                                                                                       ' +
'						<h4 class="card-title">PG Booking Failed</h4>                                                             ' +
'						<p class="card-text">Dear customer-name,</p>                                                              ' +
'						<p class="card-text">We regret to inform you that your PG booking has failed due to an internal           ' +
'							error. We apologize for the inconvenience caused.</p>                                                ' +
'						<p class="card-text">As per our records, the following details were provided by you during the            ' +
'							booking process:</p>                                                                                 ' +
'						<table class="table">                                                                                     ' +
'							<tbody>                                                                                              ' +
'							<tr>                                                                                                 ' +
'								<th scope="row">Payment ID:</th>                                                                 ' +
'								<td>payment-id</td>                                                                              ' +
'							</tr>                                                                                                ' +
'							<tr>                                                                                                 ' +
'								<th scope="row">Property ID:</th>                                                                ' +
'								<td>property-id</td>                                                                             ' +
'							</tr>                                                                                                ' +
'							<tr>                                                                                                 ' +
'								<th scope="row">Payment Date:</th>                                                               ' +
'								<td>payment-date</td>                                                                            ' +
'							</tr>                                                                                                ' +
'							<tr>                                                                                                 ' +
'								<th scope="row">Amount Paid:</th>                                                                ' +
'								<td>amount-paid</td>                                                                             ' +
'							</tr>                                                                                                ' +
'							</tbody>                                                                                             ' +
'						</table>                                                                                                  ' +
'						<p class="card-text">We are investigating the issue and will ensure that such incidents do not            ' +
'							happen in the future. Please rest assured that the payment amount of amount-paid will be             ' +
'							refunded to you within 14 working days.</p>                                                          ' +
'						<p class="card-text">We apologize for any inconvenience caused and appreciate your understanding          ' +
'							in this matter. If you have any queries or concerns, please feel free to contact us.                 ' +
'							We would be happy to assist you in any way we can.</p>                                               ' +
'						<p class="card-text">Once again, we apologize for the inconvenience caused and hope to serve              ' +
'							you better in the future.</p>                                                                        ' +
'						<p class="card-text">Best regards,</p>                                                                    ' +
'						<p class="card-text">Unibites</p>                                                                      ' +
'					</div>                                                                                                        ' +
'				</div>                                                                                                             ' +
'			</div>                                                                                                                  ' +
'		</div>                                                                                                                      ' +
'	</div>                                                                                                                          ' +
'	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>                                                        ' +
'	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>                               ' +
'	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>                                     ' +
'	</body>                                                                                                                         ' +
'</html>                                                                                                                            ';

const bookingFinalSuccessEmailHTML = '' +
'	<div>                                                                                                            ' +
'		<h1>Hurray 🎉🥳, Your Booking is confirmed!</h1>                                                               ' +
'		<p>We are glad to inform you that your booking with id : <pre>insertBookingID</pre> for PG / Hostel          ' +
'			<strong>insertPropName</strong> has been confirmed by the owner. You can view complete details of the    ' +
'			booking                                                                                                  ' +
'			on your dashboard.                                                                                       ' +
'		</p>                                                                                                         ' +
'		<h3>For any further details about the PG, you may contact the owner.</h3>                                    ' +
'		<table>                                                                                                      ' +
'			<tbody>                                                                                                  ' +
'			<tr>                                                                                                     ' +
'				<td><strong>Email</strong></td>                                                                     ' +
'				<td>insertPropEmail</td>                                                                                  ' +
'			</tr>                                                                                                    ' +
'			<tr>                                                                                                     ' +
'				<td><strong>Phone</strong></td>                                                                     ' +
'				<td>insertPropPhone</td>                                                                                  ' +
'			</tr>                                                                                                    ' +
'			</tbody>                                                                                                 ' +
'		</table>                                                                                                     ' +
'		<p>For any further information on our side, we are always here to help!</p>                                  ' +
'		<p>Team Unibites </p>                                                                                      ' +
'	</div>                                                                                                        ';

const bookingFinalFailEmailHTML = '' +
	'	<div>                                                                                                            ' +
	'		<h1>Sorry, Booking Failed!</h1>                                                               ' +
	'		<p>We are sad to inform you that your booking with id : <pre>insertBookingID</pre> for PG / Hostel          ' +
	'			<strong>insertPropName</strong> has been denied by the owner. You can view complete details of the    ' +
	'			booking                                                                                                  ' +
	'			on your dashboard.                                                                                       ' +
	'		</p>                                                                                                         ' +
	'		<h3>For any further details about the PG, you may contact the owner.</h3>                                    ' +
	'		<table>                                                                                                      ' +
	'			<tbody>                                                                                                  ' +
	'			<tr>                                                                                                     ' +
	'				<td><strong>Email</strong></td>                                                                     ' +
	'				<td>insertPropEmail</td>                                                                                  ' +
	'			</tr>                                                                                                    ' +
	'			<tr>                                                                                                     ' +
	'				<td><strong>Phone</strong></td>                                                                     ' +
	'				<td>insertPropPhone</td>                                                                                  ' +
	'			</tr>                                                                                                    ' +
	'			</tbody>                                                                                                 ' +
	'		</table>                                                                                                     ' +
	'		<p>For any further information on our side, we are always here to help!</p>                                  ' +
	'		<p>Team Unibites </p>                                                                                      ' +
	'	</div>                                                                                                        ';


const forgotPasswordHTML = '' +
"<div>" +
`	<div style='padding: 1rem; background-color: gray; text-align: center'>   	` +
`		<h2>Password Change Request</h2>                                        ` +
`	</div>                                                                    	` +
`                                                                               ` +
`	<p>Here's the link to reset your password <a href="${baseURL}/auth/change-password?key=insertKey">reset-password</a>. </p>` +
"</div>";

const passwordChangeHTML = '' +
"<div>" +
`	<div style='padding: 1rem; background-color: gray; text-align: center'>   	` +
`		<h2>Password Change Confirmation</h2>                                        ` +
`	</div>                                                                    	` +
`                                                                               ` +
`	<p>This email is to confirm that your password has recently changed. If it was not you then please change your password!</p>` +
"</div>";


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
		subject: "PG Finder | Booking Confirmation ",
		html: htmlContent,
	};

	return await transporter.sendMail(mailOptions);
}

async function sendForgotPasswordEmail (recipientAddress, key) {
	const htmlContent = forgotPasswordHTML.replace('insertKey', key);

	const mailOptions = {
		from: emailAdd,
		to: recipientAddress,
		subject: "PG Finder | Forgot Password ",
		html: htmlContent,
	};

	return await transporter.sendMail(mailOptions);
}

async function sendPasswordChangeEmail (recipientAddress) {
	const mailOptions = {
		from: emailAdd,
		to: recipientAddress,
		subject: "PG Finder | Password Changed ",
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
		subject: "PG Finder | Booking Finalized ",
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
		subject: "PG Finder | Booking Finalized ",
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