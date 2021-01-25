@component('mail::message')
    # Potrditev paketa!

    Pozdravljeni {{ $Name }} {{ $Surname }}!
   
    Obvestili vas bomo takoj, ko pošiljko odpošljemo.
    
    Zahvaljujemo se vam za vaš nakup, UniqCards!
@endcomponent

@yield('mail::footer')
