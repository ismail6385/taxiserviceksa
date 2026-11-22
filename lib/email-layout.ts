// One responsive layout for every email the site sends.
//
// Email clients are not browsers: Gmail/Outlook ignore flexbox, many strip
// <style>, and Outlook needs tables. So the layout is table-based with inline
// styles (works everywhere), plus a small <style> block with media queries
// that Gmail (web + app), Apple Mail and iOS Mail honour to stack label/value
// rows, widen buttons and tighten padding on phones.
//
// Usage:
//   html: renderEmail({
//       preheader: 'Your quote for Riyadh → Dubai',
//       title: 'Your Quote',
//       greeting: 'Dear Ahmed,',
//       blocks: [para('Thank you…'), card('Journey Details', rows([...])), buttons([...])],
//   })

export const BRAND = {
    name: 'Taxi Service KSA',
    tagline: 'Private Transportation & Chauffeur Services',
    phoneDisplay: '+966 57 580 6733',
    whatsapp: '966575806733',
    email: 'info@taxiserviceksa.com',
    site: 'https://taxiserviceksa.com',
    accent: '#C6FF00',
    dark: '#0f172a',
    text: '#1f2937',
    muted: '#6b7280',
    border: '#e5e7eb',
    soft: '#f8fafc',
};

export function esc(str: unknown): string {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

/** '2026-12-04' -> 'Fri, 4 Dec 2026'. Dates are calendar dates (KSA), so no timezone shift. */
export function niceDate(iso?: string | null): string {
    if (!iso) return '';
    const m = String(iso).match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!m) return esc(iso);
    const d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
    return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
}

/** '14:30' -> '2:30 PM' */
export function niceTime(t?: string | null): string {
    if (!t) return '';
    const m = String(t).match(/^(\d{1,2}):(\d{2})/);
    if (!m) return esc(t);
    const h = +m[1];
    return `${h % 12 || 12}:${m[2]} ${h >= 12 ? 'PM' : 'AM'}`;
}

/** Date + time for a trip; says "to be confirmed" for the missing part. */
export function whenText(date?: string | null, time?: string | null): string {
    const d = niceDate(date);
    const t = niceTime(time);
    if (!d && !t) return 'To be confirmed';
    if (!t) return `${d} <span style="color:${'#6b7280'};font-weight:400;">(time to be confirmed)</span>`;
    return d ? `${d} at ${t}` : `${t} (date to be confirmed)`;
}

const FONT =`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`;

/** A paragraph of body text. Pass already-escaped HTML. */
export const para = (html: string, opts: { muted?: boolean; size?: number; center?: boolean } = {}) =>
    `<p style="margin:0 0 14px;font-size:${opts.size ?? 15}px;line-height:1.6;color:${opts.muted ? BRAND.muted : BRAND.text};${opts.center ? 'text-align:center;' : ''}">${html}</p>`;

/** Label/value rows. On phones each row stacks (label above value). Values are HTML. */
export function rows(items: ([string, string] | null | false | undefined)[]): string {
    const list = items.filter(Boolean) as [string, string][];
    if (!list.length) return '';
    return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">${list.map(([label, value], i) => `
<tr>
<td class="stack lbl" valign="top" style="padding:9px 12px 9px 0;width:38%;font-size:13px;line-height:1.5;color:${BRAND.muted};${i ? `border-top:1px solid ${BRAND.border};` : ''}">${esc(label)}</td>
<td class="stack val" valign="top" style="padding:9px 0;font-size:14px;line-height:1.5;color:${BRAND.text};font-weight:600;word-break:break-word;${i ? `border-top:1px solid ${BRAND.border};` : ''}">${value || '—'}</td>
</tr>`).join('')}
</table>`;
}

/** A soft panel with an optional title. */
export const card = (title: string | null, inner: string) => `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 18px;border-collapse:separate;">
<tr><td class="card" style="background:${BRAND.soft};border:1px solid ${BRAND.border};border-radius:12px;padding:18px 20px;">
${title ? `<p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:${BRAND.dark};">${esc(title)}<span style="display:block;width:36px;height:3px;background:${BRAND.accent};margin-top:6px;border-radius:2px;line-height:3px;font-size:1px;">&nbsp;</span></p>` : ''}
${inner}
</td></tr>
</table>`;

/** Dark highlight box: a big number (price) or an important message. */
export function highlight(opts: { label?: string; big?: string; text?: string; sub?: string }): string {
    return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 18px;border-collapse:separate;">
<tr><td style="background:${BRAND.dark};border-radius:12px;padding:20px;text-align:center;">
${opts.label ? `<p style="margin:0 0 6px;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:#94a3b8;">${esc(opts.label)}</p>` : ''}
${opts.big ? `<p class="big" style="margin:0;font-size:32px;line-height:1.2;font-weight:800;color:${BRAND.accent};">${opts.big}</p>` : ''}
${opts.text ? `<p style="margin:0;font-size:15px;line-height:1.5;font-weight:600;color:#ffffff;">${opts.text}</p>` : ''}
${opts.sub ? `<p style="margin:8px 0 0;font-size:12px;line-height:1.5;color:#94a3b8;">${opts.sub}</p>` : ''}
</td></tr>
</table>`;
}

