<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Auth\Notifications\ResetPassword;

class MailResetPasswordNotification extends ResetPassword{
    use Queueable;

    /**
     * Create a new notification instance.
     * @param $token
     */
    public function __construct($token)
    {
        parent::__construct($token);
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return MailMessage
     */
    public function toMail($notifiable)
    {
        $link = url("/reset-password/".$this->token );
        return ( new MailMessage )
            ->subject( 'Spremeni geslo' )
            ->line( "Pozdravljeni! Prejeli ste to e-pošto, ker hočete spremeniti geslo." )
            ->action( 'Spremeni geslo', $link )
            ->line( "Povezava za spremembo gesla bo potekla ".config('auth.passwords.users.expire')." minut." )
            ->line( "Če niste zahtevali spremembo geslo, ne nadaljujte." );
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
