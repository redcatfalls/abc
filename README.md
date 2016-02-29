# ABC Game
Mobile game for kids

## Installation

Pre requirements:

1. nodejs 4+
2. npm 3+

``` bash
npm install -g ionic@beta webpack cordova tsd
git clone git@github.com:redcatfalls/abc.git abc-game
cd abc-game
npm install
tsd install
```

To build and run application type `ionic serve`

## Ionic project setup

1. Got to [ionic apps](https://apps.ionic.io/apps)
2. Create new app
3. `cp .io-config.json.example .io-config.json`
4. `cp ionic.project.example ionic.project`
5. Find your secret api key for created ionic app here https://apps.ionic.io/app/PUT_YOUR_APP_ID_HERE/config/keys
6. Fill in config files `.io-config.json` and `ionic.project` with `app_id` and `api_key` found at [ionic apps](https://apps.ionic.io/apps)

Now you are able to do `ionic upload` and see your app in [Ionic View](http://view.ionic.io/)

## Contribution

1. Take an issue from [issues list](https://github.com/redcatfalls/abc/issues/)
2. Create branch named `abc-TASK_ID`. You can find task id in issue's url, e.g. https://github.com/redcatfalls/abc/issues/3 - task id is 3, so in this case branch will have name `abc-3`
3. When work with task is over, create pull request to `develop` branch and merge it
