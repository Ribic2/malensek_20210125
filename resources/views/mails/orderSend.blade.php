@component('mail::message')
    # Potrditev paketa!

    Pozdravljeni {{ $Name }} {{ $Surname }}!

    Vaše naročilo je bilo predano prevozniku. Pošiljko pričakujte v roku parih dni.
    Paket je bil poslan na naslov {{ $houseNumberAndStreet }} {{ $Postcode }}

    Lp, Uniq Cards

@endcomponent

@yield('mail::footer')
