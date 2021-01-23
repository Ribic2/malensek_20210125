<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class oneCharUpper implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return strtolower($value) != $value;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Geslo mora vsebovati vsaj en velik znak!.';
    }
}
