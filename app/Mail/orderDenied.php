<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class orderDenied extends Mailable
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
    public function build()
    {
        return $this->from(env('MAIL_FROM_ADDRESS'), 'UniqCards')
        ->subject('Vaše naročilo je bilo zavrnjeno')
        ->markdown('mails.orderDenied');
    }
}
