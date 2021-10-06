var newsletterForm = document.getElementById('newsletter-signup')

if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    setTimeout(submitForm, 1000);
    var formSubmitted = false;

    function submitForm() {
      if (!formSubmitted) {
        formSubmitted = true;
        newsletterForm.submit();
      }
    }

    plausible('Newsletter signup', {callback: submitForm});
  })
}
