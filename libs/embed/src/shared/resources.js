let resourcesConstants;

if (process.env.ENVIRONMENT === 'production') {
  resourcesConstants = {
    API_URL: '',
    IFRAME_URL: process.env.WIDGET_URL || 'https://widget.novu.co',
    WWW_URL: process.env.WIDGET_URL || 'https://widget.novu.co',
    SENTRY_DSN: 'https://01da3a478106f3dc4448ce2edfc2b4a7@o4508090488127488.ingest.us.sentry.io/4508204170608640',
  };
} else if (process.env.ENVIRONMENT === 'dev') {
  resourcesConstants = {
    API_URL: '',
    IFRAME_URL: process.env.WIDGET_URL || 'https://dev.widget.novu.co',
    WWW_URL: process.env.WIDGET_URL || 'http://127.0.0.1:3500',
    SENTRY_DSN: 'https://01da3a478106f3dc4448ce2edfc2b4a7@o4508090488127488.ingest.us.sentry.io/4508204170608640',
  };
} else {
  resourcesConstants = {
    API_URL: '',
    IFRAME_URL: process.env.WIDGET_URL || 'http://127.0.0.1:3500',
    WWW_URL: process.env.WIDGET_URL || 'http://127.0.0.1:3500',
    SENTRY_DSN: 'https://01da3a478106f3dc4448ce2edfc2b4a7@o4508090488127488.ingest.us.sentry.io/4508204170608640',
  };
}

export const DEBUG = false;
export const { API_URL } = resourcesConstants;
export const { IFRAME_URL } = resourcesConstants;
export const { WWW_URL } = resourcesConstants;
export const { SENTRY_DSN } = resourcesConstants;
