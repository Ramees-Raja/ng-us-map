# Angular SVG US Map

This package is used to generate US SVG Map and also giving ability to set callback function and some parameters to change fill & stocke color.

## How to install

```bash
npm i ng-us-map
```

## Configure

In app.module.ts

```bash
<ng-us-map></ng-us-map>
```

## API Reference

Inputs

| Property | Type    | 
| :---:   | :---: | 
| backgroundColor | String (eg: #000)   | 
| strokeColor | String (eg: #FFFFFF)   |
| textColor | String (eg: #FFFFFF)   |
| statesData | Object Array ( eg: [ { "id" : "AK" , "strokeColor" : "red"} ])   |

Events

|  |     | 
| :---:   | :---: | 
| (onClickUsMap) |  Will be emitted when state area has been clicked. It returns state abbr   | 