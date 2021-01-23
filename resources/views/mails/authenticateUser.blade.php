@component('mail::header')
@endcomponent

@component('mail::message')
    # Potrditev računa!

    Po uspešni registraciji morate potrditi e-naslov in nastaviti vaše geslo!

    E-naslov: {{ $email }}

    @component('mail::button', ['url' => "http://127.0.0.1:8000/confirmation?email=".$email."&authentication=true", 'color' => 'success'])
        Potrdi
    @endcomponent

@endcomponent

@yield('mail::footer')
