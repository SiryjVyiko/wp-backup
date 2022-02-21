  return {
    result : 0,
    settings : {
      "fields": [{
        "name": "cronTime",
        "caption": "Backup schedule",
        "type": "list",
        "tooltip": "<span>A simple <a href=\"https://en.wikipedia.org/wiki/Cron#Overview\"> cron-based</a>
    scheduler to automatically start and stop environment based on prescribed timing
    instructions.</span><div><b>Note</b> that the required timestamps should be specified
    respectively to the UTC time zone.</div>",              
        "editable": true,
        "values": {
          "0 6 1/1 * *": "0 6 1/1 * *",
          "*/30 * * * *": "*/30 * * * *",
          "0 */1 * * *": "0 */1 * * *",
          "0 */4 * * *": "0 */4 * * *",
          "0 */6 * * *": "0 */6 * * *",
          "0 */12 * * *": "0 */12 * * *",
          "0 6 1/7 * *": "0 6 1/7 * *"
        },
        "default": "0 */12 * * *",
        "regexText": "Cron syntax is incorrect!",
        "regex": "^(((([\\\\*]{1}){1,})|((\\\\*\\\\\\/){0,1}(([0-9\\/\\*\\-\\,]{1}){1,}|(([1-5]{1}){1}([0-9\\/\\*\\-\\,]{1}){1,}){1}))) ((([\\\\*]{1}){1,})|((\\\\*\\\\\\/){0,1}(([0-9\\/\\*\\-\\,]{1}){1,}|(([1]{1}){1}([0-9\\/\\*\\-\\,-]{1}){1,}){1}|([2]{1}){1}([0-3]{1}){1}))) ((([\\\\*]{1}){1})|((\\\\*\\\\\\/){0,1}(([1-9]{1}){1}|(([1-2]{1}){1}([0-9\\/\\*\\-\\,]{1}){1,5}){1}|([3]{1}){1}([0-1]{1}){1}))) ((([\\\\*]{1}){1})|((\\\\*\\\\\\/){0,1}(([1-9]{1}){1}|(([1-2]{1}){1}([0-9\\/\\*\\-\\,]{1}){1,}){1}|([3]{1}){1}([0-1]{1}){1}))|(jan|feb|mar|apr|may|jun|jul|aug|sep|okt|nov|dec)(-?\\w+?)?) ((([\\\\*]{1}){1})|((\\\\*\\\\\\/){0,1}(([0-7]{1,}(-?[0-7]?(,[0-7]){0,6})){1}))|((sun|mon|tue|wed|thu|fri|sat)?(,(sun|mon|tue|wed|thu|fri|sat)){0,6})(-?\\w+?)?))$"
      }, {
        "type": "spinner",
        "name": "backupCount",
        "caption": "N of stored backups",
        "min": 1,
        "max": 10,
        "default": 5
      }]
    }
  };
