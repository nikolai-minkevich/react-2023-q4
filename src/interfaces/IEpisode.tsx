interface IEpisode {
  uid: string;
  title: string;
  seasonNumber: number;
  episodeNumber: number;
  yearFrom: number;
  yearTo: number;
  usAirDate: string;
}

export default IEpisode;

/**
 * [
    {
      "uid": "EPMA0000001002",
      "title": "'Til Death Do Us Part",
      "titleGerman": "Bis daß der Tod uns scheide",
      "titleItalian": null,
      "titleJapanese": null,
      "series": {
        "uid": "SEMA0000073238",
        "title": "Star Trek: Deep Space Nine"
      },
      "season": {
        "uid": "SAMA0000001741",
        "title": "DS9 Season 7"
      },
      "seasonNumber": 7,
      "episodeNumber": 18,
      "productionSerialNumber": "40510-568",
      "featureLength": false,
      "stardateFrom": null,
      "stardateTo": null,
      "yearFrom": 2375,
      "yearTo": 2375,
      "usAirDate": "1999-04-14",
      "finalScriptDate": null
    },
 */
