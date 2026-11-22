import { sendMail } from './mail-server';
import { renderEmail, buttons } from './email-layout';

/**
 * Driver-onboarding status emails. Reuses lib/mail-server.ts directly
 * (inline HTML templates, same as every app/api/send-*-email route) but is
 * called straight from the API routes/service layer that already run
 * server-side during a status change, instead of round-tripping through a
 * separate /api/send-*-email endpoint the way client-triggered emails do
 * elsewhere in this app — there's no client to trigger these from.
 */

function escapeHtml(str: string | undefined | null): string {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://taxiserviceksa.com';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'info@taxiserviceksa.com';

// Shared responsive layout (lib/email-layout.ts); plain <p> tags in the
// bodies get the same text style as the other emails.
function wrap(title: string, bodyHtml: string): string {
    const styled = bodyHtml.replace(/<p>/g, '<p style="margin:0 0 14px;font-size:15px;line-height:1.6;color:#1f2937;">');
    return renderEmail({
        audience: 'driver',
        title,
        subtitle: 'Driver onboarding',
        blocks: [styled],
        signoff: '<p style="margin:0 0 4px;font-size:14px;color:#1f2937;">Best regards,</p><p style="margin:0 0 16px;font-size:14px;font-weight:700;color:#1f2937;">Onboarding Team, Taxi Service KSA</p>',
    });
}

export async function sendOnboardingSubmittedEmail(driver: { full_name: string; email?: string | null }) {
    try {
        await sendMail({
            to: ADMIN_EMAIL,
            subject: `🚖 Driver Onboarding Submitted: ${driver.full_name}`,
            html: wrap('New Onboarding Submission', `
                <p>${escapeHtml(driver.full_name)} has completed and submitted their driver onboarding profile.</p>
                <p>Review it in the admin panel under <strong>Driver Onboarding &gt; Pending Review</strong>.</p>
            `),
        });
    } catch (e) { console.error('Failed to send onboarding-submitted admin email:', e); }

    if (driver.email) {
        try {
            await sendMail({
                to: driver.email,
                subject: 'Your Driver Profile Was Submitted - Taxi Service KSA',
                html: wrap('Submitted for Review', `
                    <p>Dear <strong>${escapeHtml(driver.full_name)}</strong>,</p>
                    <p>Thank you — your driver and vehicle profile has been submitted and is now under review by our team.</p>
                    <p>We'll notify you as soon as it's approved, or if we need any changes.</p>
                `),
            });
        } catch (e) { console.warn('Failed to send onboarding-submitted driver email:', e); }
    }
}

export async function sendChangesRequestedEmail(driver: { full_name: string; email?: string | null }, feedback: string, onboardingUrl: string) {
    if (!driver.email) return;
    try {
        await sendMail({
            to: driver.email,
            subject: 'Changes Requested on Your Driver Profile - Taxi Service KSA',
            html: wrap('Changes Requested', `
                <p>Dear <strong>${escapeHtml(driver.full_name)}</strong>,</p>
                <p>Our team reviewed your driver profile and needs a few changes before it can be approved:</p>
                <div style="background-color: #fff8e1; border-left: 4px solid #f5a623; padding: 15px; margin: 20px 0;">
                    <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(feedback)}</p>
                </div>
                <p>Please open your onboarding link to update your profile:</p>
                ${buttons([{ href: onboardingUrl, label: 'Update My Profile', tone: 'primary' }])}
            `),
        });
    } catch (e) { console.warn('Failed to send changes-requested email:', e); }
}

export async function sendDriverApprovedEmail(driver: { full_name: string; email?: string | null; slug?: string | null }) {
    if (!driver.email) return;
    const profileLine = driver.slug
        ? `<p>Your public profile is now live: <a href="${SITE_URL}/drivers/${driver.slug}/">${SITE_URL}/drivers/${driver.slug}/</a></p>`
        : '';
    try {
        await sendMail({
            to: driver.email,
            subject: 'You’re Approved! - Taxi Service KSA',
            html: wrap('Profile Approved', `
                <p>Dear <strong>${escapeHtml(driver.full_name)}</strong>,</p>
                <p>Great news — your driver profile has been approved and is now visible to customers in your selected service areas.</p>
                ${profileLine}
            `),
        });
    } catch (e) { console.warn('Failed to send approved email:', e); }
}

export async function sendDriverRejectedEmail(driver: { full_name: string; email?: string | null }, reason?: string) {
    if (!driver.email) return;
    try {
        await sendMail({
            to: driver.email,
            subject: 'Update on Your Driver Application - Taxi Service KSA',
            html: wrap('Application Update', `
                <p>Dear <strong>${escapeHtml(driver.full_name)}</strong>,</p>
                <p>After review, we're unable to approve your driver profile at this time.</p>
                ${reason ? `<p style="white-space: pre-wrap;">${escapeHtml(reason)}</p>` : ''}
                <p>If you believe this is a mistake, please contact us at ${ADMIN_EMAIL}.</p>
            `),
        });
    } catch (e) { console.warn('Failed to send rejected email:', e); }
}

export async function sendDriverSuspendedEmail(driver: { full_name: string; email?: string | null }, reason?: string) {
    if (!driver.email) return;
    try {
        await sendMail({
            to: driver.email,
            subject: 'Your Driver Profile Has Been Suspended - Taxi Service KSA',
            html: wrap('Profile Suspended', `
                <p>Dear <strong>${escapeHtml(driver.full_name)}</strong>,</p>
                <p>Your driver profile has been temporarily suspended and is no longer visible to customers.</p>
                ${reason ? `<p style="white-space: pre-wrap;">${escapeHtml(reason)}</p>` : ''}
                <p>Please contact us at ${ADMIN_EMAIL} if you have questions.</p>
            `),
        });
    } catch (e) { console.warn('Failed to send suspended email:', e); }
}
