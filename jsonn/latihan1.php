<?php 

// $mahasiswa = [
//     "nama" => "Clara Andini",
//     "NIM"  => "2217020166",
//     "email" => "claraandini@gmail.com"
// ];

$dbh = new PDO('mysql:host=localhost;dbname=dw_perusahaan', 'root', '');
$db = $dbh->prepare('SELECT * FROM karyawan');
$db->execute();
$users = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($users);
echo $data;

?>