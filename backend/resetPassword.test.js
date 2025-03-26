const request = require('supertest');
const { app, transporter } = require('./resetPassword');

jest.mock('nodemailer');

transporter.sendMail = jest.fn();

describe('POST /reset-password', () => {
  it('should send a password reset email successfully', async () => {
    transporter.sendMail.mockImplementation((mailOptions, callback) => {
      callback(null, { response: 'Email sent' });
    });

    const response = await request(app)
      .post('/reset-password')
      .send({ email: 'test@example.com' });

    expect(response.status).toBe(200);
    expect(response.text).toBe('Password reset email sent: Email sent');
  });

  it('should handle errors when sending the email', async () => {
    transporter.sendMail.mockImplementation((mailOptions, callback) => {
      callback(new Error('Failed to send email'));
    });

    const response = await request(app)
      .post('/reset-password')
      .send({ email: 'test@example.com' });

    expect(response.status).toBe(500);
    expect(response.text).toBe('Error: Failed to send email');
  });
});
