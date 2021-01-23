<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="/storage/store/favicon-16x16.png" type="image/gif" sizes="16x16">
    <title>Uniq Cards</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">

</div>

<script src="{{ asset('js/app.js') }}" defer></script>
<script src="https://www.paypal.com/sdk/js?client-id=AdM7mP7H6PXAfX0PL8xEVN4FqmByJMtlPAiigT2hBceluf_AoZilSI6RtwZXifXHStK72dYo87M_HM8i&currency=EUR"></script>

</body>
</html>
