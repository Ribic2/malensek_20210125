<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>test</title>
    <style>
        body { font-family: DejaVu Sans, sans-serif; }
        td {
            text-align: center;
        }
    </style>
</head>
<body>
<div>
    <h1>UniqCards</h1>
    <h3>Račun: {{ $items[0]->UUID }}</h3>
    <div style="width: 300px; position: relative; left: 400px; text-align: right">
        <div>
            <p>Prejemenik: {{ $user->user->Name }} {{ $user->user->Surname }}</p>
            <p>Naslov: {{ $user->user->houseNumberAndStreet }} {{ $user->user->Postcode }}</p>
        </div>
    </div>
    <table style="width: 100%; position: relative; top: 50px">
        <thead style="border-bottom: solid 1px black;">
        <tr>
            <th>Ime izdelka</th>
            <th>Znesek</th>
            <th>Količina</th>
            <th>Popust</th>
            <th>DDV</th>
            <th>Skupaj</th>
            <th>Z DDV</th>
        </tr>
        </thead>
        <tbody>
        @php($counter=0)
        @foreach($items as $i => $obj)
            <tr>
                <td>{{ $obj->items->itemName  }}</td>
                <td>{{ $obj->items->itemPrice  }}&euro;</td>
                <td>{{ $obj->quantity  }}</td>
                @if ($obj->items->discount === 0)
                    <td>/</td>
                @else
                    <td>{{ $obj->items->discount }}%</td>
                @endif
                <td>{{ env('MIX_DDV') }}%</td>
                <td>{{ $obj->items->itemPrice * $obj->quantity - (($obj->items->itemPrice * $obj->quantity * env('MIX_DDV')) / 100) }}&euro;</td>
                <td>{{  $obj->items->itemPrice * $obj->quantity }}</td>
            </tr>
            {{  $counter+=$obj->items->itemPrice * $obj->quantity }}
        @endforeach
        </tbody>
    </table>
    <div style="width: 200px; position: relative; top: 50px; left: 500px; text-align: right">
        <hr>
        <p>Skupaj brez ddv: {{$counter - (($counter * env('MIX_DDV')) / 100) }}&euro;</p>
        <hr>
        <p>Skupaj: {{$counter}}&euro;</p>
    </div>
</div>

</body>

</html>
