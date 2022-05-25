<?php 

if(isset($_POST['submit'])){
    $to = "elena.nisman85@gmail.com"; // Здесь нужно написать e-mail, куда будут приходить письма
    $from = "lenchik-1710@ukr.net"; // Здесь нужно написать e-mail, от кого будут приходить письма, например no-reply@epicblog.net
    $first_name = $_POST['name'];
    $subject = "Форма отправки сообщений с сайта";
    $subject2 = "Copy of your form submission";
    $message = "ФИО посетителя: ". $first_name . " | Адрес электронной почты: "  . $_POST['email'] . " | Комментарий: " . $_POST['text'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['text'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
	
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
    // echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
	// echo "<br /><br /><a href='#'>Вернуться на сайт.</a>";

}

?>
