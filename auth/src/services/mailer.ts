const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

type MailInfo = {
  subject: any;
  recipients: any;
};

class Mailer extends helper.Mail {
  constructor({ subject, recipients }: MailInfo, content: any) {
    super();

    this.sgApi = sendgrid(process.env.SENDGRID_KEY);
    this.from_email = new helper.Email('mailyservice080@gmail.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses(recipients: any) {
    return recipients.map(({ email }: any) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();

    this.recipients.forEach((recipient: any) => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON(),
    });

    const response = await this.sgApi.API(request);
    return response;
  }
}

export default Mailer;
