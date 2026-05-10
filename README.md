# Google Calendar Reader

Polish version: [README_pl.md](README_pl.md)

Google Calendar Reader is a test NVDA add-on for Windows. It allows users to sign in to Google Calendar, choose calendars, read events, and perform event operations directly from the keyboard.

## Project status

This project is currently in a test version.

The add-on can be downloaded publicly, but Google sign-in works only for approved test users because the Google OAuth project is still in testing mode.

If you want to test the add-on, please contact the author using the email address published on the project website:

- https://ptprojects.app

## Features

The add-on allows you to:

- sign in to your Google account through a web browser,
- read Google Calendar events for today and the next 7 days,
- preview events for another selected day,
- choose calendars used for reading, creating, and editing events,
- switch between short mode and full mode,
- hear when an event is currently in progress,
- skip already finished events for the current day,
- create events,
- edit events,
- delete one or many events,
- work through layered NVDA keyboard shortcuts.

## Requirements

- Windows
- NVDA 2023.1 or newer
- Internet access
- a Google account with Google Calendar enabled

The current working version has been tested successfully with NVDA 2026.1.

## Installation

1. Install the add-on in NVDA.
2. Restart NVDA if required.
3. Make sure the add-on is enabled.

## First sign-in

To sign in to Google Calendar:

1. Press `NVDA+Shift+G`.
2. Press `0`.
3. Your web browser will open.
4. Sign in to your Google account and allow the required calendar access.
5. After sign-in is complete, return to NVDA.
6. Press `NVDA+Shift+G`, then press `0` again.

If sign-in was successful, the add-on will announce that you are signed in to Google Calendar.

## Layered keyboard shortcuts

The add-on uses a layered command system.

First press:

`NVDA+Shift+G`

Then press one of the following keys:

- `0` — sign in or check sign-in status
- `1` — read events for today
- `2` — read events for tomorrow
- `3` — read events for the day after tomorrow
- `4` — read events in 3 days
- `5` — read events in 4 days
- `6` — read events in 5 days
- `7` — read events in 6 days
- `8` — switch reading mode
- `9` — choose calendars
- `N` — add an event
- `E` — edit an event
- `U` — delete events
- `P` — show events for a selected day

## Direct shortcuts

The add-on also provides direct shortcuts for the most important edit operations:

- `NVDA+Control+Shift+N` — add an event
- `NVDA+Control+Shift+E` — edit an event
- `NVDA+Control+Shift+U` — delete events

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

Press `NVDA+Shift+G`, then press `0`, and complete sign-in in the web browser.

### The browser opens but sign-in does not complete correctly

Check your Internet connection and make sure your Google account has access to Google Calendar.

### The add-on reads from the wrong calendar

Press `NVDA+Shift+G`, then press `9`, and check which calendars are selected.

### The add-on reads too much or too little information

Press `NVDA+Shift+G`, then press `8` to switch the speech mode.

## Author

Piotr Tarasewicz
