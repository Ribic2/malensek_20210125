@component('mail::message')
    # Nastavitev gesla!

    Dobrodošli {{ $name }} {{ $surname }}!
    <br>
    Spodaj kliknite link, s katerim boste nastavili svoje geslo.
    <br>

    @component('mail::button', ['url' => url('/set-password/?token='.$token)])
        Nastavi geslo
    @endcomponent

    {{ config('app.name') }}
@endcomponent
