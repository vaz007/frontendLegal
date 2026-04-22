import { Resend } from 'resend';
const resend = new Resend('re_9djKKPX2_PwUBs9ysAXa1osRJYeAMoz1G');

async function test() {
  const result = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'test@example.com',
    subject: 'Test',
    html: '<p>Test</p>'
  });
  console.log(result);
}
test();
