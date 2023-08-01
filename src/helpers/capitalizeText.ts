export const capitalizeText = ( string: string ) => {
    const separatedWords = string.split(" ");
    const capitalizedWords = separatedWords.map( word => word[0].toLocaleUpperCase() + word.slice(1) );
    return capitalizedWords.join(" ");

}