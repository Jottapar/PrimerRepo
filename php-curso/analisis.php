<?php

$palabras = ["pantera", "cinturon", "general"];

$palabrasdesordenadas = [];

for($i=0; $i<3; $i++){
    $palabrasdesordenadas = str_shuffle($palabras);
};

print_r($palabrasdesordenadas);

echo "
<form action='analisis.php'>
    <input type='text' name='palabra0'>
    <input type='text' name='palabra1'>
    <input type='text' name='palabra2'>
    <button type='submit'>Enviar</button>
</form>
"
?>