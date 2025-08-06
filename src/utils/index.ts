
export const capitalizeStr = (str: string): string => {
    if (!str) return str;
    const capitalizedStr = str.trim();
    if (capitalizedStr.length === 0) throw new Error("String cannot be empty");
    return capitalizedStr.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");



};