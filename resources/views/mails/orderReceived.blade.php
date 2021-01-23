@component('mail::message')
    # Potrditev paketa!

    Pozdravljeni {{ $Name }} {{ $Surname }}!

    Vaše naročilo je bilo sprejeto.

    Lp, Uniq Cards
@endcomponent

@yield('mail::footer')
