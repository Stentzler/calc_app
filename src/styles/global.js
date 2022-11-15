import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;  
  }

  body{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2e3045;
    min-height: 100vh;
    font-family: 'Inter', serif;
    font-size: 1rem; 
  }

  button {
    display: inline-block;
    border-radius: 4px;
    background-color: #3d405b;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 16px;
    padding: 10px 12px;
    width: 130px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 3px;
  }

  button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  button span:after {
    content: '»';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -15px;
    transition: 0.5s;
  }

  button:hover span {
    padding-right: 15px;
  }

  button:hover span:after {
    opacity: 1;
    right: 0;
  }

  .input {
    max-width: 190px;
    height: 30px;
    border: 2px solid transparent;
    outline: none;
    border-bottom: 2px solid #3f3f3f;
    caret-color: #3f3f3f;
    background-color: #fff;
    padding: 5px;
    transition: .5s linear;
    font-family: inherit;
    letter-spacing: 1px;
  } 

  p.error{
    color: #fd3029;
    font-size: 14px;
  }
  
@keyframes a {
 0% {
  opacity: 1;
  transform: scale(1) rotateY(0deg);
 }

 50% {
  opacity: 0;
  transform: scale(.8) rotateY(180deg);
 }

 100% {
  opacity: 1;
  transform: scale(1) rotateY(360deg);
 }
}

  @media (max-width: 840px) {
    body {
      overflow-x: hidden;
      font-size: 0.9rem;
    }

    .app{
      max-width: 93%;
      display: flex;
      align-items: center;
    }
  }

  /* Removing arrows from input type number */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;
