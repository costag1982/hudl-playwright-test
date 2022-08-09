# HUDL Technical Test

Playwright & Typescript framework technical test

## Environment Setup

You should be able to run these tests on the following operating systems:

1. Mac
1. Windows
1. Linux

However, this guide assumes you are using Mac.

### System requirements

1. Node16
1. Typescript

## Installation

Run `make install` to install all dependencies from the root of the project.

## Prerequisite Steps

You also need to create a **.env** file at the root of the project and add the following environment variables:

CI=false
BASE_URL='https://www.hudl.com'
USER_PASSWORD='INSERT_PASSWORD_HERE'

As this test framework is testing against production, you will need to add the password into the **.env** file.

**This password will be sent separately.**

## Run the tests

`make test`

## View the test report

`make report`

## Further Reading

The Playwright documentation is excellent and I would encourage you to use them a guide if you need to make any changes.

**https://playwright.dev/docs/intro**

## Feedback

If anything is unclear in this readme file, I welcome feedback so it can be improved.

Happy testing.
