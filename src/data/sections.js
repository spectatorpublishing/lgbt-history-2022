import theme from '../theme';
import {
    eye_articles,
    sports_articles,
    opinion_articles,
    a_and_e_articles,
    uni_news_articles,
    city_news_articles
  } from "../data/articles";

export const sections = [
    {
        title: "HOME",
        url: "/",
        exact: true,
    },
    {
        title: "NEWS",
        url: "/news",
    },
    {
        title: "OPINION",
        url: "/opinion",
    },
    {
        title: "SPORTS",
        url: "/sports",
    },
    {
        title: "A&E",
        url: "/a&e",
    },
    {
        title: "THE EYE",
        url: "/eye",
    },
];

export const stripes = [
    {
        "index": 1,
        "title": "News",
        "color": theme.colors.lightRed,
        "saturated": theme.colors.saturatedRed,
        "articles": uni_news_articles,
    },
    {
        "index": 2,
        "title": "Opinion",
        "color": theme.colors.lightOrange,
        "saturated": theme.colors.saturatedOrange,
        "articles": opinion_articles,
    },
    {
        "index": 3,
        "title": "Sports",
        "color": theme.colors.lightYellow,
        "saturated": theme.colors.saturatedYellow,
        "articles": sports_articles,
    },
    {
        "index": 4,
        "title": "A&E",
        "color": theme.colors.lightGreen,
        "saturated": theme.colors.saturatedGreen,
        "articles": a_and_e_articles,
    },
    {
        "index": 5,
        "title": "The Eye",
        "color": theme.colors.lightBlue,
        "saturated": theme.colors.saturatedBlue,
        "articles": uni_news_articles,
    },
    {
        "index": 6,
        "title": "Spectrum",
        "color": theme.colors.lightPurple,
        "saturated": theme.colors.saturatedPurple,
        "articles": uni_news_articles,
    },
];