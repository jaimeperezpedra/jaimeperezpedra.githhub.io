new Vue({
  el: "#contact",
  data: {
    notifications: []
  },
  methods: {
    async sendEmail(e) {
      e.preventDefault()
      if (!this.checkFields(e)) return

      try {
        await emailjs.sendForm('service_6el7t4t', 'template_bkimbc9', e.target, '-3LybSlGR5XfIAjPT');
        this.showNotification({
          title: 'Email sent',
          id: Date.now(),
          type: 'success',
          text: 'Thanks for your email, I will contact you a soon as posible.'
        })
      } catch (err) {
        this.showNotification({
          title: 'Error',
          id: Date.now(),
          type: 'error',
          text: 'Sorry there was an error sending your email, try again or contact directly to jaime-perez-pedraza@live.com'
        })
      }
      finally {
        this.$refs.form.reset();
      }
    },
    checkFields(e) {
      const message = []
      if (e.target.from_name.value === '') {
        message.push('name')
      }
      if (e.target.reply_to.value === '') {
        message.push('email')
      }
      if (e.target.message.value === '') {
        message.push('details')
      }
      if (message.length !== 0) {
        this.showNotification({
          title: `Error please complete the form: ${message.join(',')}.`,
          id: Date.now(),
          type: 'error',
        })
        return false
      }
      return true
    },
    showNotification(notification) {
      this.notifications.push(notification);
      setTimeout(() => {
        this.removeNotification(notification.id);
      }, 5000);
    },
    removeNotification(notificationId) {
      this.notifications = this.notifications.filter(notification => notification.id !== notificationId);
    }
  },

})