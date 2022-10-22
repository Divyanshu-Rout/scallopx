import React, { useState } from "react";
import { images } from "../../config/images";
import {
  ContactUsStyle,
  Heading,
  MainHead,FormTitle,
  FormText,
  FormErrorText,
  SideLines1,SideLines2,MainHeadWrapper,CtaForm,
  InputField,
  ContactUsWrapper,
  FormWrapper,
  ContactTitle,
  ContactUsLocations,
  SingleLocation1,
  SingleLocation2,
  SingleLocation3,
  SingleLocation4,
  ContactTitleWrapper,
  Form,
  Input,
  SubmitButton,
  StyledTextarea,
  ThankYouImage,
  ThankYouTitle,
  ThankYouMessage,
  ThankYouMessageWrapper,
  SubmitButtonSmall
} from "./ContactUs.styles";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import { handleValidations } from './validate';
import ToasterFunction from '../ToasterFunc';


const ContactUs = () => {

  const [formState,setFormState] = useState({
   name:'',
   nameStatus:false,
   nameError:'',
   email:'',
   emailStatus:false,
   emailError:'',
   message:'',
   messageStatus:false,
   messageError:''
  })

const [sentStatus,setSentStatus] = useState(false)

  const handleFormInput = async (e) => {
let status = `${e.target.name}Status`
let errorText = `${e.target.name}Error`
let resp = handleValidations(e.target.value,e.target.name)

        await setFormState({
            ...formState,
            [e.target.name]: resp.value,
            [errorText]: resp.errorText,
            [status]: resp.status,
        })
    }

const submitHandler =()=>{
  if (formState.nameStatus) {
    if (formState.emailStatus){
      if (formState.messageStatus){
             handleApi()
            } else { setFormState({...formState, messageStatus: false, messageError: "Please enter message." }) }
    } else { setFormState({...formState, emailStatus: false, emailError: "Please enter email." }) }
 } else { setFormState({...formState, nameStatus: false, nameError: "Please enter name." }) }
}

const handleApi = () => {
  var myHeaders = new Headers();
myHeaders.append("accept", "*/*");
myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3YWxsZXQxOUBtYWlsaW5hdG9yLmNvbSIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdLCJyb2xlIjoiVVNFUiIsImF1dGhlbnRpY2F0ZWQiOnRydWUsInRva2VuS2V5IjoiNGQ2NTRkZGMtMWZiYS00NDVlLTgzNzItOTY5MmE3NzNkOTgxIiwidXNlcklkIjoiNjE1NTQ0MmYxZmY2YmFjNTNlYzM2NDY3IiwidXNlcm5hbWUiOiJ3YWxsZXQxOUBtYWlsaW5hdG9yLmNvbSIsInBob25lIjoiKzkxNzQzODk2NjE3NyIsImlhdCI6MTYzMzQ0NzA1Nywia3ljU3RhdHVzIjoiQUNDRVBURUQiLCJyb2xlSWQiOiIiLCJleHAiOjE2MzM4NzkwNTd9.iHLKR0F4va9I3_JASv3RyA8P1kCNq7LyVtxbMbGRJ80mtBpgqA34SmkBC2CxnHK3nU304AVw74oGinwy74lLow");

var raw = JSON.stringify({

     "email": formState.email,
     "firstName": formState.name,
     "query": formState.message
    
    });

    

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
console.log('https://api.scallopx.com/account/v1/contact-us',requestOptions)
fetch("https://api.scallopx.com/account/v1/contact-us", requestOptions)
  .then(response => response.json())
  .then(result => {
    switch (result.status) {
      case 200: {
        setSentStatus(true)
        // ToasterFunction("info", "Thank you for submitting your feedback.")
      }
      break;
      default : {

      
        ToasterFunction("warn", result.message)
      }
   }
  })
  .catch(error => {
    
    ToasterFunction("error", "Something went wrong.")
    console.log('error', error)
  });
}

  return (
    <ContactUsStyle id="Contact">
      <div className="container">
      
      <Heading>
          <Fade bottom>
            <MainHeadWrapper>
            <SideLines1/>
            <MainHead>Contact Us</MainHead>
            <SideLines2/>
            </MainHeadWrapper>
          </Fade>
        </Heading>
      <ContactUsWrapper>
      { !sentStatus? <>
        <FormWrapper>
        
        <Form
                onSubmit={e => {
                  e.preventDefault();
                  submitHandler()
                  // submitForm(email);
                }}>
        <FormTitle>Leave your message below</FormTitle>
        <FormText>First name</FormText>

        <Input type="text" name="name" onChange={(event) => handleFormInput(event)} placeholder="Enter first name" />
        <FormErrorText>{formState.nameError}</FormErrorText>
        <FormText>Email address</FormText>
        <Input type="text"  name="email"
                                        onChange={(event) => handleFormInput(event)}  placeholder="Enter your email here" />
        <FormErrorText>{formState.emailError}</FormErrorText>
        <FormText>Your message</FormText>
      
        <StyledTextarea name="message"
                                        onChange={(event) => handleFormInput(event)}
             placeholder="Type your message, feedback, query here..."
         />
         <FormErrorText>{formState.messageError}</FormErrorText>
         <FormText></FormText>
         <SubmitButton type="submit" />
         </Form>
         </FormWrapper>
         </> : <>
         <FormWrapper>
           
           <ThankYouImage>
           <img src={images.ContactUsMessage} alt="" />
           </ThankYouImage>
           
          <ThankYouTitle>Thank you for Contacting us! </ThankYouTitle>
          
          <ThankYouMessageWrapper>
          
          <ThankYouMessage>We have recieved your message. </ThankYouMessage>
          
          </ThankYouMessageWrapper>          
          
         < SubmitButtonSmall

         onClick={()=>setSentStatus(false)} 
         >Close</SubmitButtonSmall>
         </FormWrapper>
        </>}
         <ContactUsLocations>
         <SingleLocation4>
              <Fade bottom delay={100}>
                <img src={images.MapLine} alt={""} />
              </Fade>
          </SingleLocation4>
         <ContactTitleWrapper>
         <ContactTitle>Our Offices</ContactTitle>
         <SingleLocation1>
              <Fade bottom delay={100}>
                <img src={images.Location1} alt={""} />
              </Fade>
          </SingleLocation1>
          </ContactTitleWrapper>

          <SingleLocation2>
              <Fade bottom delay={100}>
                <img src={images.Location2} alt={""} />
              </Fade>
          </SingleLocation2>

          <SingleLocation3>
              <Fade bottom delay={100}>
                <img src={images.Location3} alt={""} />
              </Fade>
          </SingleLocation3>
         </ContactUsLocations>
        </ContactUsWrapper>
        
      </div>
    </ContactUsStyle>
  );
};

export default ContactUs;
