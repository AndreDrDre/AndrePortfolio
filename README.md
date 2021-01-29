# AndrePorfolio

This is my online portfolio developed to provide a demonstration of my programming skills as well as work related experience. The website has been designed to be compatible with both desktop and mobile screen sizes.

## Languages Used
- JavaScript
- Php
- CSS
- Html

## Deployment

### -Heroku

Heroku cannot load html directly and thus we need a workout which is very simple. 

-create a index.php file : <?php include_once("home.html"); ?>
-create a composer.json file : {}

Deploy your git repository via the the heroku CLI. Here is a link : https://devcenter.heroku.com/articles/git

### -AWS

I used AWS to store my static images in S3 bucket

- Make sure to set permissions to public
- Bucket policy : {
    "Version": "2008-10-17",
    "Statement": [
        {
            "Sid": "AllowPublicRead",
            "Effect": "Allow",
            "Principal": {
                "AWS": "*"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::'your-bucket-name'/(**star-symbol**)"
        }
    ]
}

## SendGrid

I have currently deactivated my sendgrid which allows you to send php emails through a contact form via Heroku: https://devcenter.heroku.com/articles/sendgrid
My composer.json file is present, thus just copy the code and then in your Git enviroment:

- Install composer (I Used Homebrew on mac)
- Update your composer which will generate composer.lock file
- In this Github repository it will show you how to create an enviroment folder that can be ignored where your API will remain private: https://github.com/sendgrid/sendgrid-php

