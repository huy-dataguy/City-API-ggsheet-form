# City API Google Sheet Form

This project is a web form that collects user information, including name, gender, date of birth, and city, which is dynamically populated from the Provinces API. Upon submission, data is sent to a Google Sheets document using Google Apps Script, enabling easy storage and management of submissions.

## Features

- **Dynamic City Dropdown**: Fetches a list of cities from the [Provinces API](https://provinces.open-api.vn/) and populates a dropdown menu.
- **Google Sheets Integration**: Submissions are processed and stored directly in a Google Sheets document via Google Apps Script.

## Setup Instructions

### 1. Google Sheets Setup

1. Create a new Google Sheets document.
2. Open the Google Apps Script editor (Extensions > Apps Script).
3. Paste the following code in `Code.gs`:

   ```javascript
   function doPost(e) {
       var sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getActiveSheet();
       var name = e.parameter.name;
       var gender = e.parameter.gender;
       var birthday = e.parameter.birthday;
       var email = e.parameter.email;
       var phone = e.parameter.phone;
       var city = e.parameter.city;
       var address = e.parameter.address;
       var message = e.parameter.message;
       sheet.appendRow([name, gender, birthday, email, phone, city, address, message]);
       return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
   }

### 2. Set Up a Trigger

1. In the Apps Script editor, navigate to the "Triggers" section from the sidebar.
2. Click on the **Add Trigger** button.
3. Configure the following options:
   - **Function to run**: `doPost`
   - **Deployment**: `Head`
   - **Event source**: `From spreadsheet`
   - **Event type**: `On form submit`
4. Click **Save**.

### 3. Publish Your Project

1. Click the **Deploy** button, then select **New Deployment**.
2. Choose **Web app** from the type options.
3. Fill in the following details:
   - **Description**: Provide a descriptive name for your project.
   - **Execute As**: Set to Me
   - **Who has access**: Set to Anyone
4. Click **Deploy**.
5. Remember to copy and save the web app URL. You will need to replace `YOUR_WEBAPP_URL` in your HTML form with this URL:

```html
<form method="POST" action="YOUR_WEBAPP_URL">

### Conclusion

Thank you for following this guide! I hope you found it helpful in setting up your HTML form to connect with Google Sheets. The integration of APIs, such as the Provinces API, enhances the user experience by providing dynamic data, making the form more interactive and accurate.

For additional resources and inspiration, please check out the [html-form-to-google-sheet GitHub project](https://github.com/levinunnink/html-form-to-google-sheet), which offers further insights into form submissions and data handling.
