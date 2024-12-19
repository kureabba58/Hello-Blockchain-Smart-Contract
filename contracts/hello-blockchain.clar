;; Define the hello message variable
(define-data-var hello-message (string-ascii 11) "Hello World")

;; Set the hello message
(define-public (set-hello (message (string-ascii 11)))
  (begin
    (var-set hello-message message)
    (ok "Message set successfully")
  )
)

;; Get the hello message
(define-public (get-hello)
  (ok (var-get hello-message))
)
