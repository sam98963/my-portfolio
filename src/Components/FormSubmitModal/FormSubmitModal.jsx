import { useEffect } from 'react';
import PropTypes from "prop-types"
export default function FormSubmitModal({isModalVisible, setIsModalVisible}){
  function handleModalClose(){
    setIsModalVisible(false);
  }

  useEffect(() => {
    let timer;
    if (isModalVisible) {
      timer = setTimeout(() => {
        setIsModalVisible(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isModalVisible, setIsModalVisible]);
return isModalVisible ?( 
  <div className="flex flex-row items-center justify-between bg-green-500 opacity-90 w-full h-20 absolute z-10 top-0 left-0">
    <h2 className="text-center m-auto">Thanks for getting in touch, I&apos;ll get back to you ASAP!</h2>
    <h2 className="mx-4 cursor-pointer" onClick={handleModalClose}>&#x2716;</h2>
  </div>
) : null
}

FormSubmitModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  setIsModalVisible: PropTypes.func.isRequired,
}