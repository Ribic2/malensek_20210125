@component('mail::message')
    # Potrditev paketa!

    Pozdravljeni {{ $Name }} {{ $Surname }}!

    Lp, Uniq Cards
@endcomponent

@yield('mail::footer')
