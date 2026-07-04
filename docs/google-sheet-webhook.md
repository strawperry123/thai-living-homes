# Google Sheet Webhook Setup

This site uses a simple Google Apps Script Web App endpoint to save mandate and inquiry form submissions into one Google Sheet.

## 1. Create the Google Sheet

Create a new Google Sheet using this account:

`khantharos.adm@gmail.com`

Suggested file name:

`KHANTHAROS Website Leads`

Create one sheet tab named:

`Leads`

Add this header row in row 1:

| Submitted At | Source Page | Request Type | Name | Phone | LINE ID | Email | Preferred Contact Method | Budget | Location Interest | Property Type | Message | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Status values you can use later:

- New / 已收到
- Contacted / 已聯繫
- Following / 跟進中
- Closed / 已結案
- No Response / 無回覆

## 2. Add Google Apps Script

In the Google Sheet, go to:

`Extensions` -> `Apps Script`

Paste this code:

```javascript
const SHEET_NAME = 'Leads';
const NOTIFY_EMAIL = 'khantharos.adm@gmail.com';

const HEADERS = [
  'Submitted At',
  'Source Page',
  'Request Type',
  'Name',
  'Phone',
  'LINE ID',
  'Email',
  'Preferred Contact Method',
  'Budget',
  'Location Interest',
  'Property Type',
  'Message',
  'Status',
];

function doPost(e) {
  try {
    const sheet = getLeadSheet_();
    const data = e && e.parameter ? e.parameter : {};
    const submittedAt = data.submittedAt || new Date().toISOString();

    const row = [
      submittedAt,
      data.sourcePage || '',
      data.requestType || '',
      data.name || '',
      data.phone || '',
      data.lineId || '',
      data.email || '',
      data.preferredContactMethod || '',
      data.budget || '',
      data.locationInterest || '',
      data.propertyType || '',
      data.message || '',
      data.status || 'New / 已收到',
    ];

    sheet.appendRow(row);
    sendEmailNotification_(row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('KHANTHAROS lead webhook is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function getLeadSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  const firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const needsHeaders = firstRow.every((cell) => !cell);

  if (needsHeaders) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function sendEmailNotification_(row) {
  const [submittedAt, sourcePage, requestType, name, phone, lineId, email, preferredContactMethod, budget, locationInterest, propertyType, message] = row;

  const subject = `New website request: ${requestType || 'Lead'} - ${name || 'No name'}`;
  const body = [
    'A new KHANTHAROS website request was submitted.',
    '',
    `Submitted At: ${submittedAt}`,
    `Source Page: ${sourcePage}`,
    `Request Type: ${requestType}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `LINE ID: ${lineId}`,
    `Email: ${email}`,
    `Preferred Contact Method: ${preferredContactMethod}`,
    `Budget: ${budget}`,
    `Location Interest: ${locationInterest}`,
    `Property Type: ${propertyType}`,
    '',
    'Message:',
    message || '-',
  ].join('\n');

  if (NOTIFY_EMAIL) {
    MailApp.sendEmail(NOTIFY_EMAIL, subject, body);
  }
}
```

## 3. Deploy as Web App

In Apps Script:

1. Click `Deploy` -> `New deployment`.
2. Select type: `Web app`.
3. Description: `KHANTHAROS Website Leads`.
4. Execute as: `Me`.
5. Who has access: `Anyone`.
6. Click `Deploy`.
7. Copy the Web App URL.

## 4. Connect the Website

In Lovable, add this environment variable:

`VITE_GOOGLE_SHEET_WEBHOOK_URL`

Value:

Paste your Google Apps Script Web App URL.

The site also supports this older variable name:

`VITE_MANDATE_SHEET_WEBHOOK_URL`

Use only one if possible. Recommended:

`VITE_GOOGLE_SHEET_WEBHOOK_URL`

## 5. Test

1. Open `/mandate`.
2. Submit a test request.
3. Open the Google Sheet.
4. Confirm a new row appears with status `New / 已收到`.
5. Check `khantharos.adm@gmail.com` for the notification email.

Success message shown on the website:

`Thank you. We have received your request and will contact you soon.`

Chinese:

`謝謝您，我們已收到您的委託，將盡快與您聯繫。`
