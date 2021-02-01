@component('mail::message')
    # Prejeli ste nov paket!

    Uporabnik {{ $Name }} {{ $Surname }}, je naročil paket!
@endcomponent

@yield('mail::footer')
