<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class orderConfirmed extends Mailable
{
    use Queueable, SerializesModels;

    public string $name;
    public string $surname;
    public string $houseNumberAndStreet;
    public string $postcode;

    /**
     * Create a new message instance.
     *
     * @param string $name
     * @param string $surname

     * @param string $houseNumberAndStreet
     * @param string $postcode
     */
    public function __construct(string $name, string $surname, string $houseNumberAndStreet, string $postcode)
    {
        $this->surname = $surname;
        $this->name = $name;
        $this->houseNumberAndStreet = $houseNumberAndStreet;
        $this->postcode = $postcode;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(): orderConfirmed
    {
        return $this->subject('Naročilo je bilo prejeto.')
            ->markdown('mails.orderSend')
            ->with([
                "Name" => $this->name,
                "Surname" => $this->surname,
                "houseNumberAndStreet" => $this->houseNumberAndStreet,
                "Postcode" => $this->postcode
            ]);
    }
}
