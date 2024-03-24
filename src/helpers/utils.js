export const calculateAge = (birthday) => {
  const userBirthdayReplace = birthday.replace(/-/g, '/');
  const today = new Date();
  const birthDate = new Date(userBirthdayReplace);
  const currentAge = today.getFullYear() - birthDate.getFullYear();

  return currentAge;
};
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

/*
React: decoupling UI and business logic
https://www.youtube.com/watch?v=NmLIRiphrTE
*/