/** Colored notice strip (success / warning / info). */
export function notice(html: string, tone: 'success' | 'warning' | 'info' | 'danger' = 'info'): string {
    const c = { success: ['#ecfdf5', '#a7f3d0', '#065f46'], warning: ['#fffbeb', '#fde68a', '#92400e'], info: ['#eff6ff', '#bfdbfe', '#1e40af'], danger: ['#fef2f2', '#fecaca', '#991b1b'] }[tone];
    return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 18px;border-collapse:separate;">
<tr><td style="background:${c[0]};border:1px solid ${c[1]};border-radius:10px;padding:14px 16px;font-size:14px;line-height:1.55;color:${c[2]};">${html}</td></tr>
</table>`;
}

export type EmailButton = { href: string; label: string; tone?: 'primary' | 'whatsapp' | 'dark' | 'light' };
const BTN: Record<NonNullable<EmailButton['tone']>, [string, string, string]> = {
    primary: [BRAND.accent, '#000000', BRAND.accent],
    whatsapp: ['#25D366', '#ffffff', '#25D366'],
    dark: [BRAND.dark, '#ffffff', BRAND.dark],
    light: ['#ffffff', BRAND.dark, BRAND.border],
};

/** One or more buttons. Side by side on desktop, full width stacked on phones. */
export function buttons(list: (EmailButton | null | false | undefined)[]): string {
    const items = list.filter(Boolean) as EmailButton[];
    if (!items.length) return '';
    const cell = (b: EmailButton) => {
        const [bg, fg, bd] = BTN[b.tone || 'primary'];
        return `<td class="btn-cell" align="center" style="padding:6px;">
<a href="${b.href}" target="_blank" class="btn" style="display:inline-block;background:${bg};color:${fg};border:1px solid ${bd};border-radius:10px;padding:14px 22px;font-size:15px;font-weight:700;line-height:1.2;text-decoration:none;text-align:center;min-width:180px;">${b.label}</a>
</td>`;
    };
    return `
<table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" class="btn-table" style="margin:6px auto 18px;">
<tr>${items.map(cell).join('')}</tr>
</table>`;
}

/** Simple comparison table (e.g. vehicle options). Stays a table on phones but tightens. */
export function dataTable(headers: string[], body: string[][], opts: { alignLastRight?: boolean } = {}): string {
    const last = headers.length - 1;
    const align = (i: number) => (opts.alignLastRight && i === last ? 'right' : 'left');
    return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin:0 0 8px;border:1px solid ${BRAND.border};">
<tr>${headers.map((h, i) => `<th class="tcell" align="${align(i)}" style="background:${BRAND.dark};color:${BRAND.accent};font-size:11px;letter-spacing:1px;text-transform:uppercase;padding:10px 12px;font-weight:700;">${esc(h)}</th>`).join('')}</tr>
${body.map((r, ri) => `<tr>${r.map((c, i) => `<td class="tcell" align="${align(i)}" valign="top" style="padding:12px;font-size:14px;line-height:1.45;color:${BRAND.text};background:${ri % 2 ? BRAND.soft : '#ffffff'};border-top:1px solid ${BRAND.border};${i === last && opts.alignLastRight ? 'font-weight:800;white-space:nowrap;' : ''}">${c}</td>`).join('')}</tr>`).join('')}
</table>`;
}

/** Bulleted list. Items are HTML. */
export const list = (items: string[]) =>
    `<ul style="margin:0 0 14px;padding-left:20px;font-size:14px;line-height:1.6;color:${BRAND.text};">${items.map(i => `<li style="margin:0 0 4px;">${i}</li>`).join('')}</ul>`;

export const divider = () => `<div style="height:1px;line-height:1px;font-size:1px;background:${BRAND.border};margin:6px 0 18px;">&nbsp;</div>`;

