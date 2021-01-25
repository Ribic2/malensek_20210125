<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class orderReceived extends Mailable
{
    use Queueable, SerializesModels;

    public string $name;
    public string $surname;
    public $pdf;

    /**
     * Create a new message instance.
     * @param string $name
     * @param string $surname
     * @param $pdf
     */
    public function __construct(string $name, string $surname, $pdf)
    {
        $this->name = $name;
        $this->surname = $surname;
        $this->pdf = $pdf;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(): orderReceived
    {
        return $this->subject('Paket prijet.')
            ->markdown('mails.orderReceived')
            ->with([
                'Name' => $this->name,
                'Surname' => $this->surname
        ])->attachData($this->pdf->output(), 'račun.pdf');
    }
}
