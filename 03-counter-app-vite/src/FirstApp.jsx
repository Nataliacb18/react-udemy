// const newMessage = [1,2,3,4,5,6,7,8,9];
// const newMessage = {
//   message: 'Holiiii',
//   title: 'Natalia'
// };

// const dog = {
//   name: 'Layla',
//   sexo: 'Hembra',
// }

// const getResult = () => {
//   return 4 + 4;
// }

import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle}) => {

  if(!title) {
    throw new Error('El titulo es null')
  }

  return (
    <>
        {/* <h1>{ newMessage }</h1> */}
        {/* <h1>{JSON.stringify(newMessage)}</h1> */}
        {/* <h1>{JSON.stringify(dog.name)}</h1> */}
        {/* <h2>{JSON.stringify(dog.sexo)}</h2> */}
        {/* <h2>{getResult()}</h2> */}
        <h1>{title}</h1>
        <h2>{subTitle + 1}</h2>

    </>

  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,

}