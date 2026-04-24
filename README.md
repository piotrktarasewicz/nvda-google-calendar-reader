# Google Calendar Reader

Polish version: [README_pl.md](README_pl.md)

Google Calendar Reader is a test NVDA add-on for Windows. It allows users to sign in to Google Calendar, choose calendars, read events, and perform basic event operations from the keyboard.

## Project status

This project is currently in a test version. It has not completed full Google verification yet, so it is not offered as a finished public tool for all users.

If you want to test the add-on or ask about access, please contact the author.

## Features

The add-on allows you to:

- sign in to your Google account through a web browser,
- read Google Calendar events for today and the following days,
- choose which calendars should be included in the spoken output,
- switch between short mode and full mode,
- hear when an event is currently in progress,
- skip already finished events for the current day,
- create events,
- edit events,
- delete events.

## Requirements

- Windows
- NVDA 2023.1 or newer
- Internet access
- a Google account with Google Calendar enabled

## Installation

1. Install the add-on in NVDA.
2. Restart NVDA if required.
3. Make sure the add-on is enabled.

## First sign-in

To sign in to Google Calendar:

1. Press:
   `NVDA+Control+Shift+0`
2. Your web browser will open.
3. Sign in to your Google account and allow the required calendar access.
4. After sign-in is complete, return to NVDA.
5. Press:
   `NVDA+Control+Shift+0` again.

If sign-in was successful, the add-on will announce that you are signed in to Google Calendar.

## Keyboard shortcuts

### Sign-in and status

`NVDA+Control+Shift+0`

- starts Google sign-in if the user is not signed in,
- checks sign-in status if the user is already signed in.

### Event reading

`NVDA+Control+Shift+1`  
Read events for today

`NVDA+Control+Shift+2`  
Read events for tomorrow

`NVDA+Control+Shift+3`  
Read events for the day after tomorrow

`NVDA+Control+Shift+4`  
Read events for 3 days from now

`NVDA+Control+Shift+5`  
Read events for 4 days from now

`NVDA+Control+Shift+6`  
Read events for 5 days from now

`NVDA+Control+Shift+7`  
Read events for 6 days from now

### Speech mode

`NVDA+Control+Shift+8`

Switches between:

- short mode,
- full mode.

### Calendar selection

`NVDA+Control+Shift+9`

Opens the calendar selection window and lets you choose which calendars should be included in spoken event output.

## Choosing calendars

In the calendar selection window:

- Up and Down Arrow move through the list,
- Space checks or unchecks the selected calendar,
- Enter saves the selection and closes the window,
- Escape closes the window without saving changes.

If no calendar is selected, the add-on automatically uses the primary calendar.

## Speech modes

### Short mode

In short mode, the add-on reads shorter event information.

Examples:

- `14:30, Meeting`
- `until 15:00, Team meeting in progress`
- `all-day, Vacation`

Short mode is intended for quick calendar checks.

### Full mode

In full mode, the add-on reads more complete event information.

Examples:

- `14:30 to 15:30, Meeting`
- `until 15:00, Team meeting in progress`
- `all-day event, Vacation`

If multiple calendars are selected, the add-on may also announce the calendar name.

## Current-day behavior

For the current day, the add-on:

- skips events that have already finished,
- announces events that are currently in progress,
- reads upcoming events.

Example:

`until 15:00, Team meeting in progress`

For future days, all events on that day are read.

## Calendar-changing operations

The current version of the add-on can create, edit, and delete events in Google Calendar. Before performing an operation that changes the calendar, make sure the selected calendar and event details are correct.

## Add-on language

The add-on automatically adjusts its spoken interface language to the current NVDA language.

Currently supported:

- Polish
- English

## User files

The add-on may create the following local files:

- `token.json` — local Google sign-in token,
- `settings.json` — selected calendars and speech mode settings,
- `last_oauth_error.txt` — helper file for OAuth error diagnostics,
- diagnostic files related to errors while creating, editing, or deleting events.

These files are stored locally on the user's computer. Diagnostic files may contain technical error information and, in some cases, data entered into an event form.

## Privacy

The add-on communicates with Google services required for sign-in and Google Calendar API access. It does not send calendar data to an external server controlled by the author and does not maintain a separate database of user events.

The current version uses an access scope that allows reading calendars and events, as well as creating, editing, and deleting events when the user runs the corresponding function.

## Troubleshooting

### The add-on says the user is not signed in

Press:
`NVDA+Control+Shift+0`

and complete sign-in in the web browser.

### The browser opens but sign-in does not complete correctly

Check your Internet connection and make sure your Google account has access to Google Calendar.

### The add-on reads from the wrong calendar

Press:
`NVDA+Control+Shift+9`

and check which calendars are selected.

### The add-on reads too much or too little information

Press:
`NVDA+Control+Shift+8`

to switch the speech mode.

## Author

Piotr Tarasewicz