export const whatsappUrl = (text?: string) => `https://wa.me/${BRAND.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

/**
 * Full email document.
 * - preheader: the grey preview line shown in the inbox list.
 * - title / subtitle: header band.
 * - blocks: body HTML pieces, in order (use the helpers above).
 * - audience 'internal' gets a compact header and no marketing footer.
 */
export function renderEmail(opts: {
    preheader?: string;
    title: string;
    subtitle?: string;
    greeting?: string;
    blocks: (string | null | false | undefined)[];
    audience?: 'customer' | 'internal' | 'driver';
    footerNote?: string;
    /** Replaces the default "Warm regards, Taxi Service KSA Team" sign-off (HTML). */
    signoff?: string;
}): string {
    const internal = opts.audience === 'internal';
    const body = opts.blocks.filter(Boolean).join('\n');
    return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${esc(opts.title)}</title>
<style>
  body { margin:0; padding:0; width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
  table { border-collapse:collapse; }
  img { border:0; max-width:100%; height:auto; }
  a { color:${BRAND.dark}; }
  @media only screen and (max-width: 620px) {
    .container { width:100% !important; }
    .outer { padding:0 !important; }
    .pad { padding:22px 16px !important; }
    .head { padding:22px 16px !important; border-radius:0 !important; }
    .shell { border-radius:0 !important; border-left:0 !important; border-right:0 !important; }
    .card { padding:14px 14px !important; }
    .stack { display:block !important; width:100% !important; box-sizing:border-box; }
    .lbl { padding:10px 0 0 !important; border-top:1px solid ${BRAND.border} !important; }
    .val { padding:2px 0 10px !important; border-top:0 !important; font-size:15px !important; }
    tr:first-child .lbl { border-top:0 !important; }
    .btn-table, .btn-table tbody, .btn-table tr { display:block !important; width:100% !important; }
    .btn-cell { display:block !important; width:100% !important; padding:5px 0 !important; box-sizing:border-box; }
    .btn { display:block !important; min-width:0 !important; width:100% !important; box-sizing:border-box; }
    .big { font-size:28px !important; }
    .tcell { padding:9px 8px !important; font-size:13px !important; }
    h1.title { font-size:22px !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:#eef2f6;">
${opts.preheader ? `<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;mso-hide:all;">${esc(opts.preheader)}&#8199;&#847;&#8199;&#847;&#8199;&#847;&#8199;&#847;&#8199;&#847;&#8199;&#847;</div>` : ''}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#eef2f6;">
<tr><td class="outer" align="center" style="padding:24px 12px;">
<table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;font-family:${FONT};">
<tr><td class="head" style="background:${BRAND.dark};border-radius:14px 14px 0 0;padding:26px 28px;">
<p style="margin:0 0 10px;font-size:12px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:${BRAND.accent};">${BRAND.name}</p>
<h1 class="title" style="margin:0;font-size:24px;line-height:1.25;font-weight:800;color:#ffffff;">${esc(opts.title)}</h1>
${opts.subtitle ? `<p style="margin:8px 0 0;font-size:14px;line-height:1.5;color:#cbd5e1;">${opts.subtitle}</p>` : ''}
</td></tr>
<tr><td class="pad shell" style="background:#ffffff;border:1px solid ${BRAND.border};border-top:0;border-radius:0 0 14px 14px;padding:28px;">
${opts.greeting ? `<p style="margin:0 0 14px;font-size:16px;line-height:1.5;color:${BRAND.text};">${opts.greeting}</p>` : ''}
${body}
${internal ? '' : `
<div style="height:1px;line-height:1px;font-size:1px;background:${BRAND.border};margin:10px 0 18px;">&nbsp;</div>
${opts.signoff ?? `<p style="margin:0 0 4px;font-size:14px;line-height:1.5;color:${BRAND.text};">Warm regards,</p>
<p style="margin:0 0 16px;font-size:14px;line-height:1.5;color:${BRAND.text};font-weight:700;">${BRAND.name} Team</p>`}`}
${opts.footerNote ? `<p style="margin:0;font-size:12px;line-height:1.5;color:${BRAND.muted};">${opts.footerNote}</p>` : ''}
</td></tr>
${internal ? '' : `
<tr><td align="center" style="padding:18px 16px 6px;font-size:12px;line-height:1.7;color:${BRAND.muted};">
<strong style="color:${BRAND.dark};">${BRAND.name}</strong> · ${esc(BRAND.tagline)}<br>
<a href="tel:+${BRAND.whatsapp}" style="color:${BRAND.muted};text-decoration:none;">${BRAND.phoneDisplay}</a> ·
<a href="https://wa.me/${BRAND.whatsapp}" style="color:${BRAND.muted};text-decoration:none;">WhatsApp</a> ·
<a href="mailto:${BRAND.email}" style="color:${BRAND.muted};text-decoration:none;">${BRAND.email}</a><br>
<a href="${BRAND.site}" style="color:${BRAND.muted};text-decoration:none;">taxiserviceksa.com</a>
</td></tr>`}
</table>
</td></tr>
</table>
</body>
</html>`;
}
