// Replaces the vercel.json cron: calls the existing route daily at 06:00 UTC.
export default async () => {
    const res = await fetch(`${process.env.URL}/api/cron/send-reminders/`, {
        headers: { authorization: `Bearer ${process.env.CRON_SECRET}` },
    });
    console.log('send-reminders:', res.status, await res.text());
};

export const config = { schedule: '0 6 * * *' };
