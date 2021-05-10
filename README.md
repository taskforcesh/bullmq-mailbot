

# BullMQ Tutorial - Mailbot

This tutorial shows how to easily create a bot for sending emails.
The tutorial is divided into several parts, every part is located on a different branch so
that you can navigate the code easily matching the tutorial text.


# Install

Just clone this repo and when inside the repo install the dependencies:

```bash
   yarn
```

after that you can build the sources:

```bash
   yarn build
```

and run the service:

```bash
   yarn start
```

Note, in order to be able to send emails with this module you need to
setup valid credentials for AWS as well as having a local Redis™ instance running.

To test the service, in a separate terminal run:
```bash
   yarn test 'your_test@email.com'
```
