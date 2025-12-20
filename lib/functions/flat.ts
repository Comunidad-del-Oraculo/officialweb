export const getCountryFlag = (country: string): string => {
    const flags: { [key: string]: string } = {
        Uruguay: "🇺🇾",
        Argentina: "🇦🇷",
        Colombia: "🇨🇴",
        "Estados Unidos": "🇺🇸",
        Guatemala: "🇬🇹",
        España: "🇪🇸",
        México: "🇲🇽",
        Chile: "🇨🇱",
        Perú: "🇵🇪",
        Brasil: "🇧🇷",
    };
    return flags[country] || "🌎";
};
