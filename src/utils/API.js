import emailjs from 'emailjs-com';

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const userId = process.env.REACT_APP_USER_ID;


const Utilities = {

  sendMail: async (message) => {
    try {
      let result = await emailjs.send(serviceId, templateId, { message }, userId);
      if (result != null && result.status === 200) {
        return true;
      }
      return false;
    }
    catch (err) {
      console.log(err);
      return false;
    }
  }
}

export default Utilities;
