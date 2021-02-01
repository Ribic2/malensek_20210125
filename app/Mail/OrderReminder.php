<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderReminder extends Mailable
{
    use Queueable, SerializesModels;

    public string $name;
    public string $surname;

    /**
     * Create a new message instance.
     *
     * @param string $name
     * @param string $surname
     */
    public function __construct(string $name, string $surname)
    {
        $this->surname = $surname;
        $this->name = $name;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(): OrderReminder
    {
        return $this->subject('Prejeli ste novo naročilo.')
            ->markdown('mails.orderReminder')
            ->with([
                'Name' => $this->name,
                'Surname' => $this->surname
            ]);
    }
}
