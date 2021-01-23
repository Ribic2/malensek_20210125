@component('mail::message')
    # Potrditev paketa!

    Pozdravljeni {{ $Name }} {{ $Surname }}!

    Vaše naročilo je bilo odposlano in bo prispelo v parih dneh!
    Paket je bil poslan na naslov {{ $houseNumberAndStreet }} {{ $Postcode }}

    Lp, Uniq Cards

@endcomponent

@yield('mail::footer')
