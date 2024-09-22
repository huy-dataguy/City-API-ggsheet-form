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
