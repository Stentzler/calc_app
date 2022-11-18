import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;  
  }

  h1{
    color: #333;
  }

  :root {
    --secondary: #171617ca;
    --primary: #1B001B;
    --error:#f45446;
  }

  body{
    display: flex;
    color: var(--secondary);
    align-items: center;
    justify-content: center;
    background-color: #1b001bdd;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCI+PGRlZnM+PGZpbHRlciBpZD0iZGFya3JlYWRlci1pbWFnZS1maWx0ZXIiPjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwLjI0OSAtMC42MTQgLTAuNjcyIDAuMDAwIDEuMDM1IC0wLjY0NiAwLjI4OCAtMC42NjQgMC4wMDAgMS4wMjAgLTAuNjM2IC0wLjYwOSAwLjI1MCAwLjAwMCAwLjk5NCAwLjAwMCAwLjAwMCAwLjAwMCAxLjAwMCAwLjAwMCIgLz48L2ZpbHRlcj48L2RlZnM+PGltYWdlIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWx0ZXI9InVybCgjZGFya3JlYWRlci1pbWFnZS1maWx0ZXIpIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J3NjYWxlJyB3aWR0aD0nNDAwJyBoZWlnaHQ9JzQwMCcgdmlld0JveD0nMCAwIDgwMCA4MDAnJTNFJTNDZyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzQwNCcgY2xhc3M9J2NvbG9yMicgc3Ryb2tlLXdpZHRoPScxJyUzRSUzQ3BhdGggZD0nTTc2OSAyMjlMMTAzNyAyNjAuOU05MjcgODgwTDczMSA3MzcgNTIwIDY2MCAzMDkgNTM4IDQwIDU5OSAyOTUgNzY0IDEyNi41IDg3OS41IDQwIDU5OS0xOTcgNDkzIDEwMiAzODItMzEgMjI5IDEyNi41IDc5LjUtNjktNjMnLyUzRSUzQ3BhdGggZD0nTS0zMSAyMjlMMjM3IDI2MSAzOTAgMzgyIDYwMyA0OTMgMzA4LjUgNTM3LjUgMTAxLjUgMzgxLjVNMzcwIDkwNUwyOTUgNzY0Jy8lM0UlM0NwYXRoIGQ9J001MjAgNjYwTDU3OCA4NDIgNzMxIDczNyA4NDAgNTk5IDYwMyA0OTMgNTIwIDY2MCAyOTUgNzY0IDMwOSA1MzggMzkwIDM4MiA1MzkgMjY5IDc2OSAyMjkgNTc3LjUgNDEuNSAzNzAgMTA1IDI5NSAtMzYgMTI2LjUgNzkuNSAyMzcgMjYxIDEwMiAzODIgNDAgNTk5IC02OSA3MzcgMTI3IDg4MCcvJTNFJTNDcGF0aCBkPSdNNTIwLTE0MEw1NzguNSA0Mi41IDczMS02M002MDMgNDkzTDUzOSAyNjkgMjM3IDI2MSAzNzAgMTA1TTkwMiAzODJMNTM5IDI2OU0zOTAgMzgyTDEwMiAzODInLyUzRSUzQ3BhdGggZD0nTS0yMjIgNDJMMTI2LjUgNzkuNSAzNzAgMTA1IDUzOSAyNjkgNTc3LjUgNDEuNSA5MjcgODAgNzY5IDIyOSA5MDIgMzgyIDYwMyA0OTMgNzMxIDczN00yOTUtMzZMNTc3LjUgNDEuNU01NzggODQyTDI5NSA3NjRNNDAtMjAxTDEyNyA4ME0xMDIgMzgyTC0yNjEgMjY5Jy8lM0UlM0MvZyUzRSUzQ2cgY2xhc3M9J2NvbG9yMycgZmlsbD0nJTIzNTA1JyUzRSUzQ2NpcmNsZSBjbGFzcz0nc2l6ZTEnIGN4PSc3NjknIGN5PScyMjknIHI9JzUnLyUzRSUzQ2NpcmNsZSBjbGFzcz0nc2l6ZTEnIGN4PSc1MzknIGN5PScyNjknIHI9JzUnLyUzRSUzQ2NpcmNsZSBjbGFzcz0nc2l6ZTEnIGN4PSc2MDMnIGN5PSc0OTMnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjbGFzcz0nc2l6ZTEnIGN4PSc3MzEnIGN5PSc3MzcnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjbGFzcz0nc2l6ZTEnIGN4PSc1MjAnIGN5PSc2NjAnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjbGFzcz0nc2l6ZTEnIGN4PSczMDknIGN5PSc1MzgnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjbGFzcz0nc2l6ZTEnIGN4PScyOTUnIGN5PSc3NjQnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjbGFzcz0nc2l6ZTEnIGN4PSc0MCcgY3k9JzU5OScgcj0nNScvJTNFJTNDY2lyY2xlIGNsYXNzPSdzaXplMScgY3g9JzEwMicgY3k9JzM4Micgcj0nNScvJTNFJTNDY2lyY2xlIGNsYXNzPSdzaXplMScgY3g9JzEyNycgY3k9JzgwJyByPSc1Jy8lM0UlM0NjaXJjbGUgY2xhc3M9J3NpemUxJyBjeD0nMzcwJyBjeT0nMTA1JyByPSc1Jy8lM0UlM0NjaXJjbGUgY2xhc3M9J3NpemUxJyBjeD0nNTc4JyBjeT0nNDInIHI9JzUnLyUzRSUzQ2NpcmNsZSBjbGFzcz0nc2l6ZTEnIGN4PScyMzcnIGN5PScyNjEnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjbGFzcz0nc2l6ZTEnIGN4PSczOTAnIGN5PSczODInIHI9JzUnLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRSIgLz48L3N2Zz4=");
    min-height: 100vh;
    font-family: 'Inter', serif;
    font-size: 1rem; 
  }

  button {
    display: inline-block;
    border-radius: 4px;
    background-color: #17ba55;
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

  button:disabled {
    background-color: #17ba5581;
    transition: all 0.25s;
    &:hover{
      cursor: not-allowed;
    }
  }

  button:disabled > span{
    transition: all 0.25s;
    &:hover{
      cursor: not-allowed;
    }
  }

  .input {
    max-width: 200px;
    height: 30px;
    border: 2px solid transparent;
    outline: none;
    border-bottom: 2px solid var(--primary);
    caret-color: #000;
    background-color: #fff;
    padding: 5px;
    transition: .5s linear;
    font-family: inherit;
    letter-spacing: 1px;
  } 

  p.error{
    color: var(--error);
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
