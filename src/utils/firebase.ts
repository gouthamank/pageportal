import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
import config from '@/config';

export function initialiseFirebase() {
    const app = initializeApp(config.firebase);
    getAnalytics(app);
}

export function fireLinkClickEvent(link: string) {
    try {
        logEvent(getAnalytics(), 'page_view', {
            page_title: link,
            page_location: link,
        });
    } catch (error) {}
}

export function fireTabClickEvent(text: string) {
    try {
        logEvent(getAnalytics(), 'tab_click', {
            value: text,
        });
    } catch (error) {}
}
