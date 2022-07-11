<?php
$to = "mail@yandex.ru"; 
$tema = "Данные клиента для записи на урок по Математике";  
$message = "Имя: ".$_POST['name']."<br>"; 
$message .= "Номер: ".$_POST['phone']."<br>";  
$message .= "Почта: ".$_POST['email']."<br>";  
$message =  "Предмет: ".$_POST['subj']."<br>";
$from = "mail@yandex.ru";
$headers  = 'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; 
$headers .= "From: $from";
mail($to, $tema, $message, $headers); 
?>
if(isset($_POST["send"])) {
    <!-- $_SESSION["send"] = 'Сообщение отправлено!'; -->
    exit('<meta http-equiv="refresh" content="0; url=https://t.me/telegram" />');
}