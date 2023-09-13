export const getDefaultPeriod = () => {
    const currentDate = new Date();
    const beforeTwoYearsDate = new Date() ;
    beforeTwoYearsDate.setFullYear(currentDate.getFullYear() - 2)
    const dateDefaultPeriod = [beforeTwoYearsDate.toISOString().split("T").splice(0, 1)[0], currentDate.toISOString().split("T").splice(0, 1)[0]];
    return dateDefaultPeriod;
}