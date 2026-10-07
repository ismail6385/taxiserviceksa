// Replaces the vercel.json cron: calls the existing route daily at 08:00 UTC.
export default async () => {
    const res = await fetch(`${process.env.URL}/api/cron/send-review-requests/`, {
        headers: { authorization: `Bearer ${process.env.CRON_SECRET}` },
    });
    console.log('send-review-requests:', res.status, await res.text());
};

export const config = { schedule: '0 8 * * *' };
