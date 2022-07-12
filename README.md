# Simple API

this is just generate random image

open the [data](data/) folder to see what's available

example from [public/api/aesthetic.php](public/api/aesthetic.php)

```php
<?php 

header("Content-Type: image/jpeg");

$json = json_decode(file_get_contents("../../data/aesthetic.json"),true);
$jumlah = count($json);
$pilih = $json[rand(0,$jumlah-1)];

echo file_get_contents($pilih);
```

## License

[GNU GPL v2](LICENSE)
