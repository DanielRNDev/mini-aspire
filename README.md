## WELCOME TO MINIASPIRE

## GETTING STARTED
1. Install development dependencies: In terminal, cd to **this** folder and run thid command:
`yarn install`
2. Run server by using this command at root folder:
`yarn start-server`
3. Run packages by using this command at root folder:
`yarn start --reset-cache`
4. For running on ios, run this command on `ios/` folder:
`pod install`
5. For running on android
- In android folder: create local.properties and added your sdk url.
For example `sdk.dir=/Users/xxx/Library/Android/sdk`

## IMPORTANT NOTE
Android cannot connect to local server so we need to open package json and change `start-server` with your local ip

For example: `"start-server": "node server/index.js --watch db.json --host 192.168.1.XXX"`

## USER STORY

As a user, first time login will show the Home screen which user can create the new loan plan:

![Create plan](https://i.imgur.com/hwpPF4Dl.png)

After they finished and submitted, the app will navigate to main screen which contain 2 tabs:
1. Loan information
2. Repay loan
- The first tab shows all the plans user created which `plan purpose`, `borrow amount`, `paid progress`, `total paid`, `approved by bank`, and `repayment progress`.

![View plan](https://i.imgur.com/fPcFhcFl.png)

- The second tab just simple show the repay button for all the plans in list. Click on that just simple call an API payment for loan and update to the first tab.

![Repay](https://i.imgur.com/omg6SD4l.png)

- After finished payment, the new paid date and progress will update.

![Updated plan](https://i.imgur.com/uBpnAICl.png)
