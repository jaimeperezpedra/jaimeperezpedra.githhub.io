new Vue({
  el: "#contact-app",
  methods: {
    sendEmail(e) {
      e.preventDefault()
      try {
        emailjs.sendForm('service_6el7t4t', 'template_bkimbc9', e.target, '-3LybSlGR5XfIAjPT')
      } catch (err) {
        console.error(err)
      }
    }
  }
})