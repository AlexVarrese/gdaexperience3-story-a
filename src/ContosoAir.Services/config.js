module.exports = {
    NOTIFICATION_HUB: process.env.NOTIFICATION_HUB || 'XXXXXXXXXXX',
    NOTIFICATION_SECRET: process.env.NOTIFICATION_SECRET || 'Endpoint=sb://XXXXXXXXXXX-namespace.servicebus.windows.net/;SharedAccessKeyName=DefaultFullSharedAccessSignature;SharedAccessKey=XXXXXXXXXXX',
    DOCUMENT_DB_ENDPOINT: process.env.DOC_DB_ENDPOINT || 'XXXXXXXXXXX',
    DOCUMENT_DB_PRIMARYKEY: process.env.DOC_DB_PRIMARYKEY || 'XXXXXXXXXXX',
    DOCUMENT_DB_DATABASE: process.env.DOC_DB_DATABASE || 'XXXXXXXXXXX',
    DOCUMENT_DB_SEAT: process.env.DOC_DB_SEAT || 'XXXXXXXXXXX',
    DOCUMENT_DB_BOOKING: process.env.DOC_DB_BOOKING || 'XXXXXXXXXXX',
    DOCUMENT_DB_Flight: process.env.DOC_DB_Flight || 'XXXXXXXXXXX',
    GET_SOLOSERVICE: process.env.GET_SOLOSERVICE || 'XXXXXXXXXXX'
};
