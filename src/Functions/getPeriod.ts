export const getPeriod = (years: number) => {
    const currentDate = new Date();
    const beforeTwoYearsDate = new Date() ;
    beforeTwoYearsDate.setFullYear(currentDate.getFullYear() - years)
    const dateDefaultPeriod = [beforeTwoYearsDate.toISOString().split("T").splice(0, 1)[0], currentDate.toISOString().split("T").splice(0, 1)[0]];
    return dateDefaultPeriod;
}

export const getMinDateForHistory = () => {
    const currentDate = new Date();
    const beforeTwoYearsDate = new Date() ;
    beforeTwoYearsDate.setFullYear(currentDate.getFullYear() - 20)
    return beforeTwoYearsDate.toISOString().split("T").splice(0, 1)[0];
};