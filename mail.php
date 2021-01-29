<?php
require 'vendor/autoload.php';


$email = new \SendGrid\Mail\Mail(); 
$email->setFrom("andres@easpe.co.za", "Example User");
$email->setSubject("Sending with SendGrid is Fun");
$email->addTo("originsgrand@gamil.com", "Example User");
$email->addContent("text/plain", "and easy to do anywhere, even with PHP");
$email->addContent(
    "text/html", "<strong>and easy to do anywhere, even with PHP</strong>"
);
$apiKey = 'SENDGRID_API_KEY';
$sendgrid = new \SendGrid($apiKey);
try {
    $response = $sendgrid->send($email);
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
} catch (Exception $e) {
    echo 'Caught exception: '. $e->getMessage() ."\n";
}
?>