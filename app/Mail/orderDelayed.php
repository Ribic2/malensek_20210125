<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class orderDelayed extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(): orderDelayed
    {
        return $this->from('mail@example.com', 'Mailtrap')
            ->subject('Vaše naročilo je bilo zamaknjeno.')
            ->markdown('mails.orderDelayed');
    }
}
