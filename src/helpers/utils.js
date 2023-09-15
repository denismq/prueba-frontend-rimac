/*
EJEMPLO PARA CALCUÑAR LA EDAD Y MOSTRAR LOS PLANES

export const calculateAge = (date) => {
  const today = moment();
  const birth = moment(date, 'DD-MM-YYYY');
  const different = moment.duration(today.diff(birth));
  const days = different.asDays();
  const years = different.asYears();

  return {
    days,
    years,
  };
};
OTRO EJEMPLO: 
export const getYearsForCreditCard = () => {
  const actualYear = new Date().getFullYear();
  const arrayForYears = Array.from(Array(20).keys());
  const yearsArray = arrayForYears.map(index => ({
    name: `${actualYear + index}`,
    value: `${actualYear + index}`,
  }));

  return yearsArray;
};
*/
