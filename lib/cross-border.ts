// Detects trips that cross a Saudi land border (GCC / Jordan), where the
// border needs every passenger's nationality and documents.
const CROSS_BORDER = /dubai|abu ?dhabi|sharjah|ajman|ras al khaimah|fujairah|\buae\b|emirates|doha|qatar|bahrain|manama|kuwait|muscat|\boman\b|jordan|amman|aqaba|al batha|ghuwaifat|salwa|abu samra|causeway|halat ammar|al haditha|khafji|nuwaiseeb/i;

export const isCrossBorder = (...places: (string | null | undefined)[]) => CROSS_BORDER.test(places.filter(Boolean).join(' '));
