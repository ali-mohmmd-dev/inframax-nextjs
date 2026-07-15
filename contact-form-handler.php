<?php
$page_title = "Contact &#8211; Inframax demo";
$body_class = "wp-singular page-template-default page page-id-16 wp-embed-responsive wp-theme-sedona ehf-header ehf-footer ehf-template-sedona ehf-stylesheet-sedona fullwidth  elementor-default elementor-kit-7 elementor-page elementor-page-16";
$page_css_id = "elementor-post-16-css";
$page_css_path = "css/post-16.css?ver=1774034063";
$base_url = "";

/* ---------------------------------------------------------------------
 * Contact form handler
 * Sends the submitted contact form to Info@inframaxuae.com using PHP's
 * built-in mail() function.
 * ------------------------------------------------------------------- */
$form_status  = ''; // 'success' | 'error' | ''
$form_message = '';

// Keep submitted values so the form can be re-populated if validation fails
$field_name    = '';
$field_email   = '';
$field_subject = '';
$field_message = '';

// Support both regular POST and JSON input
$input_data = $_POST;
if (empty($input_data)) {
    $json = file_get_contents('php://input');
    if (!empty($json)) {
        $input_data = json_decode($json, true) ?? [];
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && (isset($input_data['your-name']) || isset($input_data['name']))) {

    // Basic sanitisation / trimming of the incoming fields
    $field_name    = trim($input_data['your-name']    ?? $input_data['name']    ?? '');
    $field_email   = trim($input_data['your-email']   ?? $input_data['email']   ?? '');
    $field_subject = trim($input_data['your-subject'] ?? $input_data['subject'] ?? '');
    $field_message = trim($input_data['your-message'] ?? $input_data['message'] ?? '');
    $field_consent = isset($input_data['your-consent']) || isset($input_data['policy_agreement']) || isset($input_data['consent']);

    $errors = [];

    if ($field_name === '') {
        $errors[] = 'Please enter your name.';
    }

    if ($field_email === '' || !filter_var($field_email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Please enter a valid email address.';
    }

    if ($field_message === '') {
        $errors[] = 'Please enter a message.';
    }

    if (!$field_consent) {
        $errors[] = 'Please agree to the privacy policy.';
    }

    if (empty($errors)) {

        $to = 'Info@inframaxuae.com';
        // $to = 'accoutfortrial@gmail.com';

        $subject = 'Website Contact Form: ' . ($field_subject !== '' ? $field_subject : 'New enquiry');

        $body  = "You have received a new message from the website contact form.\r\n\r\n";
        $body .= "Name: "    . $field_name    . "\r\n";
        $body .= "Email: "   . $field_email   . "\r\n";
        $body .= "Subject: " . ($field_subject !== '' ? $field_subject : '(none)') . "\r\n";
        $body .= "\r\nMessage:\r\n" . $field_message . "\r\n";

        // Build headers. Use a safe From address on your own domain and set
        // Reply-To to the visitor so replies go straight to them.
        $from_address = 'website@inframaxuae.com';

        $headers   = [];
        $headers[] = 'From: Inframax Website <' . $from_address . '>';
        $headers[] = 'Reply-To: ' . $field_name . ' <' . $field_email . '>';
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-Type: text/plain; charset=UTF-8';

        $mail_sent = @mail($to, $subject, $body, implode("\r\n", $headers));

        if ($mail_sent) {
            $form_status  = 'success';
            $form_message = 'Thank you! Your message has been sent successfully. We will get back to you shortly.';

            // Clear fields after a successful send
            $field_name = $field_email = $field_subject = $field_message = '';
        } else {
            $form_status  = 'error';
            $form_message = 'Sorry, something went wrong while sending your message. Please try again later.';
        }

    } else {
        $form_status  = 'error';
        $form_message = implode(' ', $errors);
    }

    // Return JSON if requested by fetch/AJAX
    if (
        (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') ||
        (isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false) ||
        !empty(file_get_contents('php://input'))
    ) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode([
            'status'  => $form_status,
            'message' => $form_message,
        ]);
        exit;
    }
}
?>
