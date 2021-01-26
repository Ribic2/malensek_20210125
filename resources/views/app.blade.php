<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="google-site-verification" content="0NmhldSwMV4Oy1i_KQywHKpLJpSEmIVAWMQcVflO8go"/>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-N05SS96KP0%22%3E"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-N05SS96KP0');
    </script>
    <meta name=" description
    " content="UniqCards offers unique greeting cards to celebrate every occasion, weddings, birthdays, holidays, you
    name it! You can also request a card to be personalized to your needs and whishes and we will make sure that you get
    the perfect greeting card in the right time!">
    <link rel="icon" href="/storage/app/public/store/favicon-16x16.png" type="image/gif" sizes="16x16">
    <title>Uniq Cards</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">

</div>

<script src="{{ asset('js/app.js') }}" defer></script>
<script src="https://www.paypal.com/sdk/js?client-id={{ env('PAYPAL_LIVE_CLIENT_ID') }}&currency=EUR"></script>

</body>
</html>
