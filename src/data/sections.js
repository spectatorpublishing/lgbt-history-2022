import theme from '../theme';
import {
    a_and_e_articles,
    sports_articles,
    opinion_articles,
    uni_news_articles,
    city_news_articles,
    audio_articles,
    spectrum_articles
  } from "../data/articles";

export const sections = [
    {
        title: "A&E",
    },
    {
        title: "SPORTS",
    },
    {
        title: "UNI NEWS",
    },
    {
        title: "SPECTRUM",
    },
    {
        title: "OPINION",
    },
    {
        title: "CITY NEWS",
    },
    {
        title: "AUDIO",
    },
];

export const stripes = [
    {
        "index": 1,
        "title": "A&E",
        "color": theme.colors.lightRed,
        "saturated": theme.colors.saturatedRed,
        "articles": a_and_e_articles,
    },
    {
        "index": 2,
        "title": "Sports",
        "color": theme.colors.lightOrange,
        "saturated": theme.colors.saturatedOrange,
        "articles": sports_articles,
    },
    {
        "index": 3,
        "title": "University News",
        "color": theme.colors.lightYellow,
        "saturated": theme.colors.saturatedYellow,
        "articles": uni_news_articles,
    },
    {
        "index": 4,
        "title": "Spectrum",
        "color": theme.colors.lightGreen,
        "saturated": theme.colors.saturatedGreen,
        "articles": spectrum_articles,
    },
    {
        "index": 5,
        "title": "Opinion",
        "color": theme.colors.lightBlue,
        "saturated": theme.colors.saturatedBlue,
        "articles": opinion_articles,
    },
    {
        "index": 6,
        "title": "City News",
        "color": theme.colors.lightIndigo,
        "saturated": theme.colors.saturatedIndigo,
        "articles": city_news_articles,
    },
    {
        "index": 7,
        "title": "Audio",
        "color": theme.colors.lightPurple,
        "saturated": theme.colors.saturatedPurple,
        "articles": audio_articles,
    },
];