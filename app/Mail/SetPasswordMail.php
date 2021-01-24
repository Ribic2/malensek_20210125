<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;


    public string $name;
    public string $token;
    public string $surname;

    /**
     * Create a new message instance.
     *
     * @param string $name
     * @param string $surname
     */
    public function __construct(string $name, string $surname, $token)
    {
        $this->name = $name;
        $this->surname = $surname;
        $this->token = $token;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from(env('MAIL_FROM_ADDRESS'), 'UniqCards')->markdown('mails.user.SetPasswordMail');
    }
}
