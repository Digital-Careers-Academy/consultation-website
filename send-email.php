<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = filter_var($_POST['to'], FILTER_VALIDATE_EMAIL);
    $subject = $_POST['subject'];
    $body = $_POST['body'];

    $headers = "From: dev@digitalcareers.academy\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    http_response_code(405);
    echo "Method not allowed";
}
?>