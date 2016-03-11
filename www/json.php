<?
$json=file_get_contents('obyekwisata.json');
$data = json_decode($json, TRUE);
echo "<pre>";
print_r($data);
echo "</pre>";



?>